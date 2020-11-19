<template>
  <v-app>
    <v-content>
      <section id="hero">
        <v-row no-gutters>
          <v-img
            :src="require('./assets/background.svg')"
          >
            <v-theme-provider light>
            </v-theme-provider>
          </v-img>
        </v-row>
      </section>

      <section id="about-me">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">ABOUT US</h2>

          <v-responsive class="mx-auto mb-8" width="56">
            <v-divider class="mb-1"></v-divider>

          </v-responsive>

          <v-responsive
            class="mx-auto title font-weight-light mb-8"
            max-width="720"
          >
            Come back soon!
          </v-responsive>

          <div></div>
        </v-container>

        <div class="py-12"></div>
      </section>

      <section id="puppies" class="grey lighten-3">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">MEET THE PUPPIES</h2>

          <v-responsive class="mx-auto mb-12" width="56">
            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
              v-for="({ icon, title, text }, i) in puppies"
              :key="i"
              cols="12"
              md="4"
            >
              <v-card class="py-12 px-4" color="grey lighten-5" flat>
                <v-theme-provider light>
                  <div>
                    <v-avatar color="primary" size="88">
                      <v-icon large v-text="icon"></v-icon>
                    </v-avatar>
                  </div>
                </v-theme-provider>

                <v-card-title
                  class="justify-center font-weight-black text-uppercase"
                  v-text="title"
                ></v-card-title>

                <v-card-text class="subtitle-1" v-text="text"> </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </section>

      <section id="stats">
        <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
          src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        >
        </v-parallax>
      </section>

      <v-sheet id="contact"  tag="section" >
        <div class="py-12"></div>

        <v-container>
          <h2
            class="display-2 font-weight-bold mb-3 text-uppercase text-center"
          >
            Contact Us
          </h2>

          <v-responsive class="mx-auto mb-12" width="56">
            <v-divider></v-divider>
          </v-responsive>

          <v-theme-provider light>
            <v-row>
              <v-col cols="12">
                <v-card class="py-12 px-4" color="grey lighten-5" flat>
                  <v-card-title
                    class="justify-center font-weight-black text-uppercase"
                  >Phone</v-card-title>
                  <v-card-text class="text-center">850-313-1092</v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-card class="py-12 px-4" color="grey lighten-5" flat>
                  <v-card-title
                    class="justify-center font-weight-black text-uppercase"
                  >Email (preferred)</v-card-title>
                  <v-card-text class="text-center">aussiesbythesea@gmail.com</v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-card class="py-12 px-4" color="grey lighten-5" flat>
                  <v-card-title
                    class="justify-center font-weight-black text-uppercase"
                  > <v-img
                        contain
                        height="100px"
                        width="100px"
                        src="https://sarahscoop.com/wp-content/uploads/2020/04/tiktok-logo-3-1.png"
                      ></v-img></v-card-title>
                  <v-card-text class="text-center"><a href="https://www.tiktok.com/@aussiesbythesea">@aussiesbythesea</a></v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-theme-provider>
        </v-container>

        <div class="py-12"></div>
      </v-sheet>
    </v-content>

    <v-footer class="justify-center grey lighten-3" height="100">
      <div
        class="title font-weight-light grey--text text--lighten-1 text-center"
      >
        &copy; {{ new Date().getFullYear() }} — Vuetify, LLC — Made with 💜 by
        John Leider
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},
  data() {
    return {
      puppies: [
        {
          icon: 'mdi-dog',
          title: 'Coming Soon!',
          text: '',
        },
        {
          icon: 'mdi-dog',
          title: 'Coming Soon!',
          text: '',
        },
        {
          icon: 'mdi-dog',
          title: 'Coming Soon!',
          text: '',
        },
        {
          icon: 'mdi-dog',
          title: 'Coming Soon!',
          text: '',
        },
        {
          icon: 'mdi-dog',
          title: 'Coming Soon!',
          text: '',
        },
        {
          icon: 'mdi-dog',
          title: 'Coming Soon!',
          text: '',
        },
      ],
    };
  },
};
</script>
