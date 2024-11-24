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
}
footer a {
  color: blue;
  text-decoration: none;
}
footer a:hover {
  text-decoration: underline;
}
</style>
