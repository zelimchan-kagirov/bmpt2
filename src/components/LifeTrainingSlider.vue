<template>
  <div class="life-page-slider">
    <!-- <Carousel :itemsToShow="3.95" :wrapAround="true"> -->
    <!-- 4.5 -->
    <Carousel :itemsToShow="4.5" :wrapAround="true">
      <Slide v-for="cardInfo in trainers" :key="cardInfo.id">
        <div class="carousel__item">
          <div class="bkg-layer">
            <div class="trainer-card">
              <img
                v-if="cardInfo.pro"
                src="../assets/img/icons/PRO.svg"
                alt=""
                class="pro-icon"
              />
              <div class="picture">
                <img
                  class="trainer-pic"
                  v-bind:src="cardInfo.img"
                  alt="trainer"
                />
              </div>
              <div class="info">
                <p class="name">
                  {{ cardInfo.name
                  }}<span
                    ><img v-bind:src="cardInfo.flag" alt="coutry flag"
                  /></span>
                </p>
                <p>
                  Country
                  <span class="personal-info">({{ cardInfo.country }})</span>
                </p>
                <p>
                  City <span class="personal-info">({{ cardInfo.city }})</span>
                </p>
                <p>
                  Category
                  <span class="personal-info">({{ cardInfo.category }})</span>
                </p>
                <p>
                  Type <span class="personal-info">({{ cardInfo.type }})</span>
                </p>
                <div class="rating">
                  <img
                    src="../assets/img/icons/start.svg"
                    alt="raiting star"
                    class="star"
                  /><span class="raiting-number">{{ cardInfo.rating }}</span
                  ><span>(1k +)</span>
                  <!-- if there is live training show this img  -->
                  <img
                    class="live-training"
                    src="../assets/img/icons/live.svg"
                    alt=""
                  />
                  <!-- <div class="training-message">
                <p>The coach conducts Life Training</p>
              </div> -->
                </div>
              </div>
              <hr v-if="!cardInfo.pro" class="card-hr" />
              <hr v-else class="pro-hr" />
              <div class="like-price">
                <img
                  @click="cardInfo.liked = !cardInfo.liked"
                  v-if="!cardInfo.liked"
                  class="like"
                  src="../assets/img/icons/grey-heart.svg"
                  alt="like"
                />
                <img
                  @click="cardInfo.liked = !cardInfo.liked"
                  v-if="cardInfo.liked"
                  class="like"
                  src="../assets/img/icons/like-red.svg"
                  alt="like"
                />
                <p>
                  Starting At
                  <span class="bold">{{ cardInfo.cost }} / Hr.</span>
                </p>
              </div>
            </div>
          </div>
          <!-- @click="trainerPrice(cardInfo.cost)" -->
        </div>
        <!-- star rating  -->
        <!-- <transition name="fade">
        <StarRaing
          v-if="ratingWindowVisible"
          @closeRatingForm="closeRatingForm"
        />
      </transition> -->
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
    Navigation,
    // StarRaing,
  },
  data() {
    return {
      ratingWindowVisible: false,
    };
  },
  computed: {
    trainers() {
      return this.$store.getters["getLifeTrainers"];
    },
  },
  props: {
    // trainerPrice: Function,
  },
  methods: {
    // giveRate() {
    //   this.ratingWindowVisible = true;
    // },
    // closeRatingForm() {
    //   this.ratingWindowVisible = false;
    // },
    // activeCard() {
    //   const selectedTrainer = document.querySelector(
    //     ".carousel__slide--active"
    //   );
    //   const selectedTrainerPrice =
    //     selectedTrainer.querySelector(".bold").innerHTML;
    //   console.log(selectedTrainerPrice);
    // },
  },
});
</script>

<style scoped>
/* styles can be found in lifeCarousel.scss  */
</style>
