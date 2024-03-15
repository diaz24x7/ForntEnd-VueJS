<template>
    <HeaderView />
    <h1>Bienvenido user al Add Restaurant Page</h1>
    <form class="add">
        <input v-model="restaurant.name" type="text" name="name" id="name" placeholder="Ingrese Nombre">
        <input v-model="restaurant.contact" type="text" name="Contact" id="Contact" placeholder="Ingrese Contacto">
        <input v-model="restaurant.addres" type="text" name="Addres" id="Addres" placeholder="Ingrese Dirección">
        <button type="button" v-on:click="addRestaurant">Agregar</button>
    </form>
</template>

<script>
import axios from "axios";
import HeaderView from "./HeaderView.vue";

export default{
    name:'AddRestaurantView',
    components:{
        HeaderView
    },
    data(){return{
        restaurant:{
            name:'',
            contact:'',
            addres:''
        }
    }},
    methods:{
        async addRestaurant(){
            console.warn(this.restaurant);
            let result = await axios.post("http://localhost:3000/restaurant",
                {
                    name:this.restaurant.name,
                    contact:this.restaurant.contact,
                    addres:this.restaurant.addres
                }
            )
            if(result.status == 201){
                this.$router.push({name:"HomeView"});
            }
            console.warn(result);
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:"LoginView"});
        }
    }
}
</script>