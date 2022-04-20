<template>
  <div class="all-trainers">
    <div
      class="bkg-layer"
      :class="{ pro: cardInfo.pro }"
      v-for="cardInfo in trainers"
      :key="cardInfo.id"
    >
      <div class="trainer-card">
        <img
          v-if="cardInfo.pro"
          src="../assets/img/icons/PRO.svg"
          alt=""
          class="pro-icon"
        />
        <div class="picture">
          <img class="trainer-pic" v-bind:src="cardInfo.img" alt="trainer" />
        </div>
        <div class="info">
          <p class="name">
            {{ cardInfo.name
            }}<span><img v-bind:src="cardInfo.flag" alt="coutry flag" /></span>
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
            <!-- if there is NO live training show this img  -->
            <img
              v-if="!cardInfo.liveTraining"
              class="live-training"
              src="../assets/img/icons/no-live.svg"
              alt=""
            />
            <!-- if there is live training show this img  -->
            <img
              v-else
              class="live-training"
              src="../assets/img/icons/live.svg"
              alt=""
            />
            <div class="training-window">
              <div class="training-message">
                <p v-if="!cardInfo.liveTraining">
                  The coach does not conduct Life Training
                </p>
                <p v-if="cardInfo.liveTraining">
                  The coach conducts Life Training
                </p>
              </div>
            </div>
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
            Starting At <span class="bold">{{ cardInfo.cost }} / Hr.</span>
          </p>
        </div>
      </div>
    </div>
    <!-- star rating  -->
    <transition name="fade">
      <StarRaing
        v-if="ratingWindowVisible"
        @closeRatingForm="closeRatingForm"
      />
    </transition>
  </div>
</template>

<script>
import StarRaing from "@/components/popup/StarRating";
export default {
  name: "AllTrainers",
  components: {
    StarRaing,
  },
  data() {
    return {
      ratingWindowVisible: false,
    };
  },
  computed: {
    trainers() {
      return this.$store.getters["getTrainers"];
    },
  },
  methods: {
    giveRate() {
      this.ratingWindowVisible = true;
    },
    closeRatingForm() {
      this.ratingWindowVisible = false;
    },
  },
};
</script>

<style  scoped>
/* Pop up transition and Styles for cards you can find in trainerCard.scss  */
</style>