<template>
    <div class="sidebar">
        <img src="../assets/logo.png" alt="" class="logo">
        <ul class="menu-list">
            <li>
                <NuxtLink to="/" class="menu-item">
                    <img src="../assets/home.png" class="menu-image">ホーム
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/logout" class="menu-item"><img src="../assets/logout.png" class="menu-image">ログアウト
                </NuxtLink>
            </li>
        </ul>
        <div class="share-area">
            <p class="share-area__title">シェア</p>
            <textarea name="" id="" v-model="text"></textarea>
            <div class="align-right">
                <button @click="storePost" class="submit-button">シェアする</button>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from '~/plugins/firebase';
export default
    {
        data() {
            return {
                user_id: 1,
                text: "",
            };
        },
        methods: {
            async storePost() {
                const sendData = {
                    user_id: this.user_id,
                    text: this.text,
                }
                this.$store.dispatch('posts/store', sendData);
                this.text = "";
            },
            logout() {
                firebase
                    .auth()
                    .signOut()
                    .then(() => {
                        alert('ログアウトが完了しました')
                        this.$router.replace('/')
                    })
            },
        },
    }
</script>

<style scoped>
.sidebar {
    margin-top: 20px;
    color: #fff;
}

.logo {
    width: 200px;
}

.menu-list {
    list-style: none;
    padding-left: 15px;
}

.menu-item {
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
}

.menu-image {
    width: 30px;
    margin: 5px 10px;
}

.share-area {
    text-align: center;
    margin: 20px;
    margin-top: 40px;
}

.share-area__title {
    margin: 0;
    text-align: left;
}

.share-area textarea {
    appearance: none;
    resize: none;
    width: 100%;
    height: 10rem;
    padding: 15px;
    color: #fff;
    border-radius: 15px;
    border: #fff 1px solid;
    background-color: transparent;
}
</style>