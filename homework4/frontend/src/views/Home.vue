<template>
    <div class="home-container">
      <button class="logout" @click="logout">Logout</button>
      <div class="posts-container">
        <div v-if="posts.length === 0">
          <p>No posts yet</p>
        </div>
          <ul v-else>
            <li v-for="post in posts" :key="post.id" @click="goToPost(post.id)">
              {{ post.title }}: {{ post.content }}
            </li>
          </ul>
      </div>
        <div class="button-container">
          <button class="add" @click="goToAddPostPage">Add post</button>
          <button class="delete" @click="deleteAllPosts">Delete all</button>
        </div>
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
    methods: {
      async fetchPosts() {
        try {
          const token = localStorage.getItem('authToken');
          const response = await axios.get('http://localhost:3000/posts', {
            headers: {Authorization: `Bearer ${token}`},
          });
          this.posts = response.data;
        } catch (err) {
          alert('Error fetching posts: ' + err.response.data.message);
        }
      },

      goToPost(postId) {
        this.$router.push(`/post/${postId}`);
      },

      logout() {
        localStorage.removeItem('authToken');
        this.$router.push('/login');
      },

      goToAddPostPage() {
        this.$router.push('/addpost');
      },

      async deleteAllPosts() {
        try {
          const token = localStorage.getItem('authToken');
          await axios.delete('http://localhost:3000/posts', {
            headers: { Authorization: `Bearer ${token}` },
          });
          this.posts = [];
          alert('All posts have been deleted');
        } catch (err) {
          alert('Error deleting posts: ' + err.response.data.message);
        }
      },
    },
  };
  </script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 80vh;
  background-color: #e6e6e6;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.delete,
.add,
.logout{
  background-color: #6a9ac4;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.add {
  margin-right: 100px;
}
.delete:hover,
.add:hover,
.logout:hover{
  background-color: #4b7ba0;
}

span {
  margin: 0 5px;
  font-size: 14px;
  color: #555;
}
.posts-container {
  flex-grow: 1;  /* Allow the posts container to expand and take the available space */

}
</style>