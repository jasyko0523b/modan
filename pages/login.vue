<template>
    <div class="card">
        <h2>ログイン</h2>
        <input type="text" placeholder="メールアドレス">
        <input type="text" placeholder="パスワード">
        <button type="submit" class="submit-button">ログイン</button>
    </div>
</template>

<script>
export default {
    layout: 'auth'
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