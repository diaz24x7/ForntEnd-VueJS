<template>
    <HeaderView />
    <h1>Bienvenido user al Update Restaurant Page</h1>
    <form class="add">
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
        <button  type="button" v-on:click="updateRestaurant">Guardar</button>
    </form>
</template>

<script>
import axios from "axios";
import HeaderView from "./HeaderView.vue";

export default{
    name:'UpdateRestaurantView',
    components:{
        HeaderView
    },
    data(){return{
        restaurant:{
            name:'',
            contact:'',
            addres:''
        },
        reserva:{
            fechaReserva:"",
            tipoReserva:"",
            cantidadPersonas:0,
            observaciones:"",
            estado:"",
        }
    }},
    methods:{
        async updateRestaurant(){
            let result = await axios.put("http://localhost:8080/api/reservas/"+this.$route.params.id,
                {
                    fechaReserva:this.reserva.fechaReserva,
                    tipoReserva:this.reserva.tipoReserva,
                    cantidadPersonas:this.reserva.cantidadPersonas,
                    observaciones:this.reserva.observaciones,
                }
            )
            if(result.status == 200){
                this.$router.push({name:"HomeView"});
            }
            console.warn(result);
        }
    },
    async mounted(){
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:"LoginView"});
        }
        let result = await axios.get("http://localhost:8080/api/reservas/"+this.$route.params.id)

        this.reserva = result.data;
    }
}
</script>