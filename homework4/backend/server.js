//npm install express pg bcrypt jsonwebtoken before first run

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { pool, initializeDatabase } = require('./database');

// Server and JWT setup
const app = express();
const PORT = 3000;
const JWT_SECRET = 'sug743852hfequaoifh09'; 


app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
app.use(express.json());

// Initialize database on startup
initializeDatabase();

// Helper function to verify JWT
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'Access denied' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
};
// Signup
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id',
      [email, hashedPassword]
    );
    const token = jwt.sign({ userId: result.rows[0].id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ message: 'Error creating user', error: err.message });
  }
});

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0) return res.status(400).json({ message: 'User not found' });

    const user = result.rows[0];
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
});

// Get all posts
app.get('/posts', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching posts', error: err.message });
  }
});

// Get a single post
app.get('/posts/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
    if (result.rows.length === 0) return res.status(404).json({ message: 'Post not found' });

    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching post', error: err.message });
  }
});

// Add a new post
app.post('/posts', authenticateToken, async (req, res) => {
  const { body } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO posts (body) VALUES ($1) RETURNING *',
      [body]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ message: 'Error adding post', error: err.message });
  }
});

// Update a post
app.put('/posts/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { body } = req.body;
  try {
    const result = await pool.query(
      'UPDATE posts SET body = $1 WHERE id = $2 RETURNING *',
      [body, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ message: 'Post not found' });

    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ message: 'Error updating post', error: err.message });
  }
});

// Delete a post
app.delete('/posts/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) return res.status(404).json({ message: 'Post not found' });

    res.status(200).json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting post', error: err.message });
  }
});

// Delete all posts
app.delete('/posts', authenticateToken, async (req, res) => {
  try {
    await pool.query('DELETE FROM posts');
    res.status(200).json({ message: 'All posts deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting posts', error: err.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
