<template>
    <v-card>
        <v-layout>
          <v-flex xs12>
            <v-card color="purple" class="white--text" style="height:100vh">
              <v-layout class="texto" align-center justify-center fill-height>
                <v-flex xs5>
                  <v-card-title>
                    <div>
                      <h3 class="font-weight-black display-3">Servicio 1</h3>
                      <p class="headline">Lorem Ipsum is simply dummy textof the printing and typesetting</p>
                      <h3 class="display-3">US$7</h3>
                      <v-btn
                        large
                        round 
                        color="primary" 
                        dark
                        >
                        Llevame ahi
                        </v-btn>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex xs7>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                    height="400px"
                    contain
                  ></v-img>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex sx12>
            <v-card color="light-blue darken-4" class="white--text" style="height:100vh">
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
                      <h3 class="font-weight-black display-3">Servicio 2</h3>
                      <p class="headline padding">Lorem Ipsum is simply dummy textof the printing and </p>
                      <h3 class="display-3">US$5</h3>
                      <v-btn
                        large
                        round 
                        color="primary" 
                        dark
                        >
                        Llevame ahi
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
    data: () => ({
    })
  }
</script>
<style>
.texto{
  margin-left: 100px;
}
</style>

