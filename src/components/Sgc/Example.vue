<template>
  <div>

    <!-- sidebar -->
    <v-navigation-drawer
      v-if="authenticated"
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >

      <!-- user avatar -->
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="user.person.photo_url" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Usuario</v-list-tile-title>
              <v-list-tile-sub-title>Email</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-menu>
                <v-btn slot="activator" icon ripple>
                  <v-icon color="grey">settings</v-icon>
                </v-btn>
                <v-list>
                  <v-list-tile :to="{ name: 'settings.profile' }">
                    <v-list-tile-title>{{ $t('profile') }}</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile :to="{ name: 'settings.password' }">
                    <v-list-tile-title>{{ $t('password') }}</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
            </v-list-tile-action>
          </v-list-tile>


        </v-list>
      </v-toolbar>
      <!-- end user avatar -->

      <v-divider></v-divider>

      <v-list>
        <v-list-tile :to="{ name: 'home' }">
          <v-list-tile-avatar>
            <v-icon class="blue--text">home</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ $t('go_home') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-divider></v-divider>

      <v-list>

        <v-subheader>{{ $t('main_menu') }}</v-subheader>

        <!-- banners -->
        <v-list-group
          prepend-icon="panorama"
          no-action
          value="expands"
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ $t('banners') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile :to="{ name: 'banners.list' }">
            <v-list-tile-content>
              <v-list-tile-title>{{ $t('see_all') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile :to="{  name: 'banners.create' }">
            <v-list-tile-content>
              <v-list-tile-title>{{ $t('add_new') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list-group>
        <!-- end banners -->

        <!-- articles -->
        <v-list-group
          prepend-icon="local_library"
          no-action
          value="expands"
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ $t('blog_articles') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile :to="{ name: 'articles.list' }">
            <v-list-tile-content>
              <v-list-tile-title>{{ $t('see_all') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile :to="{  name: 'articles.create' }">
            <v-list-tile-content>
              <v-list-tile-title>{{ $t('add_new') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <!-- Tags -->
          <v-list-group 
            sub-group
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>{{ $t('tags') }}</v-list-tile-title>
            </v-list-tile>
            <v-list-tile :to="{  name: 'tags.list' }">
              <v-list-tile-title>{{ $t('see_all') }}</v-list-tile-title>
            </v-list-tile>
          </v-list-group>
            <!-- end Tags -->
            
          </v-list-group>
        <!-- end articles -->

        <!-- projects -->
        <v-list-group
          prepend-icon="work"
          no-action
          value="expands"
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ $t('projects') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile :to="{ name: 'projects.list' }">
            <v-list-tile-content>
              <v-list-tile-title>{{ $t('see_all') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile :to="{  name: 'projects.create' }">
            <v-list-tile-content>
              <v-list-tile-title>{{ $t('add_new') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

           <!-- Categories -->
          <v-list-group 
            sub-group
            no-action
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>{{ $t('categories') }}</v-list-tile-title>
            </v-list-tile>
            <v-list-tile :to="{  name: 'categories.list' }">
              <v-list-tile-title>{{ $t('see_all') }}</v-list-tile-title>
            </v-list-tile>
          </v-list-group>
            <!-- end Categories -->

        </v-list-group>
        <!-- end projects -->

        <!-- customers -->
        <v-list-group
          prepend-icon="supervised_user_circle"
          no-action
          value="expands"
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ $t('customers') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile :to="{ name: 'customers.list' }">
            <v-list-tile-content>
              <v-list-tile-title>{{ $t('see_all') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile :to="{  name: 'customers.create' }">
            <v-list-tile-content>
              <v-list-tile-title>{{ $t('add_new') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list-group>
        <!-- end customers -->

      </v-list>
    </v-navigation-drawer>
    <!-- end sidebar -->

    <!-- top toolbar -->
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="orange"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-tooltip bottom v-if="!authenticated">
          <v-btn v-bind:to="{ name: user ? 'home' : 'welcome' }" slot="activator" icon>
            <v-icon>home</v-icon>
          </v-btn>
          <span>{{ $t('go_home') }}</span>
        </v-tooltip>
        <v-toolbar-side-icon
          v-if="authenticated"
          @click.stop="drawer = !drawer"
        ></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">IDW CMS</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- languages -->
      <v-menu :nudge-width="100">
          <v-toolbar-title slot="activator">
            <span><v-icon>language</v-icon></span>
            {{ locale }}
            <v-icon dark>arrow_drop_down</v-icon>
          </v-toolbar-title>
        <v-list>
          <v-list-tile v-for="(value, key) in locales" :key="key" @click="setLocale(key)">
            <v-list-tile-title v-text="value"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <!-- end languages -->

      <template v-if="authenticated">
        <v-tooltip bottom>
            <v-btn slot="activator" icon @click="logout">
              <v-icon>power_settings_new</v-icon>
            </v-btn>
            <span>{{ $t('logout') }}</span>
        </v-tooltip>
      </template>
      <template v-else>
        <v-tooltip bottom>
            <v-btn v-bind:to="{ name: 'login' }" slot="activator" icon>
              <v-icon>input</v-icon>
            </v-btn>
            <span>{{ $t('login') }}</span>
        </v-tooltip>
      </template>

    </v-toolbar>
    <!-- end top toolbar -->

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
  },

  data () {
    return {
      drawer: null,
    }
  },
  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    },

    setLocale (locale) {
      if (this.$i18n.locale !== locale) {
        loadMessages(locale)

        this.$store.dispatch('lang/setLocale', { locale })
      }
    }
  }
}
</script>

<style scoped>
.profile-photo {
  width: 2rem;
  height: 2rem;
  margin: -.375rem 0;
}
</style>
