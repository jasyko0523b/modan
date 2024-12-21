<template>
  <div class="main-content">
    <div class="title-container">
      <h2 class="title">ホーム</h2>
    </div>
    <Message v-for="post in postList" :key="post.id" :postId="post.id" :userName="post.user.name" :likesCount="post.likes_count"
      :text="post.text">
      <NuxtLink :to="{ name: 'posts-id', params:{id: post.id}}">
        <img class="header__image" src="../assets/detail.png" alt="" srcset="">
      </NuxtLink>
    </Message>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user_id: 1,
    }
  },
  computed: {
    postList() {
      return this.$store.state.posts.list;
    },
  },
  created() {
    this.$store.dispatch('posts/get');
    this.$store.dispatch('likes/getByUserId', this.user_id);
  },
}
</script>

<style scoped>
.main-content {
  width: 100%;
  color: #fff;
}

.title-container {
  border-left: 1px solid #fff;
  margin: 0;
}

.title {
  margin: 0;
  padding: 15px;
}

.header__image {
  width: 25px;
  height: 100%;
  aspect-ratio: 1;
  margin: 5px;
  cursor: pointer;
}
</style>