
<template>
  <v-parallax
    class="load"
  >
    <v-layout
      
      column
      justify-center
    >
        <img src="../../public/Blanco.png" class="logo">
      <h1 class="display-2 font-weight-thin mb-3 ">Estamos en proceso de desarrollo ...</h1>
    </v-layout>
  </v-parallax>
</template>
<script>
  export default {
  }
</script>
<style>
.load{
  background-color: rgb(29, 46, 70);
}
.logo{
  height: 40%;
  width: 40%;
}
@media only screen and (max-width: 600px) {
   
  .load .logo{
  height: auto;
  width: 100%;
  }
}
</style>

