<template>
  <v-app>
      <Menu/>
    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Menu from './components/Menu'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Menu
  },
  data () {
    return {
      //
    }
  }
}
</script>
