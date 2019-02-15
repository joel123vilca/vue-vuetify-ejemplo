<template>
  <v-layout style="height:100vh">
    <v-dialog v-model="dialog" persistent>
      <!-- <v-btn slot="activator" color="primary" dark>Open Dialog</v-btn> -->
      <v-card>
        <br>
        <br>
         <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="light-blue darken-1" dark>
            <v-spacer></v-spacer>
          <v-toolbar-title>Registrate</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
          <v-stepper v-model="step">
            <v-stepper-header>
              <v-stepper-step step="1" :complete="step > 1">Datos</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="2" :complete="step > 2">Verificaciòn  Token</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
              <v-stepper-content step="1">
    <form>
    <v-text-field
      v-model="name"
      v-validate="'required|max:10'"
      :counter="30"
      label="Nombre"
      data-vv-name="Nombre"
      required
    ></v-text-field>
    <v-text-field
      v-model="lastname"
      v-validate="'required|max:10'"
      :counter="30"
      label="Apellidos"
      data-vv-name="Apellidos"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      v-validate="'required|email'"
      label="E-mail"
      data-vv-name="email"
      required
    ></v-text-field>
     <v-select
        :items="select"
        label="Pais"
        item-value="text"
      ></v-select>
      <v-text-field
      v-model="Telefono"
      v-validate="'required|max:10'"
      :counter="9"
      label="Numero de Telefono"
      data-vv-name="Telefono"
      required
    ></v-text-field>
    <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="date"
          label="Picker in menu"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    <v-checkbox
      v-model="checkbox"
      v-validate="'required'"
      value="1"
      label="Acepto Terminos y Condiciones"
      data-vv-name="checkbox"
      type="checkbox"
      required
    ></v-checkbox>
    <v-btn  color="primary" @click.native="step = 2">Next</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
              </v-stepper-content>
              <v-stepper-content step="2">
                  <v-text-field label="Token Email" v-model="registration.token" required></v-text-field>
                <v-btn color="primary" @click.native="step = 1">Log In</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
      </v-card>
    </v-flex>
        <v-card-actions>
          <v-spacer></v-spacer>
          <router-link to="/" tag="span" style="cursor: pointer">
          <v-btn color="blue darken-1" flat @click="dialog = false" >Close</v-btn>
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
      select: [
          { text: 'Peru' },
          { text: 'Chile' },
          { text: 'Ecuador' },
          { text: 'Argentina' },
          { text: 'Colombia' },
          { text: 'Bolivia' },
          { text: 'Brasil' }
        ],
        date: new Date().toISOString().substr(0, 10),
        menu: false,
    }),
    components:{
        Slider
    }
  }
</script>