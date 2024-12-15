<template>
    <div class="add-post-container">
      <div class="post-form-container">
        <h2 class="title">Add Post</h2>

        <div class="form-body">
          <textarea v-model="postBody" placeholder="Write your text here" rows="6" cols="40"></textarea>
        </div>

        <button class="addbutton" @click="addPost">Add Post</button>
      </div>
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
        const data = {
          body: this.postBody,
        };

        try {
          const token = localStorage.getItem("authToken");
          const response = await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(data),
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to add post");
          }
          const responseData = await response.json();
          console.log("Post added:", responseData);
          this.$router.push("/home");
        } catch (err) {
          console.error("Error adding post:", err);
          alert("Error adding post: " + err.message);
        }
      },
    },
  }

  </script>
  
  <style scoped>
  .add-post-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    height: 100vh;
    background-color: #e6e6e6;
  }
  .post-form-container {
    background-color: #f0f5e1;
    padding: 30px;
    border-radius: 15px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  header {
    margin-bottom: 20px;
  }
  
  h1 {
    font-size: 18px;
    text-align: center;
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .title {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }

  .form-body {
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 14px;
    resize: vertical;
  }
  
  .addbutton {
    background-color: #6a9ac4;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    width: 30%;
    font-size: 14px;
  }
  
  .addbutton:hover {
    background-color: #4b7ba0;
  }
  </style>
  