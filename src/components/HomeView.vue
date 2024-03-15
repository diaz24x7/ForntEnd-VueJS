<template>
    <HeaderView />
    <h1>Bienvenido {{nombre}} al Home Page</h1>
    <table border="1" class="table table-striped-columns">
        <tr>
            <th colspan="6">Usuario</th>
            <th colspan="6">Reserva</th>
            <th rowspan="2">Acciones</th>
        </tr>
        <tr>
            <th>idUsuario</th>
            <th>nombre</th>
            <th>apellido</th>
            <th>tipoDocumento</th>
            <th>identificacion</th>
            <th>email</th>

            <th>idReserva</th>
            <th>fechaReserva</th>
            <th>tipoReserva</th>
            <th>cantidadPersonas</th>
            <th>observaciones</th>
            <th>estado</th>
        </tr>
        <tr v-for="item in reservaDTOS" :key="item.reserva.idReserva">
            <td>{{ item.usuario.idUsuario }}</td>
            <td>{{ item.usuario.nombre }}</td>
            <td>{{ item.usuario.apellido }}</td>
            <td>{{ item.usuario.tipoDocumento }}</td>
            <td>{{ item.usuario.identificacion }}</td>
            <td>{{ item.usuario.email }}</td>
            <td>{{ item.reserva.idReserva }}</td>
            <td>{{ item.reserva.fechaReserva }}</td>
            <td>{{ item.reserva.tipoReserva }}</td>
            <td>{{ item.reserva.cantidadPersonas }}</td>
            <td>{{ item.reserva.observaciones }}</td>
            <td>{{ item.reserva.estado }}</td>
            <td>
                <router-link :to="'/update/'+item.reserva.idReserva">Editar Reserva</router-link>
                <button v-on:click="deleteRestaurant(item.reserva.idReserva)">Confirmar</button>
            </td>
        </tr>
    </table>
    </template>
    
    <script>
    import axios from "axios";
    import HeaderView from "./HeaderView.vue";
    
    export default {
        name: 'HomeView',
        components: {
            HeaderView
        },
        data() {
            return {
                nombre: "",
                restaurant:[],
                reservaDTOS:[]
            }
        },
        methods:{
            async deleteRestaurant(id){
                let result = await axios.put("http://localhost:8080/api/reservas/confirmado/"+id)
                if(result.status == 200){
                    this.loadData2();
                }
                console.warn(result);
            },
            async loadData(){
                
                console.warn("result");
                let user = localStorage.getItem('user-info');
                if (!user) {
                    this.$router.push({
                        name: "LoginView"
                    });
                }
                this.nombre = JSON.parse(user).nombre;
    
                let result = await axios.get("http://localhost:3000/restaurant")
                this.restaurant = result.data;
            },
            async loadData2(){
                
                let user = localStorage.getItem('user-info');
                if (!user) {
                    this.$router.push({
                        name: "LoginView"
                    });
                }
                this.nombre = JSON.parse(user).nombre;
    
                let result = await axios.get("http://localhost:8080/api/reservas")
                this.reservaDTOS = result.data.reservaDTOS;
                console.warn(result.data.reservaDTOS);
            }
        },
        mounted() {
            this.loadData2();    
        }
    }
    </script>
    
    <style>
    td{
        width: 160px;
        height: 40px;
    }
    </style>