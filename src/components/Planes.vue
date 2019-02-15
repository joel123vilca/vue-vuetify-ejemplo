<template>
    <v-card>
      <v-layout>
          <v-flex xs12>
            <v-card color="light-blue darken-1" class="white--text" style="height:100vh">
              <v-layout class="texto-rigth" align-center justify-center fill-height>
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
                      <h3 class="font-weight-black display-3">Membresia Gold</h3>
                      <p class="headline padding">Lorem Ipsum is simply dummy textof the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      <h3 class="display-3">US$6</h3>
                      <v-btn
                        large
                        round 
                        color="primary" 
                        dark
                        >
                        Compra
                        </v-btn>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
      </v-layout>

      <v-layout>
          <v-flex xs12>
            <v-card color="deep-purple darken-2" class="white--text" style="height:100vh">
              <v-layout class="texto" align-center justify-center fill-height>
                <v-flex xs5>
                  <v-card-title>
                    <div>
                      <h3 class="font-weight-black display-3">Membresia Gold</h3>
                      <p class="headline">Lorem Ipsum is simply dummy textof the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      <h3 class="display-3">US$12</h3>
                      <v-btn
                        large
                        round 
                        color="primary" 
                        dark
                        >
                        Compra
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
          <v-flex xs12>
            <v-card color="pink darken-3" class="white--text" style="height:100vh">
              <v-layout class="texto-rigth" align-center justify-center fill-height>
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
                      <h3 class="font-weight-black display-3">Membresia Premium (NUEVO)</h3>
                      <p class="headline padding">Lorem Ipsum is simply dummy textof the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                      <h3 class="display-3">US$35</h3>
                      <v-btn
                        large
                        round 
                        color="primary" 
                        dark
                        >
                        Compra
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
.texto-rigth{
  margin-right: 100px;
}
</style>

