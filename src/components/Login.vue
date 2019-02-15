<template>
  <v-layout class="login"  grid-list-xl text-xs-center>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="light-blue darken-1" dark>
            <v-spacer></v-spacer>
          <v-toolbar-title>Log in</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
          <v-stepper v-model="step">
            <v-stepper-header>
              <v-stepper-step step="1" :complete="step > 1">Verificaciòn</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="2" :complete="step > 2">Verificaciòn Token</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
              <v-stepper-content step="1">
                 <v-text-field label="Email" v-model="registration.email" required></v-text-field>
                <v-btn color="primary" @click.native="step = 2">Next</v-btn>
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
  methods:{
    submit() {
      alert('This is the post. Blah');
    }
  }
}
</script>
<style>
.login{
    margin-top:3%;
}
</style>

