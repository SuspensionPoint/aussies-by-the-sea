<template>
  <v-app>
    <v-content>
      <section id="hero">
        <v-row no-gutters>
          <v-img :src="require('./assets/background.svg')">
            <v-theme-provider light> </v-theme-provider>
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

          <v-responsive class="mx-auto title font-weight-light mb-8" max-width="720">
            Australian Shepherd breeder located in Navarre, Fl.
            <br />
            <br />

            <!-- eslint-disable max-len -->
            On Thanksgiving Day, Nov. 26th, 2020, our female Australian Shepherd gave birth to her
            first litter. She had 7 very healthy puppies!

            <br />
            <br />

            There are currently {{ this.available }}/7 available.

            <br />
            <br />

            {{ this.numMale }} males and {{ this.numFemale }} females! Check back often to see their
            progress!
          </v-responsive>

          <div></div>
        </v-container>

        <div class="py-5"></div>
      </section>

      <section id="juno">
        <h2 class="display-2 text-center text-uppercase font-weight-bold mb-3">
          Momma: Juno
        </h2>

        <v-parallax
          class="d-none d-lg-block"
          :height="$vuetify.breakpoint.smAndDown ? 900 : 700"
          :src="require('./assets/beach_juno.jpeg')"
        >
        </v-parallax>

        <v-row no-gutters class="d-lg-none">
          <v-img :src="require('./assets/beach_juno.jpeg')"> </v-img>
        </v-row>

        <div class="py-5"></div>
      </section>

      <section id="mars">
        <h2 class="display-2 text-center text-uppercase font-weight-bold mb-3">
          Daddio: Mars
        </h2>

        <v-parallax
          contain
          class="d-none d-lg-block"
          :height="$vuetify.breakpoint.smAndDown ? 900 : 700"
          :src="require('./assets/mars.jpeg')"
        >
        </v-parallax>

        <v-row no-gutters class="d-lg-none">
          <v-img :src="require('./assets/mars.jpeg')"> </v-img>
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
              <div class="canvas-wrap">
                <canvas class="canvas-wrap-canvas" :id="name"></canvas>
                <v-card
                  class="mx-auto pa-3"
                  :color="spokenFor ? '#26c6da' : '#26c6da'"
                  dark
                  max-width="375"
                >
                  <div v-if="photos.length > 0" class="justify-center">
                    <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
                      <v-carousel-item v-for="(photo, i) in photos" :key="i">
                        <v-sheet color="#26c6da" height="100%">
                          <v-row class="fill-height" align="center" justify="center">
                            <v-img class="display-3" :src="photos"> </v-img>
                          </v-row>
                        </v-sheet>
                      </v-carousel-item>
                    </v-carousel>
                  </div>

                  <v-card-title class="justify-center">
                    <v-icon large left v-text="icon"> </v-icon>
                    <h2 class="title font-weight-bold" v-text="name"></h2>
                  </v-card-title>

                  <div class="text-start">
                    <h4>Sex: <span class="font-weight-light" v-text="sex"></span></h4>
                  </div>

                  <div class="text-start">
                    <h4>
                      Coat:
                      <span class="font-weight-light" v-text="coat"></span>
                    </h4>
                  </div>

                  <div class="text-start">
                    <h4>
                      Spoken For?:
                      <span v-if="spokenFor" class="font-weight-light">
                        Yes! This
                        <span v-if="sex === 'Male'">boy</span>
                        <span v-else>girl</span>
                        found
                        <span v-if="sex === 'Male'">his</span>
                        <span v-else>her</span>
                        forever home. 🎉
                      </span>
                      <span v-else class="font-weight-light"
                        >Not yet! Contact us below if you're interested. 😊</span
                      >
                    </h4>
                  </div>

                  <div class="text-start">
                    <h4>
                      Current Weight:
                      <span
                        class="font-weight-light"
                        v-text="`${weights[weights.length - 1].weight} oz`"
                      >
                      </span>
                    </h4>
                  </div>
                </v-card>
              </div>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-img :src="require('./assets/puppies/momma-and-pups.jpg')"> </v-img>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </section>

      <v-sheet id="contact" tag="section">
        <div class="py-12"></div>

        <v-container>
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">
            Contact Us
          </h2>

          <v-responsive class="mx-auto mb-12" width="56">
            <v-divider></v-divider>
          </v-responsive>

          <v-theme-provider light>
            <v-row>
              <v-col cols="12">
                <v-card class="py-12 px-4" color="#26c6da" dark>
                  <v-card-title class="justify-center font-weight-black text-uppercase"
                    >Email (preferred)</v-card-title
                  >
                  <v-card-text class="text-center">aussiesbythesea@gmail.com</v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-card class="py-12 px-4" color="#26c6da" dark>
                  <v-card-title class="justify-center font-weight-black text-uppercase"
                    >Phone</v-card-title
                  >
                  <v-card-text class="text-center">850-592-8010 or 850-313-1092</v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-card class="py-12 px-4" color="#26c6da" dark>
                  <v-card-title class="justify-center font-weight-black text-uppercase">
                    <v-img
                      contain
                      height="100px"
                      width="100px"
                      src="https://sarahscoop.com/wp-content/uploads/2020/04/tiktok-logo-3-1.png"
                    ></v-img
                  ></v-card-title>
                  <v-card-text class="text-center"
                    ><a href="https://www.tiktok.com/@aussiesbythesea"
                      >@aussiesbythesea</a
                    ></v-card-text
                  >
                </v-card>
              </v-col>
            </v-row>
          </v-theme-provider>
        </v-container>

        <div class="py-12"></div>
      </v-sheet>
    </v-content>

    <v-footer class="justify-center grey lighten-3" height="100">
      <div class="blue-text title font-weight-light text--lighten-1 text-center">
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
import RedTriCollarSmall from './assets/puppies/red-tri-collar-small.jpg';
import RedTriCollarForehead from './assets/puppies/red-tri-collar-forehead.jpg';
import RedTriStripe from './assets/puppies/red-tri-stripe.jpg';
import RedTriDot from './assets/puppies/red-tri-dot.jpg';
import RedTriPartialCollar from './assets/puppies/red-tri-partial-collar.jpg';

