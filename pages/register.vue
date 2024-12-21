<template>
    <div class="card">
        <h2>新規登録</h2>
        <input v-model="name" type="text" placeholder="ユーザーネーム" required>
        <input v-model="email" type="email" placeholder="メールアドレス" required>
        <input v-model="password" type="password" placeholder="パスワード" required>
        <button @click="register" class="submit-button">新規登録</button>
    </div>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
    layout: 'auth',
    data() {
        return {
            name: "",
            email: "",
            password: ""
        };
    },
    methods: {
        register() {
            if (!this.email || !this.password) {
                alert("メールアドレスまたはパスワードが入力されていません。");
                return;
            }
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then((data) => {
                    data.user.sendEmailVerification().then(() => {
                        this.$router.replace("/confirm");
                    });
                })
                .catch((error) => {
                    switch (error.code) {
                        case "auth/invalid-email":
                            alert("メールアドレスの形式が違います。");
                            break;
                        case "auth/email-already-in-use":
                            alert("このメールアドレスはすでに使われています。");
                            break;
                        case "auth/weak-password":
                            alert("パスワードは6文字以上で入力してください。");
                            break;
                        default:
                            alert("エラーが起きました。しばらくしてから再度お試しください。");
                            break;
                    }
                });
        },
    }
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