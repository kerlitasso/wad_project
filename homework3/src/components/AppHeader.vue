<template>
  <header>
    <p>Homework 3</p>
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
  height: 60px;
  text-align: center;
  border-radius: 15px;
  border-bottom: 2px solid #ccc; /* Subtle border for separation */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Adds subtle shadow */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
header p {
  margin: 0;
  font-size: 40px;
  font-weight: bold;
  color: black;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.1);
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: black;
  font-size: 16px;
}
nav a.router-link-active {
  font-weight: bold;
}
</style>
