<template>
    <div>
        <AuthHeader class="header"></AuthHeader>
        <div class="container">
            <Nuxt />
        </div>
    </div>
</template>

<style>
body {
    background-color: #15202B;
}
h2 {
    margin: 10px;
}
input {
    width: 100%;
    height: 2.5rem;
    padding: 0 15px;
    margin-bottom: 10px;
    border: 1px #000 solid;
    border-radius: 10px;
}
.container {
    display: flex;
    height: 80vh;
    justify-content: center;
    align-items: center;
}
.submit-button {
    padding: 10px 15px;
    background-color: #5419DA;
    color: #fff;
    border-radius: 20px;
}
</style>