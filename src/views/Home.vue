<template>
  <div class="home">
    <Navbar />

    <div class="container">

      <Hero />

      <div class="row mt-4">
        <div class="col">
          <h2><strong>Favourite</strong> Menu</h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-success text-right">All Menu</router-link>
        </div>
      </div>

      <div class="row mt-4">
        
        <div class="col-md-4 col-sm-6 p-2" v-for="dataproduct in setProduct" :key="dataproduct.id" >
          <Product :sendproduct="dataproduct" /> <!-- send product data to product.vue -->
        </div>
        
      </div>

    </div>
    
  </div>
</template>

<script lang="ts">
  import axios from 'axios';
  import Navbar from '@/components/Navbar.vue';
  import Hero from '@/components/Hero.vue';
  import Product from '@/components/Product.vue';

  export default {
    name : 'Home',
    components: {
      Navbar,
      Hero,
      Product
    },
    
    data() {
      return {
        setProduct : []
      }
    },

    methods: {
    },

    mounted() {
      axios.get('http://127.0.0.1:8000/api/v1/post/data?v=1')
      .then((response) => {
        this.setProduct = response.data.data;
      } )
      .catch((error) => console.log("Gagal: ", error));
    }

  }
</script>
