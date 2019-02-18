<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" class="black darken-4" app>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          class="white--text">
          <v-list-tile-action>
            <v-icon class="white--text">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar class="grey darken-4" app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon class="white"  @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          <img src="@/assets/Blanco.png" class="imagen"/>
        </router-link>
      </v-toolbar-title>
      <v-toolbar-title>
        <router-link to="/modallogin" tag="span" style="cursor: pointer">
          <v-btn slot="activator" color="primary" dark>Open Dialog</v-btn>
        </router-link>
      </v-toolbar-title>
      
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          class="white--text">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view>
      </router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>

import Footer from './components/Footer';
export default {
  name: 'App',
  components: {
    Footer,
  },
  data () {
      return {
         appTitle: 'Awesome App',
        sidebar: false,
        menuItems: [
          { title: 'Inicio', path: '/', icon: 'home' },
          { title: 'Suscribete', path: '/suscribete', icon: 'play_circle_filled' },
          { title: 'Gold', path: '/Gold', icon: 'shop' },
          { title: 'Elite', path: '/Elite', icon: 'shop' },
          { title: 'Creditos', path: '/Creditos', icon: 'folder_special' },
          { title: 'Iniciar Sesion', path: '/Login', icon: 'face' }
        ],
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
@media screen and (max-width: 480px) {
  .imagen{
  position: center;
  margin-top: 10px;
  margin-left : 50px;
  width: 110px;
  height:80px;
}
}
</style>

