<template>
  <footer>
    <p>&copy; 2024 My App | <a href="mailto:support@example.com">Contact Us</a></p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style>
footer {
  background: lightgray;
  text-align: center;
  padding: 10px;
  font-size: 0.9rem;
  border-radius: 15px;
  border-bottom: 2px solid #ccc; /* Subtle border for separation */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Adds subtle shadow */
}
footer a {
  color: blue;
  text-decoration: none;
}
footer a:hover {
  text-decoration: underline;
}
</style>
