<template>

    <div class="card shadow" style="width: 18rem;">
        <img class="card-img-top" :src=" 'img/menu/'+sendproduct.image " alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title"> {{ sendproduct.title }} </h5>
            <p class="card-text"> {{ sendproduct.content }} </p>
            <router-link :to="{name: 'Food-Detail', params: {id: sendproduct.id} }" class="btn btn-success"> <b-icon-eye></b-icon-eye> Detail</router-link>
        </div>
    </div>

</template>

<script>
    export default {
        name : "Product",
        props: ['sendproduct'], //get data product from home
    }
</script>

<style>

</style>