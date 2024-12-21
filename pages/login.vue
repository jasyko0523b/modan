<template>
    <div class="card">
        <h2>ログイン</h2>
        <input type="email" placeholder="メールアドレス" required>
        <input type="password" placeholder="パスワード" required>
        <button @click="login" class="submit-button">ログイン</button>
    </div>
</template>

<script>
import firebase from '~/plugins/firebase';
export default {
    layout: 'auth',
    data() {
        return {
            email: null,
            password: null,
        }
    },
    methods: {
        login() {
            if (!this.email || !this.password) {
                alert('メールアドレスまたはパスワードが入力されていません。')
                return
            }
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    alert('ログインが完了しました')
                    this.$router.push('/')
                })
                .catch((error) => {
                    switch (error.code) {
                        case 'auth/invalid-email':
                            alert('メールアドレスの形式が違います。')
                            break
                        case 'auth/user-disabled':
                            alert('ユーザーが無効になっています。')
                            break
                        case 'auth/user-not-found':
                            alert('ユーザーが存在しません。')
                            break
                        case 'auth/wrong-password':
                            alert('パスワードが間違っております。')
                            break
                        default:
                            alert('エラーが起きました。しばらくしてから再度お試しください。')
                            break
                    }
                })
        },
    },
}
</script>

<style scoped>
.card {
    width: 400px;
    padding: 20px;
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
}
</style>