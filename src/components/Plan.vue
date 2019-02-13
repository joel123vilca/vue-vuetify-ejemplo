<template>
  <v-timeline align-top class="deep-purple ">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card
        :color="item.color"
        dark
      >
        <v-card-title class="title">{{ item.title }}</v-card-title>
        <v-card-text class="white text--primary">
          <p>Lorem Ipsum is simply dummy textof the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <v-btn
            :color="item.color"
            class="mx-0"
            outline
          >
            Llevame ahi
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
  export default {
    data: () => ({
      items: [
        {
          title:'Membresia ELITE',
          color: 'indigo',
          icon: 'mdi-star'
        },
        {
          title:'Membresia GOLD',
          color: 'purple darken-1',
          icon: 'mdi-book-variant'
        },
        {
          title:'Membresia PREMIUM',
          color: 'green lighten-1',
          icon: 'mdi-airballoon'
        },
      ]
    })
  }
</script>

