<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          <img src="@/assets/Negro.png" class="imagen"/>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <Slider/>
      <Plan/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>

import Footer from './components/Footer';
import Slider from './components/Slider';
import Plan from './components/Plan';

export default {
  name: 'App',
  components: {
    Footer,
    Slider,
    Plan,
  },
  data () {
      return {
         appTitle: 'Awesome App',
        sidebar: false,
        menuItems: [
          { title: 'Home', path: '/home', icon: 'home' },
          { title: 'Sign Up', path: '/signup', icon: 'face' },
          { title: 'Sign In', path: '/signin', icon: 'lock_open' },
          { title: 'Login', path: '/login', icon: 'face' }
        ]
      }
    }
}
</script>
<style>
.imagen{
  margin-top: 10px;
  padding: 5px;
  width: 250px;
  height:100px;
}
</style>

