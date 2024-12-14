<template>
    <div>
      <h2>Home Page</h2>
      <ul>
        <li v-for="post in posts" :key="post.id">{{ post.title }}: {{ post.content }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        posts: [],
      };
    },
    async mounted() {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/homepage', {
          headers: { Authorization: `Bearer ${token}` },
        });
        this.posts = response.data;
      } catch (err) {
        alert('Error fetching posts: ' + err.response.data.message);
      }
    },
  };
  </script>
  