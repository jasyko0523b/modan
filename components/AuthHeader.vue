<template>
    <div class="header">
        <NuxtLink to="/">
            <img src="../assets/logo.png" class="header__image">
        </NuxtLink>
        <nav>
            <ul class="header__menu">
                <li>
                    <NuxtLink to="/register" class="header__menu-item">新規登録</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/login" class="header__menu-item">ログイン</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 5px 15px;
}
.header__image{
    width: 200px;
}
.header__menu{
    display: flex;
    list-style: none;
    gap: 20px;
}
.header__menu-item{
    appearance: none;
    text-decoration: none;
    cursor: pointer;
    color: #fff;
}
</style>