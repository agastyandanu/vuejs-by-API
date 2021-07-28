<template>
    <div>
        <Navbar />
        <div class="container">
            <div class="row">
                <div class="col">
                    <h2>Food <strong>List</strong></h2>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col">
                    <div class="input-group mb-3">
                        <input v-model="searchKey" type="text" class="form-control" placeholder="Search Menu" @keyup="searchMenu">
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2"><b-icon-search></b-icon-search></span>
                        </div>
                    </div>
                </div>
            </div>
                    
            <div class="row mt-4">                
                <div class="col-md-4 col-sm-6 p-2" v-for="dataproduct in setProduct" :key="dataproduct.id" >
                    <Product :sendproduct="dataproduct" />
                </div>                
            </div>

        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Navbar from '@/components/Navbar.vue';
    import Product from '@/components/Product.vue';

    export default {
        name : "Foods",
        components : {
            Navbar,
            Product
        },
    
        data() {
            return {
                setProduct : [],
                searchKey : '',
            }
        },

        methods: {
            // getProduct(data) {
            //     this.setProduct = data;
            // },

            searchMenu() {
                axios.get('http://127.0.0.1:8000/api/v1/post/search-data/'+this.searchKey)
                .then((response) => {
                    this.setProduct = response.data.data;
                } )
                .catch((error) => console.log("Gagal: ", error));
            }
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

<style>

</style>