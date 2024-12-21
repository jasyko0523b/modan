<template>
    <div class="message">
        <div class="header">
            <h2 class="user-name">{{ userName }}
            </h2>
            <div class="heart">
                <img class="header__image" :class="{ checked: isChecked }" src="../assets/heart.png" alt="" srcset=""
                    @click="toggleLikes">
                <p>{{ likesCount }}</p>
            </div>
            <img class="header__image" src="../assets/cross.png" alt="" srcset="" @click="deletePost">
            <slot></slot>
        </div>
        <div class="content">{{ text }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['postId', 'userName', 'likesCount', 'text'],
    data() {
        return {
            user_id: 1,
        }
    },
    computed: {
        likes() {
            return this.$store.state.likes.list;
        },
        isChecked() {
            return this.likes.find((ele) => ele.post_id == this.postId);
        },
    },
    methods: {
        toggleLikes() {
            if (this.isChecked) {
                this.deleteLike();
            } else {
                this.storeLike();
            }
        },
        async storeLike() {
            const sendData = {
                post_id: this.postId,
                user_id: this.user_id,
            }
            this.$store.dispatch('likes/store', sendData);
        },
        async deleteLike() {
            console.log(this.isChecked);
            this.$store.dispatch('likes/destroy', this.isChecked);
        },
        async deletePost() {
            this.$store.dispatch('posts/destroy', this.postId);
        }
    },
}

</script>

<style scoped>
.message {
    padding: 15px;
    border: #fff 1px solid;
    border-right: none;
}

.header {
    display: flex;
    align-items: center;
}

.user-name {
    margin: 0;
    margin-right: 20px;
}

.header__image {
    width: 25px;
    height: 100%;
    aspect-ratio: 1;
    margin: 5px;
    cursor: pointer;
}

.heart {
    display: flex;
    align-items: center;
    margin-right: 20px;
}

.checked {
    filter: brightness(0) saturate(100%) invert(18%) sepia(100%) saturate(2973%) hue-rotate(336deg) brightness(86%) contrast(102%);
}
</style>