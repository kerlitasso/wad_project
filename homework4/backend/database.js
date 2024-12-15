const Pool = require('pg').Pool;

// PostgreSQL connection pool
const pool = new Pool({
  user: "postgres",
  password: "Chihir0",   // Enter your PostgreSQL password here
  database: "testWad",
  host: "localhost",
  port: "5432"
});

// Function to initialize the database
const initializeDatabase = async () => {
  try {
    // Create 'users' table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      );
    `);

    // Create 'posts' table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        body TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log('Database initialized');
  } catch (err) {
    console.error('Error initializing database:', err);
  }
};

// Export pool and initializer
module.exports = { pool, initializeDatabase };