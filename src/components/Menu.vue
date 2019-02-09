<template>
  <v-toolbar color="#546E7A">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>GoPlay-entertainment</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
  export default {
    data: () => ({
      bars: [
        { 'class': '' },
        { 'class': '', dark: true },
        { 'class': 'primary', dark: true },
        { 'class': 'elevation-0' }
      ]
    })
  }
</script>

<style>
.theme--light.v-toolbar {
    color: white;
}
</style>


