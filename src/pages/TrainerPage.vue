// This is the personal trainers's page 
<template>
  <div class="account">
    <div class="header-bkg"></div>
    <div class="wallpaper" v-if="!isLoading">
      <img :src="wallpaperImg" alt="wallpaper" class="wallpaper" />
      <div class="wallpaper-btns container sm-hide">
        <button v-if="trainer.liveTraining" class="wallpaper-btn life-btn">
          Life Trainig
        </button>
        <button
          @click="contactWindowVisible = true"
          class="wallpaper-btn contact-btn"
          :class="{ proBtn: trainer.pro }"
        >
          Contact
        </button>
        <div class="name-line">
          <p>
            {{ trainer.name }}
            <img class="coach-flag" :src="trainer.flag" alt="flag" />
          </p>
        </div>
      </div>
    </div>
    <!-- Contact pop-up window  -->
    <transition name="fade">
      <div class="gray-bck" v-if="contactWindowVisible">
        <div class="window-bkg" :class="{ proImg: trainer.pro }">
          <div class="contact-window">
            <img
              @click="closeContactForm"
              class="close"
              src="../assets/img/icons/close-grey.svg"
              alt="close"
            />
            <h4 class="window-heading">Contact</h4>
            <form class="contact-form" v-if="!submitted" @submit.prevent>
              <div class="fieldline" :class="{ proLine: trainer.pro }">
                <input type.trim="text" placeholder="First Name" required />
              </div>
              <div class="fieldline" :class="{ proLine: trainer.pro }">
                <input type.trim="text" placeholder="Last Name" required />
              </div>
              <div class="fieldline" :class="{ proLine: trainer.pro }">
                <input type="tel" placeholder="Mobile No." required />
              </div>
              <div class="fieldline" :class="{ proLine: trainer.pro }">
                <input type="email" placeholder="Email" required />
              </div>
              <div class="fieldline" :class="{ proLine: trainer.pro }">
                <textarea id=""></textarea>
              </div>

              <button
                @click="submitted = true"
                class="bg-black-btn"
                :class="{ proBtn: trainer.pro }"
              >
                Submit
              </button>
            </form>
            <div class="thanks-text" v-if="submitted">
              <p>Thank you for your interest. We will connect with you soon.</p>
              <router-link
                to="/"
                class="bg-black-btn"
                :class="{ proBtn: trainer.pro }"
              >
                To Main
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- ----- -->
    <div class="header-bkg"></div>
    <section class="container page-content" v-if="!isLoading">
      <aside>
        <div class="coach">
          <div class="img-bkg" :class="{ proImg: trainer.pro }">
            <img :src="trainer.img" alt="coach picture" class="coach-img" />
          </div>
          <p v-if="trainer.pro" class="pro-mark">
            <span class="uppercase">PRO</span> Trainer
          </p>
          <p class="sm-show name-sm">
            {{ trainer.name }}
            <img class="coach-flag" :src="trainer.flag" alt="flag" />
          </p>
          <div class="star-rating">
            <vue3-star-ratings
              v-model="trainer.rating"
              :showControl="false"
              disableClick="click"
              :step="0.1"
              :starSize="21"
              starColor="#FED42D"
              inactiveColor="#DFE1E6"
            />
          </div>
          <button
            @click="contactWindowVisible = true"
            class="contact-btn sm-show"
            :class="{ proBtn: trainer.pro }"
          >
            Contact
          </button>
        </div>
        <div class="coach-calendar sm-hide">
          <h5>Training schedule</h5>
          <SmallCalendar />
        </div>
        <router-link to="/blog" class="blog-btn sm-hide">My Blog</router-link>
        <div class="post-place sm-hide">
          <Blogpost />
        </div>
      </aside>
      <!-- trainer page Info  -->
      <div class="right-part">
        <div class="basic-info">
          <div class="form-info">
            <div class="info-box">
              <p>Country</p>
              <p>{{ trainer.country }}</p>
            </div>
            <div class="info-box">
              <p>City</p>
              <p>{{ trainer.city }}</p>
            </div>
            <div class="info-box">
              <p>Category</p>
              <p>{{ trainer.category }}</p>
            </div>
            <div class="info-box">
              <p>price</p>
              <p>{{ trainer.cost }} / per hour</p>
            </div>
            <div class="info-box">
              <p>age</p>
              <p>30 Years</p>
            </div>
            <div class="info-box">
              <p>Certified</p>
              <p>yes</p>
            </div>
            <div class="info-box">
              <p>Language</p>
              <p>German, Franch, Russisch, Arabic</p>
            </div>
            <div class="info-box">
              <p>Website</p>
              <p></p>
            </div>
          </div>
          <div class="social-media">
            <a href="#">
              <img src="../assets/img/icons/whatsapp.svg" alt=""
            /></a>
            <a href="#">
              <img src="../assets/img/icons/facebook.svg" alt=""
            /></a>
            <a href="#">
              <img src="../assets/img/icons/twitter.svg" alt=""
            /></a>
            <a href="#"> <img src="../assets/img/icons/insta.svg" alt="" /></a>
            <a href="#">
              <img src="../assets/img/icons/youtube.svg" alt=""
            /></a>
          </div>
        </div>
        <div class="about-part">
          <h2 class="section-heading">About me</h2>
          <hr class="gradient-hr" />
          <div class="about-me-text">
            <p>
              Schon seit früher Kindheit begeistert mich der Kampfsport in allen
              seinen Variationen und ich werde mich geehrt fühlen, meine
              Erfahrungen mit Ihnen zu teilen!
            </p>
          </div>
        </div>
        <div class="coach-calendar sm-show">
          <h5>Training schedule</h5>
          <Calendar class="big-calendar" />
          <SmallCalendar class="small-calendar" />
        </div>
        <router-link to="/blog" class="blog-btn sm-show">My Blog</router-link>

        <aside class="blog-page-aside sm-show">
          <router-link to="/bmpt-blog">
            <div class="recent-post">
              <div class="post-info">
                <img src="../assets/img/post1.jpg" alt="post image" />
                <div>
                  <h4 class="recent-post_title">
                    getting yourself fit for you!
                  </h4>
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
      </div>
      <!-- ----- -->
    </section>
    <div v-else>Loading</div>
  </div>
</template>

<script>
import Calendar from "@/components/Calendar";
import SmallCalendar from "@/components/Calendar-small";
import Blogpost from "@/components/Blogpost";
export default {
  components: {
    Calendar,
    SmallCalendar,
    Blogpost,
  },
  data() {
    return {
      contactWindowVisible: false,
      submitted: false,
      wallpaperImg: require("../assets/img/wallpaper.jpg"),
    };
  },
  computed: {
    trainer() {
      return this.$store.getters["getSingleTrainer"](this.$route.params.id);
    },
    isLoading() {
      return this.$store.getters["getIsLoading"];
    },
  },
  methods: {
    contactTrainer() {},
    closeContactForm() {
      this.contactWindowVisible = false;
    },
  },
};
</script>

<style scoped>
/* Styles cab ne found in account.scss */
</style>