import Coquito1 from './assets/puppies/Coquito/image1.jpg';
import Coquito2 from './assets/puppies/Coquito/image2.jpg';
import Coquito3 from './assets/puppies/Coquito/image3.jpg';
import Coquito4 from './assets/puppies/Coquito/image4.jpg';
import Coquito5 from './assets/puppies/Coquito/image5.jpg';
import Coquito6 from './assets/puppies/Coquito/image6.jpg';
import Coquito7 from './assets/puppies/Coquito/image7.jpg';
import Coquito8 from './assets/puppies/Coquito/image8.jpg';
import Coquito9 from './assets/puppies/Coquito/image9.jpg';
import Coquito10 from './assets/puppies/Coquito/image10.jpg';
import Coquito11 from './assets/puppies/Coquito/image11.jpg';
import Coquito12 from './assets/puppies/Coquito/image12.jpg';
import Coquito13 from './assets/puppies/Coquito/image13.jpg';
import Coquito14 from './assets/puppies/Coquito/image14.jpg';
import Coquito15 from './assets/puppies/Coquito/image15.jpg';
import Coquito16 from './assets/puppies/Coquito/image16.jpg';
import Coquito17 from './assets/puppies/Coquito/image17.jpg';
import Coquito18 from './assets/puppies/Coquito/image18.jpg';
import Coquito19 from './assets/puppies/Coquito/image19.jpg';
import Coquito20 from './assets/puppies/Coquito/image20.jpg';
import Coquito21 from './assets/puppies/Coquito/image21.jpg';
import Coquito22 from './assets/puppies/Coquito/image22.jpg';
import Coquito23 from './assets/puppies/Coquito/image23.jpg';
import Coquito24 from './assets/puppies/Coquito/image24.jpg';

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
            {
              date: moment('2020-11-28T15:30:00Z').toDate(),
              weight: 18.8,
            },
            {
              date: moment('2020-11-29T13:00:00Z').toDate(),
              weight: 21.3,
            },
            {
              date: moment('2020-12-01T14:30:00Z').toDate(),
              weight: 23.84,
            },
          ],
          photos: [MerleMale],
        },
        {
          icon: 'mdi-dog',
          name: 'Coquito',
          coat: 'Red Merle',
          sex: 'Female',
          spokenFor: true,
          weights: [
            {
              date: moment('2020-11-26T20:00:00Z').toDate(),
              weight: 12.7,
            },
            {
              date: moment('2020-11-27T11:30:00Z').toDate(),
              weight: 12.7,
            },
            {
              date: moment('2020-11-28T15:30:00Z').toDate(),
              weight: 14.8,
            },
            {
              date: moment('2020-11-29T13:00:00Z').toDate(),
              weight: 17.5,
            },
            {
              date: moment('2020-12-01T14:30:00Z').toDate(),
              weight: 19.7,
            },
          ],
          photos: [
            Coquito1,
            Coquito2,
            Coquito3,
            Coquito4,
            Coquito5,
            Coquito6,
            Coquito7,
            Coquito8,
            Coquito9,
            Coquito10,
            Coquito11,
            Coquito12,
            Coquito13,
            Coquito14,
            Coquito15,
            Coquito16,
            Coquito17,
            Coquito18,
            Coquito19,
            Coquito20,
            Coquito21,
            Coquito22,
            Coquito23,
            Coquito24,
          ],
        },
        {
          icon: 'mdi-dog',
          name: 'Wishbone',
          coat: 'Red Tri w/ Full Collar & White Forehead',
          sex: 'Male',
          spokenFor: true,
          weights: [
            {
              date: moment('2020-11-26T20:00:00Z').toDate(),
              weight: 13.97,
            },
            {
              date: moment('2020-11-27T11:30:00Z').toDate(),
              weight: 15,
            },
            {
              date: moment('2020-11-28T15:30:00Z').toDate(),
              weight: 17.14,
            },
            {
              date: moment('2020-11-29T13:00:00Z').toDate(),
              weight: 19.89,
            },
            {
              date: moment('2020-12-01T14:30:00Z').toDate(),
              weight: 22.3,
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
            {
              date: moment('2020-11-28T15:30:00Z').toDate(),
              weight: 16.58,
            },
            {
              date: moment('2020-11-29T13:00:00Z').toDate(),
              weight: 19.05,
            },
            {
              date: moment('2020-12-01T14:30:00Z').toDate(),
              weight: 21.35,
            },
          ],
          photos: [RedTriCollarSmall],
        },
        {
          icon: 'mdi-dog',
          name: 'Ham',
          coat: 'Red Tri w/ Partial Collar',
          sex: 'Male',
          spokenFor: true,
          weights: [
            {
              date: moment('2020-11-26T20:00:00Z').toDate(),
              weight: 13.62,
            },
            {
              date: moment('2020-11-27T11:30:00Z').toDate(),
              weight: 14,
            },
            {
              date: moment('2020-11-28T15:30:00Z').toDate(),
              weight: 16.58,
            },
            {
              date: moment('2020-11-29T13:00:00Z').toDate(),
              weight: 18.98,
            },
            {
              date: moment('2020-12-01T14:30:00Z').toDate(),
              weight: 21.05,
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
            {
              date: moment('2020-11-28T15:30:00Z').toDate(),
              weight: 15.1,
            },
            {
              date: moment('2020-11-29T13:00:00Z').toDate(),
              weight: 17.71,
            },
            {
              date: moment('2020-12-01T14:30:00Z').toDate(),
              weight: 19.65,
            },
          ],
          photos: [RedTriDot],
        },
        {
          icon: 'mdi-dog',
          name: 'Biscuit',
          coat: 'Red Tri w/ Long Neck Stripe',
          sex: 'Female',
          spokenFor: true,
          weights: [
            {
              date: moment('2020-11-26T20:00:00Z').toDate(),
              weight: 11.2,
            },
            {
              date: moment('2020-11-27T11:30:00Z').toDate(),
              weight: 11.7,
            },
            {
              date: moment('2020-11-28T15:30:00Z').toDate(),
              weight: 14.14,
            },
            {
              date: moment('2020-11-29T13:00:00Z').toDate(),
              weight: 16.52,
            },
            {
              date: moment('2020-12-01T14:30:00Z').toDate(),
              weight: 18.2,
            },
          ],
          photos: [RedTriStripe],
        },
      ],
    };
  },
  mounted() {
    this.puppies.forEach((puppy) => {
      if (puppy.spokenFor) {
        this.start(puppy.name);
      }
    });

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
        particles: [
          {
            type: 'heart',
            size: 10,
            dropRate: 4,
          },
          {
            type: 'rect',
            size: 3,
            dropRate: 2,
          },
        ],
        canvasId: index,
        particlesPerFrame: 1,
      });
    },
  },
  computed: {
    available() {
      return this.puppies.filter((puppy) => !puppy.spokenFor).length;
    },
    numMale() {
      return this.puppies.filter((puppy) => puppy.sex === 'Male').length;
    },
    numFemale() {
      return this.puppies.filter((puppy) => puppy.sex === 'Female').length;
    },
  },
};
</script>

<style scoped>
.blue-text {
  color: #26c6da;
}

.canvas-wrap {
  position: relative;
}
.canvas-wrap-canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
}
</style>
