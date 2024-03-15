<template>
<img class="logo" alt="Vue logo" src="../assets/logo.png">
<h1>Crear Reserva</h1>
<div class="register">
    <input type="text" v-model="usuario.nombre" name="Nombres" id="Nombres" placeholder="ingrese Nombres">
    <input type="text" v-model="usuario.apellido" name="Apellidos" id="Apellidos" placeholder="ingrese Apellidos">
    <input type="text" v-model="usuario.tipoDocumento" name="TipoDocumento" id="TipoDocumento" placeholder="ingrese Tipo de Documento">
    <input type="text" v-model="usuario.identificacion" name="Identificacion" id="Identificacion" placeholder="ingrese Identificación">
    <input type="text" v-model="usuario.email" name="email" id="email" placeholder="ingrese Correo">
    <input type="datetime" v-model="reserva.fechaReserva" name="FechaReserva" id="FechaReserva" placeholder="ingrese Fecha de Reserva">
    <select v-model="reserva.tipoReserva" id="TipoReserva">
        <option value="cena">cena</option>
        <option value="almuerzo">almuerzo</option>
        <option value="onces">onces</option>
        <option value="cumpleaños">cumpleaños</option>
        <option value="ocasión especial">ocasión especial</option>
    </Select>
    <input type="number" v-model="reserva.cantidadPersonas" name="CantidadPersonas" id="CantidadPersonas" placeholder="ingrese Cantidad de Personas">
    <input type="text" v-model="reserva.observaciones" name="Observaciones" id="Observaciones" placeholder="ingrese Observaciones">
    <button v-on:click="setReserva">Crear Reserva</button>
    <p>
        <router-link to="/login">Iniciar Seseión</router-link>
    </p>
</div>
</template>

<script>
import axios from "axios";

export default {
    name: 'ReservaView',
    data() {
        return {
            reserva: {
                fechaReserva:"",
                tipoReserva:"",
                cantidadPersonas: 1,
                observaciones:"",
            },
            usuario: {
                nombre:"",
                apellido:"",
                tipoDocumento:"",
                identificacion:"",
                email:"",
            }
        }
    },
    methods: {        
        async setReserva() {
            let result = await axios.post("http://localhost:8080/api/reservas", {
                reserva: this.reserva,
                usuario: this.usuario
            });
            console.warn("SingnUp", result);
            if (result.status == 201) {
                alert("Registro Guardado")
                this.$router.push({name:"ReservaView"});
            } else{
                alert("Por favor valide la información")
            }
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:"HomeView"});
        }
    }
}
</script>