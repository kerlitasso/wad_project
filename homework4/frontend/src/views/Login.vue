<template>
  <div class="auth-container">
    <div class="form-card">
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Password" required />
        </div>
        <div class="button-group">
          <button type="submit" class="login-btn">Log in</button>
          <span>Or</span>
          <button type="button" class="signup-btn" @click="$router.push('/signup')">Sign up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Call backend API to log in the user
      console.log("Logging in user:", this.email, this.password);
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
  height: 80vh;
  background-color: #e6e6e6;
}

header {
  margin-bottom: 40px;
}

.form-card {
  background-color: #f0f5e1;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 50px;
  box-shadow: 0px 0px 5px gray;
}

.form-group {
  margin-bottom: 25px;
  align-items: center;
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

.button-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.login-btn,
.signup-btn {
  background-color: #6a9ac4;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.signup-btn {
  background-color: #8cbf75;
}

.login-btn:hover {
  background-color: #4b7ba0;
}

.signup-btn:hover {
  background-color: #6e9c5f;
}

span {
  margin: 0 5px;
  font-size: 14px;
  color: #555;
}
</style>
