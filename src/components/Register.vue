<template>
  <v-layout class="login"  grid-list-xl text-xs-center>
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
      :counter="10"
      :error-messages="errors.collect('name')"
      label="Name"
      data-vv-name="name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      v-validate="'required|email'"
      :error-messages="errors.collect('email')"
      label="E-mail"
      data-vv-name="email"
      required
    ></v-text-field>
    <v-select
      v-model="select"
      v-validate="'required'"
      :items="items"
      :error-messages="errors.collect('select')"
      label="Select"
      data-vv-name="select"
      required
    ></v-select>
    <v-checkbox
      v-model="checkbox"
      v-validate="'required'"
      :error-messages="errors.collect('checkbox')"
      value="1"
      label="Option"
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
  </v-layout>
</template>

<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'

  Vue.use(VeeValidate)
export default {
    data () {
      return {
           step:1,
      registration:{
        email:null,
        token:null,
      },
      }
    },
    mounted () {
      this.$validator.localize('en', this.dictionary)
    },
    methods: {
      submit () {
        this.$validator.validateAll()
    }
  }
}
</script>
<style>
.login{
    margin-top:3%;
}
</style>

