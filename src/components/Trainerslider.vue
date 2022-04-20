<template>
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide
      v-for="trainerInfo in trainers"
      :key="trainerInfo.id"
      class="trainer-cards"
    >
      <router-link
        :to="`/trainer-page/${trainerInfo.id}`"
        class="carousel__item card"
      >
        <div class="card-shadow"></div>
        <div class="card-img">
          <img :src="trainerInfo.img" alt="tainer picture" />
        </div>
        <span class="status">{{ trainerInfo.category }}</span>
        <span class="name">{{ trainerInfo.name }}</span>
      </router-link>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      300: {
        itemsToShow: 3,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: "start",
      },
    },
  }),
  computed: {
    trainers() {
      return this.$store.getters["getTrainers"];
    },
  },
});
</script>
<style scoped>
.trainer-cards {
  display: flex;
  height: 320px;
}
.trainer-cards .card {
  position: relative;
  width: 95%;
  max-width: 264px;
  border-radius: 5px;
  height: 100%;
  overflow: hidden;
  padding: 16px;
  margin: 0 2px;
  color: #ffffff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.trainer-cards .card-shadow {
  background: linear-gradient(180deg, #000000 -61.6%, rgba(0, 0, 0, 0) 100%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  z-index: 2;
}
.card-img img {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  object-fit: cover;
  height: 320px;
  border-radius: 5px;
  z-index: 1;
}
.trainer-cards .card span {
  position: relative;
  z-index: 5;
  line-height: 22px;
}
@media (max-width: 700px) {
  .trainer-cards {
    justify-content: center;
  }
}
@media (max-width: 680px) {
  .carousel {
    margin-left: 15px;
    margin-right: 5px;
  }
}
@media (max-width: 430px) {
  .trainer-cards .card,
  .trainer-cards .card-shadow {
    width: 107px;
    height: 153px;
    padding: 5px;
  }
  .trainer-cards {
    height: auto;
  }
  .card-img img {
    height: 153px;
  }
  .name {
    font-size: 12px;
  }
}
</style>
