<template>
<div class="nav">
    <router-link to="/">Inicio</router-link>
    <a v-on:click="logout" href="#">Cerrar Sesión</a>
</div>
</template>

<script>
export default {
    name: 'HeaderView',
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({
                name: "LoginView"
            })
        }
    }
}
</script>

<style>
.nav {
    background-color: #333;
    overflow: hidden;
}

.nav a {
    float: left;
    color: #f2f2f2;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}

.nav a:hover {
    background: #ddd;
    color: #333;
}
</style>
