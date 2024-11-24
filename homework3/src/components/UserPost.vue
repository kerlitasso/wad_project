<template>
  <div class="post">
    <div class="post-header">
      <img :src="post.profilePicture" alt="Profile Picture" class="profile-picture" />
      <div>
        <h3 class="post-author">{{ post.author }}</h3>
        <p class="post-date">{{ new Date(post.created_time).toLocaleString() }}</p>
      </div>
    </div>
    <div class="post-content">
      <p>{{ post.content }}</p>
      <img v-if="post.photo_url" :src="post.photo_url" alt="Post Image" class="post-image" />
    </div>
    <div class="post-footer">
      <button @click="likePost(post.id)">
        <img src="@/assets/heart.png" alt="Like" class="like-icon" /> {{ post.likes }}
      </button>
      <img src ="@/assets/comment.png" alt="Comment" class="comment-icon" /> {{ post.comments }}
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {

  props: {
    post: Object,
  },
  methods: {
    ...mapMutations(['addLike']),
    likePost(postId) {
      this.$store.commit('addLike', postId);
    },
  },
};
</script>

<style>

.post {
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.post-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.post-author {
  font-size: 16px;
  font-weight: bold;
  color: black;
}
.post-date {
  font-size: 12px;
  color: black;
}
.post-content img.post-image {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-top: 10px;
}
.post-footer {
  margin-top: 15px;
  display: flex;
  justify-content: flex-start;
  gap: 5px;
}

.post-footer button {
  display: flex;
  align-items: center;
  gap: 8px;
}
.likes span, .comments span {
  font-size: 14px;
  color: black;
}

.like-icon ,.comment-icon{
  width: 20px;
  height: 20px;
  margin-right: 5px;
  object-fit: contain;
}
.profile-picture {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: contain;
}

</style>
