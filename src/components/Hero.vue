<template>

  <div class="hero">

    <!-- Desktop -->
    <div class="d-sm-none d-md-block">
        <div class="row mt-4">
            <div class="col-md-6">
                <div class="d-flex h-100">
                    <div class="justify-content-center align-self-center">
                        <h2><strong>Delicious Food Menu</strong> <br> in Your Gadget</h2>
                        <p>Get and order yor favourite foods</p>
                        <router-link to="/foods" class="btn btn-lg btn-success">Order Now <b-icon-arrow-right></b-icon-arrow-right> </router-link>
                    </div>
                </div>            
            </div>
            <div class="col-md-6">
                <img src="../assets/img/hero.png" width="100%" alt="">
            </div>
        </div>
    </div>    
    
    <!-- Mobile -->
    <d-sm-block class="d-md-none">
        <div class="col-md-6">
            <img src="../assets/img/hero.png" width="100%" alt="">
        </div>
        <div class="row mt-4 text-center">
            <div class="col-md-6">
                <div>
                    <div class="justify-content-center align-self-center">
                        <h2><strong>Delicious Food Menu</strong> <br> in Your Gadget</h2>
                        <p>Get and order yor favourite foods</p>
                        <button class="btn btn-lg btn-success">Get It Now <b-icon-arrow-right></b-icon-arrow-right> </button>
                    </div>
                </div>            
            </div>
        </div>
    </d-sm-block>   

  </div>    

</template>

<script>
export default {
    name : 'Hero'
}
</script>

<style>

</style>