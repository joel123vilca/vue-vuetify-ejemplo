
<template>
    <div>
   <v-carousel  hide-delimiters class="slider" style="height:100vh">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      style="height:100vh"
    >
       <v-layout class="texto" align-start justify-center column fill-height >
        <h3 class="font-weight-black display-3 white--text">{{item.title}}</h3>
        <span class=" subheading white--text">Lorem Ipsum is simply dummy text</span>
        <h3 class="display-3 white--text">US${{item.precio}}</h3>
        <v-btn
            large
            round 
            color="primary" 
            dark
          >
            Suscribirme
          </v-btn>
       </v-layout>
    </v-carousel-item>
  </v-carousel>
      <inicio/>
    </div>
</template>
<script>
import Inicio from './Inicio'
  export default {
    data () {
      return {
        items: [
          {
            title:'Membresia Elite',
            precio:'5',
            src: 'https://staticuestudio.blob.core.windows.net/buhomag/2017/02/27193529/apuestas-deportivas.jpg?auto=compress,format'
          },
          {
            title:'Membresia Gold',
            precio:'7',
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          },
          {
            title:'Membresia Premium',
            precio:'9',
            src: 'http://astorgaredaccion.com/upload/img/periodico/img_30235.jpg'
          }
        ]
      }
    },
    components: {
    Inicio,
  }
  }
</script>
<style>
.texto{
  margin-left: 100px;
}
</style>

