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
            Australian Shepherd breeder located in Navarre, Fl.
            <br>
            We're expecting a large litter of 7-10 puppies coming <i>very</i> soon.
            Check back often!
          </v-responsive>

          <div></div>
        </v-container>

        <div class="py-5"></div>
      </section>

      <section id="juno">
        <h2 class="display-2 text-center text-uppercase font-weight-bold mb-3">Momma: Juno</h2>

        <v-parallax
          class="d-none d-lg-block"
          :height="$vuetify.breakpoint.smAndDown ? 900 : 700"
          :src="require('./assets/beach_juno.jpeg')"
        >
        </v-parallax>

        <v-row no-gutters class="d-lg-none">
          <v-img
            :src="require('./assets/beach_juno.jpeg')"
          >
          </v-img>
        </v-row>

        <div class="py-5"></div>
      </section>

      <section id="mars">
        <h2 class="display-2 text-center text-uppercase font-weight-bold mb-3">Daddio: Mars</h2>

        <v-parallax
          contain
          class="d-none d-lg-block"
          :height="$vuetify.breakpoint.smAndDown ? 700 : 900"
          :src="require('./assets/mars.jpeg')"
        >
        </v-parallax>

        <v-row no-gutters class="d-lg-none">
          <v-img
            :src="require('./assets/mars.jpeg')"
          >
          </v-img>
        </v-row>
      </section>

      <section id="puppies" class="grey lighten-3">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">MEET THE PUPPIES</h2>

          <v-responsive class="mx-auto mb-12" width="56">
            <v-divider></v-divider>
          </v-responsive>

          <v-row >
            <v-col
              v-for="({ icon, name, text }, i) in puppies"
              :key="i"
              cols="12"
              md="4"
            >
              <v-card
                class="mx-auto"
                color="#26c6da"
                dark
                max-width="400"
              >
                <v-card-title class="justify-center">
                  <v-icon
                    large
                    left
                    v-text="icon"
                  >
                  </v-icon>
                  <span class="title font-weight-light" v-text="name"></span>
                </v-card-title>

                <v-card-text v-if="text.length > 0" class="headline font-weight-bold"
                    v-text="text">
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
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
                <v-card class="py-12 px-4" color="#26c6da" dark>
                  <v-card-title
                    class="justify-center font-weight-black text-uppercase"
                  >Email (preferred)</v-card-title>
                  <v-card-text class="text-center">aussiesbythesea@gmail.com</v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-card class="py-12 px-4" color="#26c6da" dark>
                  <v-card-title
                    class="justify-center font-weight-black text-uppercase"
                  >Phone</v-card-title>
                  <v-card-text class="text-center">850-313-1092</v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-card class="py-12 px-4" color="#26c6da" dark>
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
        class="blue-text title font-weight-light text--lighten-1 text-center"
      >
        &copy; {{ new Date().getFullYear() }} Aussies by the Sea
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
          name: 'Coming Soon!',
          text: '',
        },
        {
          icon: 'mdi-dog',
          name: 'Coming Soon!',
          text: '',
        },
        {
          icon: 'mdi-dog',
          name: 'Coming Soon!',
          text: '',
        },
        {
          icon: 'mdi-dog',
          name: 'Coming Soon!',
          text: '',
        },
        {
          icon: 'mdi-dog',
          name: 'Coming Soon!',
          text: '',
        },
        {
          icon: 'mdi-dog',
          name: 'Coming Soon!',
          text: '',
        },
      ],
    };
  },
};
</script>

<style scoped>
 .blue-text {
   color: #26c6da;
 }
</style>
