<template>
    <main>
      <div v-for="post in posts" :key="post.id" class="post">
        {{ post.title }}
      </div>
    </main>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['allPosts']),
    },
  };
  </script>
  
  <style>
  main {
    padding: 20px;
    text-align: center;
  }
  .post {
    background: white;
    margin: 10px auto;
    padding: 10px;
    border: 1px solid lightgray;
    width: 200px;
  }
  </style>
  