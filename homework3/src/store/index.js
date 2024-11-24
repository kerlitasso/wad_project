import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: Array.from({ length: 10 }, (_, i) => ({ id: i + 1, title: `Post ${i + 1}` }))
  },
  getters: {
    allPosts: (state) => state.posts
  },
  mutations: {},
  actions: {},
});
