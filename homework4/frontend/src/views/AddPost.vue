<template>
    <div class="add-post-container">
      <div class="form-card">
      <form @submit.prevent="addPost">
        <h2>New Post</h2>
        <div class="form-group">
          <label for="body">Body</label>
          <textarea v-model="body" placeholder="Write your post here..." required></textarea>
        </div>
        <button type="submit" class="addPost-btn">Add Post</button>
      </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        body: "",
      };
    },

    methods: {
      async addPost() {
    // Validate post body
    if (this.body.trim() === "") {
      alert("The post body cannot be empty!");
      return;
    }

    try {
      const data = { body: this.body };
      const token = localStorage.getItem('authToken');
      // Send POST request
      const response = await axios.post('http://localhost:3000/posts', data,{
        headers: {
          'Authorization': `Basic ${token}`
        }
      });
      this.$router.push("/home");
      } catch (err) {
        // Handle errors
        if (err.response) {
          console.error("Error response:", err.response.data);
          alert(`Error: ${err.response.data.message}`);
        } else {
          console.error("Unexpected error:", err);
          alert("An unexpected error occurred.");
        }
      }
  },
  },
};
  </script>
  
  <style scoped>
  .auth-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    height: 100vh;
    background-color: #e6e6e6;
  }
  
  header {
    margin-bottom: 20px;
  }
  
  h1 {
    font-size: 18px;
    text-align: center;
  }
  
  .form-card {
    background-color: #f0f5e1;
    padding: 50px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px gray;
  }
  
  .form-group {
    margin-bottom: 15px;
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
  
  .signup-btn {
    background-color: #6a9ac4;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    font-size: 14px;
  }
  
  .signup-btn:hover {
    background-color: #4b7ba0;
  }
  </style>
  