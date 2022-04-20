// This is the personal trainers's page 
<template>
  <div class="account">
    <div class="header-bkg"></div>
    <div class="wallpaper" v-if="!isLoading">
      <img :src="wallpaperImg" alt="wallpaper" class="wallpaper" />
      <div class="wallpaper-btns container sm-hide">
        <input id="uploadWallImg" type="file" @change="onWallImgUpload" />
        <label
          for="uploadWallImg"
          class="wallpaper-btn upload"
          v-if="visibleSection === 'EditPage'"
        >
          <img src="../assets/img/icons/upload.svg" alt="upload icon" />
          <span>Upload</span>
        </label>

        <button
          class="wallpaper-btn edit"
          @click="visibleSection = 'EditPage'"
          v-if="visibleSection === 'TrainerInfo'"
        >
          Edit
        </button>
        <button
          class="wallpaper-black-btn edit"
          v-if="visibleSection === 'EditPage'"
        >
          Edit
        </button>
        <button class="wallpaper-btn logout">Log out</button>

        <div class="name-line">
          <p>
            Mansur Dzhamaldinov
            <img
              src="../assets/img/icons/flags/germany.jpg"
              class="coach-flag"
              alt="flag"
            />
          </p>
        </div>
      </div>
    </div>
    <div class="header-bkg"></div>
    <section class="container page-content" v-if="!isLoading">
      <aside>
        <div class="coach">
          <div class="img-bkg">
            <img :src="accountImg" alt="coach picture" class="coach-img" />
            <label
              for="uploadAccountImg"
              class="upload-btn"
              v-if="visibleSection === 'EditPage'"
            >
              <img src="../assets/img/icons/uploadImg.svg" alt="" />
            </label>
            <input
              type="file"
              id="uploadAccountImg"
              @change="onAccountImgUpload"
            />
          </div>
          <p class="sm-show name-sm">
            Mansur Dzhamaldinov
            <img
              src="../assets/img/icons/flags/germany.jpg"
              class="coach-flag"
              alt="flag"
            />
          </p>

          <div class="star-rating">
            <vue3-star-ratings
              v-model="rating"
              :showControl="false"
              disableClick="click"
              :step="0.1"
              :starSize="21"
              starColor="#FED42D"
              inactiveColor="#DFE1E6"
            />
          </div>
          <button
            class="edit-btn sm-show"
            @click="visibleSection = 'EditPage'"
            v-if="visibleSection === 'TrainerInfo'"
          >
            Edit
          </button>
          <button
            class="edit-btn-black edit-btn sm-show"
            v-if="visibleSection === 'EditPage'"
          >
            Edit
          </button>
          <button class="edit-btn logout sm-show">Log out</button>
        </div>
        <div class="coach-calendar sm-hide">
          <h5>Training schedule</h5>
          <SmallCalendar />
        </div>
        <router-link to="/blog" class="blog-btn sm-hide">My Blog</router-link>
        <div class="post-place sm-hide">
          <Blogpost />
          <button
            class="add-new"
            @click="[(visibleSection = 'AddPost'), scrollUp()]"
          >
            <div class="plus">
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </aside>
      <!-- trainer Account Info  -->
      <div class="right-part" v-if="visibleSection === 'TrainerInfo'">
        <div class="basic-info">
          <div class="form-info">
            <div class="info-box">
              <p>Country</p>
              <p>{{ country }}</p>
            </div>
            <div class="info-box">
              <p>City</p>
              <p>{{ city }}</p>
            </div>
            <div class="info-box">
              <p>Category</p>
              <p>{{ category }}</p>
            </div>
            <div class="info-box">
              <p>price</p>
              <p>€ {{ price }} / per hour</p>
            </div>
            <div class="info-box">
              <p>age</p>
              <p>{{ age }} Years</p>
            </div>
            <div class="info-box">
              <p>Certified</p>
              <p>{{ certified }}</p>
            </div>
            <div class="info-box">
              <p>Language</p>
              <p>{{ language }}</p>
            </div>
            <div class="info-box">
              <p>Website</p>
              <p>{{ website }}</p>
            </div>
          </div>
          <div class="social-media">
            <a :href="whatsapp">
              <img src="../assets/img/icons/whatsapp.svg" alt="whatsapp icon"
            /></a>
            <a :href="facebook">
              <img src="../assets/img/icons/facebook.svg" alt="facebook icon"
            /></a>
            <a :href="twitter">
              <img src="../assets/img/icons/twitter.svg" alt="twitter icon"
            /></a>
            <a :href="instagram">
              <img src="../assets/img/icons/insta.svg" alt="instagram icon"
            /></a>
            <a :href="youtube">
              <img src="../assets/img/icons/youtube.svg" alt="youtube icon"
            /></a>
          </div>
        </div>
        <div class="about-part">
          <h2 class="section-heading">About me</h2>
          <hr class="gradient-hr" />
          <div class="about-me-text">
            <p>{{ aboutMe }}</p>
          </div>
        </div>
        <div class="coach-calendar sm-show">
          <h5>Training schedule</h5>
          <Calendar class="big-calendar" />
          <SmallCalendar class="small-calendar" />
        </div>
        <router-link to="/blog" class="blog-btn sm-show">My Blog</router-link>
        <button
          class="add-new sm-show"
          @click="[(visibleSection = 'AddPost'), scrollUp()]"
        >
          <div class="plus">
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <EditAcc
        @updatedInfo="accountInfo"
        class="right-part"
        v-if="visibleSection === 'EditPage'"
      />
      <!-- ------- -->
      <AddPost v-if="visibleSection === 'AddPost'" @closeAction="closeAction" />
      <aside class="blog-page-aside sm-show">
        <router-link to="/bmpt-blog">
          <div class="recent-post">
            <div class="post-info">
              <img src="../assets/img/post1.jpg" alt="post image" />
              <div>
                <h4 class="recent-post_title">getting yourself fit for you!</h4>
                <p class="recent-post_date">Jul 25, 2019</p>
                <p class="recent-post_text">
                  Kampfsport ist ein komplexes Thema und es gibt viele
                  unterschiedliche Kampfsportarten.
                </p>
              </div>
            </div>
            <hr class="resent-post-hr" />
          </div>
        </router-link>
      </aside>
    </section>
    <div v-else>Loading</div>
  </div>
