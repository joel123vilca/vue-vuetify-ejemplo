<template>
  <v-app>
      <Menu />
    <v-content>
      <HelloWorld/>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Menu from './components/Menu';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Menu,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>
