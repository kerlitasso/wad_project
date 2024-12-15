<template>
    <div class="add-post-container">

      <h2>New Post</h2>

      <textarea v-model="postBody" placeholder="Write your text here" rows="4" cols="50"></textarea>

      <button @click="addPost">Add Post</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "AddPostPage",
    data() {
      return {
        postBody: "",
      };
    },
    methods: {
    async addPost() {
        if (this.postBody.trim() === "") {
        alert("The post body cannot be empty!");
        return;
      }

      const currentDate = new Date().toISOString();

      const data ={
        body: this.postBody,
        created_at: currentDate,
      }
    try {
        const token = localStorage.getItem('authToken');
        const response = await axios.post('http://localhost:3000/posts', {
            headers: {Authorization: `Bearer ${token}`},
        });
        console.log('Post added successfully:', response.data);
        this.$router.push('/posts');
    } catch (err) {
        alert('Error fetching posts: ' + err.response.data.message);
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
  