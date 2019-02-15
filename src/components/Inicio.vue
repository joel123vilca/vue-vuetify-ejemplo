<template>
    <v-card>
        <v-layout>
          <v-flex xs12>
            <v-card color="white darken-4" class="black--text" style="height:100vh">
              <v-layout class="texto" align-center justify-center fill-height>
                <v-flex xs7>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                    height="400px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs5>
                  <v-card-title>
                    <div>
                      <h3 class="font-weight-black display-3">Titulo de Seccion</h3>
                      <p class="headline padding">Lorem Ipsum is simply dummy text</p>
                      <p class="headline padding">Lorem Ipsum is simply dummy text</p>
                      <p class="headline padding">Lorem Ipsum is simply dummy text</p>
                      <v-btn
                        large
                        round 
                        color="primary" 
                        dark
                        >
                        Informaciòn
                        </v-btn>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
    </v-card>
</template>
<script>
export default {
    
}
</script>