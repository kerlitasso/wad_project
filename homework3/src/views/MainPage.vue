<template>
    <main>
      <div class="posts-container">
        <UserPost
            v-for="post in posts"
            :key="post.id"
            :post="post"
        />
        <button class="reset-button" @click="resetLikes">Reset Likes</button>
      </div>
    </main>
  </template>
  
<script>

import UserPost from '@/components/UserPost.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    UserPost,
  },
  computed: {
    ...mapGetters(['allPosts']),
    posts() {
      return this.allPosts;
    }
  },
  methods: {
    ...mapActions(['loadPosts']),
    resetLikes() {
      this.$store.commit('resetLikes'); // This commits the resetLikes mutation
    },
  },
};
</script>

<style>
main {
  padding: 20px;
  text-align: center;
}
.posts-container {
  max-width: 700px;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
  padding-bottom: 20px;
}
.reset-button {
  background-color: white;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
}
.reset-button:hover {
  background-color: #dadada;
}
@media (max-width: 600px) {
  .posts-container {
    padding: 10px;
    margin-bottom: 15px;
  }
}
</style>
  
