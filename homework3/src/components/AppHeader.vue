<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">Sign Up</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style>
header {
  background: lightgray;
  padding: 10px;
  text-align: center;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: black;
}
nav a.router-link-active {
  font-weight: bold;
}
</style>
