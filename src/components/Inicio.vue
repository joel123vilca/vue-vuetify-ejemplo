
<template>
    <div>
   <v-carousel  hide-delimiters class="slider" style="height:100vh">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      color="white darken-4"
      style="height:100vh"
    >
       <v-layout class="texto" align-end justify-center column fill-height >
         <v-flex md7 offset-md5>
        <h3 class="titulo white--text">{{item.title}}</h3>
        <p class="descripcion white--text" >Lorem Ipsum is simply dummy textof the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <h3 class="display-3 white--text">{{item.precio}}</h3>
        <v-btn
            large
            round 
            color="primary" 
            dark
          >
            Llevame ahi
          </v-btn>
        </v-flex>
       </v-layout>
    </v-carousel-item>
  </v-carousel>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            title:'Membresia Elite',
            precio:'24/7',
            src: 'http://www.bejarfm.es/wp-content/uploads/2018/07/Apuestas.jpg'
          },
          {
            title:'Membresia Gold',
            precio:'24/7',
            src:'http://www.bejarfm.es/wp-content/uploads/2018/07/Apuestas.jpg'
          },
          {
            title:'Membresia Premium',
            precio:'24/7',
            src:'http://www.bejarfm.es/wp-content/uploads/2018/07/Apuestas.jpg'
          }
        ]
      }
    },
  }
</script>
<style>
.texto{
  margin-right: 100px;
}
.titulo{
  font-weight:white;
  font-size: 4em;
  display:6em;
  color:white;
}
.descripcion{
  font-size:1.5em;
  color:white;
}
@media screen and (max-width: 480px) {
  .texto{
  margin-right: 20px;
  margin-top: 40%;
}
.titulo{
  font-weight:white;
  font-size: 2em;
  display:1em;
  color:white;
}
.descripcion{
  font-size: 1.3em;
  color:white;
}
}
</style>

