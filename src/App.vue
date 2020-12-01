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
            <!-- eslint-disable max-len -->
            On Thanksgiving Day, Nov. 26th, 2020, our female Australian Shepherd gave birth to her first litter.
            She had 7 very healthy puppies!

            There are currently 6/7 spoken for.

            Check back often to see their progress!
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

          <v-row class="mb-12">
            <v-col
              v-for="({ icon, name, coat, sex, spokenFor, weights, photos }, i) in puppies"
              :key="i"
              cols="12"
              md="4"
            >
              <div id="canvas-wrap">
                <canvas :id="name"></canvas>
                <v-card
                  class="mx-auto pa-3"
                  :color="spokenFor ? '#26c6da' : '#26c6da'"
                  dark
                  height="500"
                  width="400"
                >
                  <div v-if="photos.length > 0" class="justify-center">
                    <v-img
                      :src="photos[0]"
                    >
                    </v-img>
                  </div>

                  <v-card-title class="justify-center">
                    <v-icon
                      large
                      left
                      v-text="icon"
                    >
                    </v-icon>
                    <h2 class="title font-weight-bold" v-text="name"></h2>
                  </v-card-title>

                  <div class="text-start">
                    <h4>Sex: <span class="font-weight-light" v-text="sex"></span> </h4>
                  </div>

                  <div class="text-start">
                    <h4>Coat: <span class="font-weight-light" v-text="coat"></span> </h4>
                  </div>

                  <div class="text-start">
                    <h4>Spoken For?:
                      <span v-if="spokenFor" class="font-weight-light">
                        Yes! This
                        <span v-if="sex === 'Male'">boy</span>
                        <span v-else>girl</span>
                        found
                        <span v-if="sex === 'Male'">his</span>
                        <span v-else>her</span>
                        forever home. 🎉
                      </span>
                      <span v-else class="font-weight-light">Not yet! Contact us below if you're interested. 😊</span>
                    </h4>
                  </div>

                  <div class="text-start">
                    <h4>
                      Current Weight:
                      <span class="font-weight-light"
                        v-text="`${weights[weights.length-1].weight} oz`">
                      </span>
                    </h4>
                  </div>
                </v-card>
              </div>
            </v-col>
          </v-row>

          <v-parallax
            class="d-none d-lg-block"
            :height="$vuetify.breakpoint.smAndDown ? 900 : 700"
            :src="require('./assets/puppies/momma-and-pups.jpg')"
          >
          </v-parallax>

          <v-row no-gutters class="d-lg-none">
            <v-img
              :src="require('./assets/puppies/momma-and-pups.jpg')"
            >
            </v-img>
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
                  <v-card-text class="text-center">850-592-8010 or 850-313-1092</v-card-text>
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
import Vue from 'vue';
import VueConfetti from 'vue-confetti';
import * as moment from 'moment/moment';
import MerleMale from './assets/puppies/merle-male.jpg';
import MerleFemale from './assets/puppies/merle-female.jpg';
import RedTriCollarSmall from './assets/puppies/red-tri-collar-small.jpg';
import RedTriCollarForehead from './assets/puppies/red-tri-collar-forehead.jpg';
import RedTriStripe from './assets/puppies/red-tri-stripe.jpg';
import RedTriDot from './assets/puppies/red-tri-dot.jpg';
import RedTriPartialCollar from './assets/puppies/red-tri-partial-collar.jpg';

Vue.use(VueConfetti);

export default {
  name: 'App',

  components: {},
  data() {
    return {
      puppies: [
        {
          icon: 'mdi-dog',
          name: 'Mashed Potatoes',
          coat: 'Red Merle',
          sex: 'Male',
          spokenFor: true,
          weights: [
            {
              date: moment('2020-11-26T20:00:00Z').toDate(),
              weight: 15.7,
            },
            {
              date: moment('2020-11-27T11:30:00Z').toDate(),
              weight: 16.5,
            },
          ],
          photos: [MerleMale],
        },
        {
          icon: 'mdi-dog',
          name: 'Coquito',
          coat: 'Red Merle',
          sex: 'Female',
          spokenFor: false,
          weights: [
            {
              date: moment('2020-11-26T20:00:00Z').toDate(),
              weight: 12.7,
            },
            {
              date: moment('2020-11-27T11:30:00Z').toDate(),
              weight: 12.7,
            },
          ],
          photos: [MerleFemale],
        },
        {
          icon: 'mdi-dog',
          name: 'Wishbone',
          coat: 'Red Tri w/ Full Collar & White Forehead',
          sex: 'Male',
          spokenFor: false,
          weights: [
            {
              date: moment('2020-11-26T20:00:00Z').toDate(),
              weight: 13.97,
            },
            {
              date: moment('2020-11-27T11:30:00Z').toDate(),
              weight: 15,
            },
          ],
          weight: [13.97, 15],
          photos: [RedTriCollarForehead],
        },
        {
          icon: 'mdi-dog',
          name: 'Hazel',
          coat: 'Red Tri w/ Thin Full Collar',
          sex: 'Female',
          spokenFor: true,
          weights: [
            {
              date: moment('2020-11-26T20:00:00Z').toDate(),
              weight: 13.9,
            },
            {
              date: moment('2020-11-27T11:30:00Z').toDate(),
              weight: 13.76,
            },
          ],
          photos: [RedTriCollarSmall],
        },
        {
          icon: 'mdi-dog',
          name: 'Ham',
          coat: 'Red Tri w/ Partial Collar',
          sex: 'Male',
          spokenFor: false,
          weights: [
            {
              date: moment('2020-11-26T20:00:00Z').toDate(),
              weight: 13.62,
            },
            {
              date: moment('2020-11-27T11:30:00Z').toDate(),
              weight: 14,
            },
          ],
          photos: [RedTriPartialCollar],
        },
        {
          icon: 'mdi-dog',
          name: 'Gravy',
          coat: 'Red Tri w/ neck dot',
          sex: 'Female',
          spokenFor: false,
          weights: [
            {
              date: moment('2020-11-26T20:00:00Z').toDate(),
              weight: 12.84,
            },
            {
              date: moment('2020-11-27T11:30:00Z').toDate(),
              weight: 12.84,
            },
          ],
          photos: [RedTriDot],
        },
        {
          icon: 'mdi-dog',
          name: 'Biscuit',
          coat: 'Red Tri w/ Long Neck Stripe',
          sex: 'Female',
          spokenFor: false,
          weights: [
            {
              date: moment('2020-11-26T20:00:00Z').toDate(),
              weight: 11.2,
            },
            {
              date: moment('2020-11-27T11:30:00Z').toDate(),
              weight: 11.7,
            },
          ],
          photos: [RedTriStripe],
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.puppies.forEach((puppy) => {
        if (puppy.spokenFor) {
          const canvas = document.getElementById(puppy.name);
          canvas.style.width = '100%';
          canvas.style.height = '100%';
          canvas.width = canvas.offsetWidth;
          canvas.height = canvas.offsetHeight;
          this.start(puppy.name);
        }
      });
    });
  },
  methods: {
    start(index) {
      this.$confetti.start({
        canvasId: index,
        particlesPerFrame: 5,
      });
    },
  },
};
</script>

<style scoped>
 .blue-text {
   color: #26c6da;
 }

  #canvas-wrap { position:relative; width:400px; height:500px; }
  #canvas-wrap canvas { position:absolute; top:0; left:0; z-index:99; }
</style>
