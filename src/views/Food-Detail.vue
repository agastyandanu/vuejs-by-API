<template>

  <div>
      <Navbar />
      <div class="container">

        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                <li class="breadcrumb-item"><router-link to="/foods">Foods</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">Food Detail</li>
            </ol>
        </nav>

        <div class="row">
            <h2>Food Detail</h2>
            <div class="col col-md-6">
                <img :src=" 'img/menu/'+setProduct.image " alt="" class="img-fluid">
            </div>
            <div class="col col-md-6">
                <h2>{{ setProduct.title }}</h2>
                <span>{{ setProduct.content }}</span>
            </div>
        </div>

      </div>
  </div>

</template>

<script>
    import axios from 'axios';
    import Navbar from '@/components/Navbar.vue';

    export default {
        name : 'Food-Detail',
        components : {
            Navbar
        },

        data() {
            return {
                setProduct : []
            }
        },

        methods: {
        },

        mounted() {
            let id = this.$route.params.id;
            axios.get('http://127.0.0.1:8000/api/v1/post/data/'+id)
            .then((response) => {
                this.setProduct = response.data.data;
            } )
            .catch((error) => console.log("Gagal: ", error));
        }
    }
</script>

<style>

</style>