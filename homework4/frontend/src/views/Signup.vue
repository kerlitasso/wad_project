<template>
  <div class="auth-container">
    
    <div class="form-card">
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Password" required />
        </div>
        <button type="submit" class="signup-btn">Sign up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      console.log("Registering user:", this.email, this.password);
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.$router.push("/login");
            //location.assign("/");
          })
          .catch((e) => {
            console.log(e);
            console.log("error");
          });
    },
    // Call backend API to register the user
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
