<template>
<img class="logo" alt="Vue logo" src="../assets/logo.png">
<h1>Login Page</h1>
<div class="login">
    <input type="text" v-model="email" name="email" id="email" placeholder="ingrese Correo">
    <input type="password" v-model="passw" name="passw" id="passw" placeholder="ingrese Contraseña">
    <button v-on:click="login">Ingresar</button>
    <p>
        <router-link to="/reserva">Crear Reserva</router-link>
    </p>
</div>
</template>

    
<script>
import axios from 'axios';

export default {
    name: 'LoginView',
    data() {
        return {
            email: "",
            passw: ""
        }
    },
    methods: {
        async login() {
            try {
                let result = await axios.post("http://localhost:8080/api/login", {
                    email: this.email,
                    passw: this.passw
                });
                console.warn("addUser", result);
                
                if (result.status == 200) {
                    localStorage.setItem("user-info", JSON.stringify(result.data.usuario));
                    this.$router.push({
                        name: "HomeView"
                    });
                } else{
                    alert(result.data.mensaje)
                }
            } catch (error) {
                alert("Error")
            }
        },
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({
                name: "HomeView"
            });
        }
    }
}
</script>
