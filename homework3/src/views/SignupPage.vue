<template>
    <main>
      <div class="signup-box">
        <form class="signup-form" @submit.prevent="handleSignup">
          <div class="form-group">
            <label>Email:</label>
            <input type="email" v-model="email" placeholder="Email" required />
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input type="password" v-model="password" placeholder="Password" required />
          </div>
          <p v-if="showError" class="error-message">{{ passwordError }}</p>
          <button type="submit">Signup</button>
        </form>
      </div>
    </main>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        passwordError: '',
        showError: false,
      };
    },
    methods: {
      handleSignup() {
        if (this.validatePassword(this.password)) {
          this.$router.push('/');
        } else {
          this.showError = true;
        }
      },
      validatePassword(password) {
        const errors = [];
        this.passwordError = '';
        if (password.length < 8){
          errors.push('should be longer than 8 characters');
        }
        if (password.length > 15){
          errors.push('should be shorter than 15 characters');
        }
        // checks for uppercase letters
        if (!/[A-Z]/.test(password)) {
          errors.push('should include an uppercase letter');
        }
        if (!(password.match(/[a-z]/g) || []).length > 1){
          errors.push('should include at least 2 lowercase letters')
        }
        if (!/\d/.test(password)){
          errors.push('should include a numeric value')
        }
        if (!/^[A-Z]/.test(password)) {
              errors.push('should start with an uppercase letter');
        }
        if (!/_/.test(password)) {
              errors.push('should include the character "_"');
        }
        if (errors.length > 0){
          this.passwordError = `The password is not valid: ${errors.join(', ')}.`;
          return false;
        }
        return true;
      }
    },
  };
  </script>
  
  <style>
 
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    background-color: #f4f4f9; 
    margin: 0;
    padding: 0;
  }
  
  .signup-box {
    background: #ffffff; 
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 20px 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: left;
    width: 300px;
  }
  
  .signup-form .form-group {
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    margin-bottom: 15px;
    font-size: 20px;
  }
  .error-message {
  color: firebrick;
  font-size: 16px;
  margin-top: 5px;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.1);
  }

  
  .signup-form label {
    flex: 1; 
    text-align: left; 
  }
  .signup-form input::placeholder {
  color: #a0a0a0;
  text-align: center;
}
  
  .signup-form input {
    flex: 2; 
    text-align: right;
    padding: 5px;
    border: 1px solid lightgray;
    border-radius: 5px;
  }
  
  
  .signup-form button {
    width: 100%; 
    padding: 10px;
    background-color: #add8e6; 
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    color: white;
    cursor: pointer;
  }
  
  .signup-form button:hover {
    background-color: #87ceeb; 
  }
  </style>
  