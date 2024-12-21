<template>
    <div class="container">
        <SideNav class="sidebar"></SideNav>
        <div class="main-content">
            <Nuxt />
        </div>
    </div>
</template>

<style>
body{
    background-color: #15202B;
}
.container{
    display: flex;
}
.sidebar{
    flex: 2;
    height: 100%;
}
.main-content{
    flex: 5;
    height: 100%;
}
.submit-button {
    padding: 10px 15px;
    background-color: #5419DA;
    color: #fff;
    border-radius: 20px;
}
.align-right {
    text-align: right;
}
</style>