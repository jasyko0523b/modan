<template>
    <div class="main-content">
        <div class="title-container">
            <h2 class="title">コメント</h2>
        </div>
        <Message v-if="post" :postId="post.id" :userName="post.user.name" :likesCount="post.likes_count"
            :text="post.text">
        </Message>
        <div class="comment-header">
            <p>コメント</p>
        </div>
        <div class="comment-list">
            <div class="comment-container" v-for="comment in comments" :key="comment.id">
                <h2 class="user-name">{{ comment.user.name }}</h2>
                <div>{{ comment.text }}</div>
            </div>
        </div>
        <div class="comment-form">
            <textarea name="" id="" v-model="text"></textarea>
            <div class="align-right">
                <button @click="storeComment" class="submit-button">コメントする</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user_id: 1,
            text: ""
        };
    },
    computed: {
        post() {
            return this.$store.state.posts.list.find((ele) => ele.id == this.$route.params.id);
        },
        comments() {
            return this.$store.state.comments.list;
        }
    },
    methods: {
        async storeComment() {
            const sendData = {
                post_id: this.$route.params.id,
                user_id: this.user_id,
                text: this.text,
            }
            this.$store.dispatch('comments/store', sendData);
            this.text = "";
        }
    },
    created() {
        this.$store.dispatch('comments/show', this.$route.params.id);
    }
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

.comment-header {
    text-align: center;
    border: 1px solid #fff;
    border-right: none;
    margin: 0;
    padding: 0;
}

.comment-header p {
    margin: 5px;
}

.comment-container {
    padding: 15px;
    border: #fff 1px solid;
    border-right: none;
}

.user-name {
    margin: 0;
    font-weight: 100;
}

.comment-form {
    padding: 15px;
    border-right: none;
}

.comment-form textarea {
    appearance: none;
    resize: none;
    width: 100%;
    color: #fff;
    background-color: transparent;
    border: #fff 1px solid;
    border-radius: 15px;
    padding: 15px;
}
</style>