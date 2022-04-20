<template>
  <div>
    <section class="edit-part" v-if="visiblePart === 'InfoEdit'">
      <div class="form-info">
        <div class="info-box">
          <p>Country</p>
          <input type="text" v-model="country" />
        </div>
        <div class="info-box">
          <p>City</p>
          <input type="text" v-model="city" />
        </div>
        <div class="info-box">
          <p>Category</p>
          <input type="text" v-model="category" />
        </div>
        <div class="info-box">
          <p>price</p>
          <input type="text" v-model="price" />
        </div>
        <div class="info-box">
          <p>age</p>
          <input type="text" v-model="age" />
        </div>
        <div class="info-box">
          <p>Certified</p>
          <input type="text" v-model="certified" />
        </div>
        <div class="info-box">
          <p>Language</p>
          <input type="text" v-model="language" />
        </div>
        <div class="info-box">
          <p>Website</p>
          <input type="text" v-model="website" />
        </div>
      </div>
      <div class="about-part">
        <h2 class="section-heading">About me</h2>
        <hr class="gradient-hr" />
        <textarea class="about-me-text" v-model="aboutMe"> </textarea>
      </div>
      <div class="social-media edit-media">
        <p>Personal Information</p>
        <div>
          <img
            src="../assets/img/icons/facebook.svg"
            alt="facebook icon"
          /><input
            type="text"
            placeholder="Insert URL Link"
            v-model="facebook"
          />
        </div>
        <div>
          <img src="../assets/img/icons/insta.svg" alt="instagram icon" /><input
            type="text"
            placeholder="Insert URL Link"
            v-model="instagram"
          />
        </div>
        <div>
          <img src="../assets/img/icons/vk.svg" alt="vk icon" /><input
            type="text"
            placeholder="Insert URL Link"
            v-model="vk"
          />
        </div>
        <div>
          <img src="../assets/img/icons/twitter.svg" alt="twitter icon" /><input
            type="text"
            placeholder="Insert URL Link"
            v-model="twitter"
          />
        </div>
        <div>
          <img src="../assets/img/icons/youtube.svg" alt="youtube icon" /><input
            type="text"
            placeholder="Insert URL Link"
            v-model="youtube"
          />
        </div>
        <div>
          <img
            src="../assets/img/icons/whatsapp.svg"
            alt="whatsapp icon"
          /><input
            type="text"
            placeholder="Insert URL Link"
            v-model="whatsapp"
          />
        </div>
      </div>
      <button
        class="bg-black-btn bottom-btn"
        @click="[(visiblePart = 'SubscriptionPart'), scrollUp()]"
      >
        Subscription
      </button>
      <button
        class="bg-black-btn bottom-btn"
        @click="[(visiblePart = 'LifeTraining'), scrollUp()]"
      >
        Life Training
      </button>
      <br />
      <button class="proceed-btn bottom-btn" @click="changeProfileInfo">
        Proceed your Profile
      </button>
      <button class="proceed-btn bottom-btn">Reset your Profile</button>
      <br />
      <button @click="deactivate()" class="deactivate-btn bottom-btn">
        Deactivate
      </button>
      <transition name="fade">
        <Deactivation
          v-if="deactivateWindowVisible"
          @cancelDeactivation="cancelDeactivation"
        />
      </transition>
    </section>
    <Subscription
      v-if="visiblePart === 'SubscriptionPart'"
      @backToPrevious="backToPrevious"
    />
    <LifeTraining
      v-if="visiblePart === 'LifeTraining'"
      @backToPrevious="backToPrevious"
    />
  </div>
</template>

<script>
import Subscription from "@/components/SubscriptionPlan";
import LifeTraining from "@/components/LifeTrainingSettings";
import Deactivation from "@/components/popup/Deactivate-window";
export default {
  components: { Subscription, LifeTraining, Deactivation },
  data() {
    return {
      deactivateWindowVisible: false,
      visiblePart: "InfoEdit",
      wallpaperimg: "",
      country: "",
      city: "",
      category: "",
      price: "",
      age: "25",
      certified: "",
      language: "",
      website: "",
      aboutMe: "",
      facebook: "",
      instagram: "",
      twitter: "",
      youtube: "",
      whatsapp: "",
    };
  },
  methods: {
    changeProfileInfo() {
      this.$emit("updatedInfo", {
        country: this.country,
        city: this.city,
        category: this.category,
        price: this.price,
        age: this.age,
        certified: this.certified,
        language: this.language,
        website: this.website,
        aboutMe: this.aboutMe,
        facebook: this.facebook,
        instagram: this.instagram,
        twitter: this.twitter,
        youtube: this.youtube,
        whatsapp: this.whatsapp,
      });
    },
    backToPrevious() {
      this.visiblePart = "InfoEdit";
    },
    scrollUp() {
      const pageStart = document.querySelector(".wallpaper-btn");
      pageStart.scrollIntoView({ behavior: "smooth" });
    },
    deactivate() {
      this.deactivateWindowVisible = true;
    },
    cancelDeactivation() {
      this.deactivateWindowVisible = false;
    },
  },
};
</script>

<style scoped>
.form-info {
  margin-bottom: 80px;
}
.info-box {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #dedede;
  padding: 12px 0;
  margin-bottom: 5px;
  font-size: 15px;
  line-height: 25px;
  color: #b8b8b8;
  text-transform: capitalize;
}
.info-box input {
  /* margin-left: 80px; */
  border: none;
  flex-grow: 1;
}
.about-part {
  margin-bottom: 65px;
}
.about-part h2 {
  font-size: 30px;
  line-height: 34px;
}
.about-me-text {
  background-color: #f8f8f8;
  padding: 23px 15px;
  width: 100%;
  height: 255px;
  border: none;
}
.social-media p {
  font-size: 10px;
  line-height: 25px;
  color: #95979c;
  margin-bottom: 10px;
}
.social-media div {
  display: flex;
  align-items: center;
  margin-bottom: 27px;
}
.social-media div:last-child {
  margin-bottom: 40px;
}
.social-media img {
  width: 16px;
  margin-right: 10px;
}
.social-media input {
  border: none;
  flex-grow: 1;
  font-size: 10px;
  line-height: 15px;
}
.social-media input::placeholder {
  color: #95979c;
}
.bg-black-btn {
  padding-left: 27px;
  padding-right: 27px;
  margin-right: 6px;
  margin-bottom: 24px;
}
.proceed-btn {
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background-color: #ffffff;
  color: #c4c4c4;
  font-size: 15px;
  line-height: 15px;
  padding: 18px 30px;
  margin-right: 11px;
  margin-bottom: 24px;
}
.deactivate-btn {
  background: #b20303;
  border-radius: 5px;
  width: 392px;
  font-weight: bold;
  font-size: 21px;
  line-height: 24px;
  padding: 15px 27px;
  color: #ffffff;
}
@media (max-width: 700px) {
  .bg-black-btn {
    width: 100% !important;
  }
  .bottom-btn {
    width: 100%;
    font-size: 15px;
    line-height: 15px;
    padding: 13px;
    margin-bottom: 10px;
  }
}
</style>