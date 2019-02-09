<template>
  <v-app>
      <Menu />
    <v-content>
      <Slider/>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Menu from './components/Menu';
import Footer from './components/Footer';
import Slider from './components/Slider';

export default {
  name: 'App',
  components: {
    Menu,
    Footer,
    Slider
  },
  data () {
    return {
      //
    }
  }
}
</script>
