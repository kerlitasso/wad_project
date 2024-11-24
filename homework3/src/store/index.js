import { createStore } from 'vuex';

export default createStore({
  state: {
  "posts": [

  {
    "id": 1,
    "created_time": "2024-10-31T12:30:00Z",
    "profilePicture": require("@/assets/defaultpfp.png"),
    "author": "Mari Ann",
    "content": "Sai alguse õpilaste- ja tudengite võistluse Delta X sissejuhatav laager!",
    "photo_url": require("@/assets/robo_fb.jpg"),
    "likes": 9,
    "comments": 1

  },
  {
    "id": 2,
    "created_time": "2024-10-31T10:30:00Z",
    "profilePicture": require("@/assets/defaultpfp.png"),
    "author": "Artur Ander",
    "content": "Does anybody have a calculator I could borrow this Tuesday?",
    "likes": 15,
    "comments": 6
  },
  {
    "id": 3,
    "created_time": "2024-10-31T10:30:00Z",
    "profilePicture": require("@/assets/defaultpfp.png"),
    "author": "Sandra Kiiks",
    "content": "Looks so pretty, doesn't it?",
    "photo_url": require("@/assets/tartu24.jpg"),
    "likes": 101,
    "comments": 15
  },
  {
    "id": 4,
    "created_time": "2024-10-31T10:30:00Z",
    "profilePicture": require("@/assets/defaultpfp.png"),
    "author": "Triinu Tall",
    "content": "Has anybody seen a blue backpack in Delta? It has a pink water bottle in the side pocket. I lost it a few hours ago...",
    "likes": 13,
    "comments": 2
  },
  {
    "id": 5,
    "created_time": "2024-10-31T10:30:00Z",
    "profilePicture": require("@/assets/defaultpfp.png"),
    "author": "Aliis Mägi",
    "content": "Getting ready for the party tonight, who else is going?",
    "likes": 20,
    "comments": 17
  },
  {
    "id": 6,
    "created_time": "2024-10-31T10:30:00Z",
    "profilePicture": require("@/assets/defaultpfp.png"),
    "author": "Sandra Kiiks",
    "content": "The weather is good today!",
    "photo_url": "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "likes": 101,
    "comments": 15
  },
  {
    "id": 7,
    "created_time": "2024-10-31T10:30:00Z",
    "profilePicture": require("@/assets/defaultpfp.png"),
    "author": "Aivar Jõgi",
    "content": "Wish my cat was this cool, haha!",
    "photo_url": "https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg",
    "likes": 150,
    "comments": 49
  },
  {
    "id": 8,
    "created_time": "2024-10-31T10:30:00Z",
    "profilePicture": require("@/assets/defaultpfp.png"),
    "author": "Marta Mänd",
    "content": "Can somebody help me with my homework?",
    "likes": 11,
    "comments": 4
  },
  {
    "id": 9,
    "created_time": "2024-10-31T10:30:00Z",
    "profilePicture": require("@/assets/defaultpfp.png"),
    "author": "Karl Kari",
    "content": "SMILE:)",
    "likes": 16,
    "comments": 2
  },
  {
    "id": 10,
    "created_time": "2024-10-31T10:30:00Z",
    "profilePicture": require("@/assets/defaultpfp.png"),
    "author": "Peeter Paan",
    "content": "Off to the Neverland",
    "likes": 20,
    "comments": 5
  }
  ]
},
  getters: {
    allPosts: (state) => state.posts
  },
  mutations: {
    addLike(state, postId) {
      const post = state.posts.find((post) => post.id === postId);
      if (post) post.likes++;
    },
    resetLikes(state) {
      state.posts.forEach(post => post.likes = 0);
    },
  },
});
