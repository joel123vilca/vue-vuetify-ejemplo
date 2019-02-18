<template>
  <v-layout style="height:100vh" color="grey lighten-1">
    <v-dialog v-model="dialog"  persistent fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <br>
        <br>
        <v-flex xs12 sm6 offset-sm3>
      <v-card>
   <v-layout row class="text-xs-center">
      <v-flex xs3>
        <v-card height="500px" width="800px"></v-card>
      </v-flex>
      <v-flex xs10 class="grey lighten-4">
        <v-container style="position: relative;top: 1%;" class="text-xs-center">
          <v-card flat>
            <v-card-title primary-title>
              <h4>Iniciar Sesiòn</h4>
            </v-card-title>
            <v-form>
            <v-text-field prepend-icon="person" name="Username" label="Usuario"></v-text-field>
            <v-text-field prepend-icon="lock" name="Password" label="contraseña" type="password"></v-text-field>
            <v-card-actions>
              <v-btn primary color="info" block>Ingresar</v-btn>
            </v-card-actions>
            <router-link :to="{ name: 'inicio'}">
              ¿olvidates tu contraseña
            </router-link>
            </v-form>
            <br>
            <h6>¿Aun no tienes cuenta en GolPlay?</h6>
            <v-card-actions>
                <v-btn :to="{ name: 'register'}" primary large block>Registrate</v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
      </v-card>
    </v-flex>
        <v-card-actions>
          <v-spacer></v-spacer>
          <router-link to="/" tag="span" style="cursor: pointer">
          <v-btn color="blue darken-1" flat @click="dialog = false" >Salir</v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
    import Slider from './Slider';
  export default {
    data: () => ({
      dialog: true,
      step:1,
      registration:{
        email:null,
        token:null,
      },
    }),
    components:{
        Slider
    }
  }
</script>