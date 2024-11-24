<template>
    <main>
      <form class="signup-form" @submit.prevent="handleSignup">
        <label>
          Email:
          <input type="email" v-model="email" required />
        </label>
        <label>
          Password:
          <input type="password" v-model="password" required />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      handleSignup() {
        alert(`Signed up with email: ${this.email}`);
      },
    },
  };
  </script>
  
  <style>
  main {
    padding: 20px;
    display: flex;
    justify-content: center;
  }
  .signup-form {
    background: #f8f8f8;
    padding: 20px;
    border: 1px solid lightgray;
    border-radius: 5px;
  }
  .signup-form label {
    display: block;
    margin-bottom: 10px;
  }
  .signup-form button {
    margin-top: 10px;
    padding: 5px 10px;
  }
  </style>
  