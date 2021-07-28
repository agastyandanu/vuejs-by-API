<template>

  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">My Kitchen</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/foods">Foods</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/add-menu">Add Menu</router-link>
            </li>
          </ul>
          
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/foods">
                Cart <b-icon-bag></b-icon-bag>
                <b-badge variant="success">0</b-badge>
              </router-link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  </div>

</template>

<script>
// import { component } from 'vue/types/umd';

  export default {
      name : 'Navbar'
  }
</script>

<style>

</style>