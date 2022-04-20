<template>
  <div class="life-page-slider">
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
                    @click="giveRate()"
                    src="../assets/img/icons/start.svg"
                    alt="raiting star"
                    class="star"
                  /><span class="raiting-number">{{ cardInfo.rating }}</span
                  ><span>(1k +)</span>
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
          <a @click="trainerPrice(cardInfo.cost)" class="select bg-black-btn"
            >select</a
          >
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
// import StarRaing from "@/components/popup/StarRating";

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
      activecardprice: "",
    };
  },
  computed: {
    trainers() {
      return this.$store.getters["getLifeDietitians"];
    },
  },
  props: {
    trainerPrice: Function,
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
