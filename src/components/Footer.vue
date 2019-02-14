
<template>
  <v-footer
    dark
    height="auto"
    class="black lighten-1 white--text "
  >
   
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
        <a>Preguntas Frecuentes</a>
        <a>Normativas</a>
        <a>Terminos y Condiciones</a>
      </v-card-text>
      <v-card-text class="white--text">
        &copy;2019 — <strong>idw</strong>
      </v-card-text>

  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-google-plus',
        'fab fa-instagram'
      ]
    })
  }
</script>