</template>

<script>
import Calendar from "@/components/Calendar";
import SmallCalendar from "@/components/Calendar-small";
import AddPost from "@/components/AddPostPage";
import EditAcc from "@/components/EditTrainerAccount";
import Blogpost from "@/components/Blogpost";
export default {
  components: {
    Calendar,
    SmallCalendar,
    AddPost,
    EditAcc,
    Blogpost,
  },
  data() {
    return {
      rating: 3,
      visibleSection: "TrainerInfo",
      editProfile: false,
      submitted: false,
      wallpaperImg: require("../assets/img/wallpaperEx.jpg"),
      accountImg: require("../assets/img/accountImgEx.jpg"),
      country: "",
      city: "",
      category: "",
      price: "",
      age: "",
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
  computed: {
    // trainer() {
    //   return this.$store.getters["getSingleTrainer"](this.$route.params.id);
    // },
    isLoading() {
      return this.$store.getters["getIsLoading"];
    },
  },
  methods: {
    accountInfo(data) {
      this.visibleSection = "TrainerInfo";
      this.country = data.country;
      this.city = data.city;
      this.category = data.category;
      this.price = data.price;
      this.age = data.age;
      this.certified = data.certified;
      this.language = data.language;
      this.website = data.website;
      this.aboutMe = data.aboutMe;
      this.facebook = data.facebook;
      this.instagram = data.instagram;
      this.twitter = data.twitter;
      this.youtube = data.youtube;
      this.whatsapp = data.whatsapp;
    },
    onWallImgUpload(e) {
      const file = e.target.files[0];
      this.wallpaperImg = URL.createObjectURL(file);
    },
    onAccountImgUpload(e) {
      console.log(e);
      const file = e.target.files[0];
      this.accountImg = URL.createObjectURL(file);
    },
    closeAction() {
      this.visibleSection = "TrainerInfo";
    },
    scrollUp() {
      const pageStart = document.querySelector(".wallpaper-btn");
      pageStart.scrollIntoView({ behavior: "smooth" });
    },
    // contactTrainer() {},
    // closeContactForm() {
    //   this.contactWindowVisible = false;
    // },
  },
};
</script>

<style scoped>
/* Styles can be found in account.scss */
</style>