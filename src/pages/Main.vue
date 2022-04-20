<template>
  <main class="main-page">
    <!-- <div class="main-slider"></div> -->
    <div class="main-context container">
      <div class="main-text">
        <h1 class="main-header search-header">
          Find the perfect trainer for yourself
        </h1>
        <Search />
      </div>
      <div class="sportsmen"></div>
    </div>
    <div class="partner">
      <div class="container partner-logos">
        <a
          href="https://www.personaltrainerakademie.com/sportausbildungen-oesterreich/personal-trainer-ausbildung/"
          target="_blank"
        >
          <img src="../assets/img/partner-logo.png" alt="" />
        </a>
        <a
          href="https://www.personaltrainerakademie.com/sportausbildungen-oesterreich/personal-trainer-ausbildung/"
          target="_blank"
        >
          <img src="../assets/img/partner-logo.png" alt="" />
        </a>
        <a
          href="https://www.personaltrainerakademie.com/sportausbildungen-oesterreich/personal-trainer-ausbildung/"
          target="_blank"
        >
          <img src="../assets/img/partner-logo.png" alt="" />
        </a>
        <a
          href="https://www.personaltrainerakademie.com/sportausbildungen-oesterreich/personal-trainer-ausbildung/"
          target="_blank"
        >
          <img src="../assets/img/partner-logo.png" alt="" />
        </a>
      </div>
    </div>
  </main>
  <!-- Section starts  -->
  <section class="about container">
    <div class="left">
      <h2 class="section-heading">
        <span>About</span><br />
        BeMyPrivateTrainer
      </h2>
      <hr class="gradient-hr" />
      <p>
        <span class="bold">BeMyPrivateTrainer</span> is the platform where
        trainers, dietitians and people who are seeking them can meet.
      </p>
      <p>
        <span class="bold">With us</span>, you can find a highly qualified
        trainer in any kind of sports or dietitian to keep you heartless near
        you or any part of the world.
      </p>
      <p>
        <span class="bold">Only professionals</span> with proven records and
        certificationsare registered on our platform. We want you to be healthy
        and good looking. Find your trainer or dietitians with us!
      </p>
    </div>
    <div class="iframe-main-item">
      <iframe
        src="https://www.youtube.com/embed/3LUOzeyXXAE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
  <!-- Section starts  -->
  <section class="about container">
    <div class="left">
      <img class="fighters" src="../assets/img/Fighters.png" alt="" />
    </div>
    <div class="right">
      <h2 class="section-heading">What we do</h2>
      <hr class="gradient-hr" />
      <p>
        <span class="bold">For users:</span> <br />
        We help you to find trainers and dietitians according to your criteria
        of selection, in your city or area.
      </p>
      <p>
        Just through two simple steps: <br />
        Step 1: Browse into our website and sign up with us.<br />
        Step 2: Log in to your account and search for the best private and
        professional trainer according to your choice.
      </p>
      <p>
        <span class="bold">For trainers and dietitians:</span>
        <br />
        Trainers and Dietitians should have to register to be able to get hired
        by the prospective members in their city or area and they can
        consequently earn money by guiding training and diet.
      </p>
      <p>
        We are committed to giving our members the best available choices to
        enable them to get the best outcomes they are looking for; as we are
        aware of the fact that each member has distinctive goals in terms of
        sport and training.
      </p>
    </div>
  </section>
  <article class="colorful-part">
    <div class="colorful-part__content container">
      <div class="colorful-part_text">
        <h3 class="colorful-part_heading">Become a partner</h3>
        <button @click="showPartnerForm" class="white-btn">Get Started</button>
      </div>
      <img src="../assets/img/become-partner.png" alt="article picture" />
      <transition name="fade">
        <ParnerForm
          v-if="partherFormVisible"
          @closePartnerForm="closePartnerForm"
        />
      </transition>
    </div>
  </article>
  <!-- Section starts  -->
  <section class="our-trainers container">
    <h2 class="section-heading">Our trainers</h2>
    <hr class="gradient-hr" />
    <!-- trainers card slider  -->
    <Slider />
  </section>
  <section class="world">
    <div class="container">
      <h2 class="section-heading">We are all over the world</h2>
      <hr class="gradient-hr" />
    </div>
    <div class="world-pic"></div>
  </section>
</template>

<script>
import Slider from "@/components/Trainerslider";
import ParnerForm from "@/components/popup/BecomePartnerForm";
import Search from "@/components/Search";
export default {
  data() {
    return {
      partherFormVisible: false,
    };
  },
  components: {
    Slider,
    ParnerForm,
    Search,
  },
  methods: {
    showPartnerForm() {
      this.partherFormVisible = true;
    },
    closePartnerForm() {
      this.partherFormVisible = false;
    },
  },
};
</script>

<style scoped>
/* Pop up transition  */
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s ease;
}
.main-page {
  position: relative;
  background-image: url("../assets/img/bkg1.png");
  animation: bckChange 60s infinite;
  z-index: 20;
}
.main-context {
  position: relative;
  z-index: 10;
}
.main-text {
  position: relative;
  z-index: 10;
}
.main-header {
  width: 410px;
  margin-bottom: 34px;
}
.sportsmen {
  width: 620px;
  height: 700px;
  position: absolute;
  right: -100px;
  bottom: -393px;
  background-image: url("../assets/img/s1.png");
  background-repeat: no-repeat;
  background-position: center;
  z-index: 6;
  animation: sportsmenChange 60s infinite;
}
.about {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
}
.partner {
  position: absolute;
  bottom: -92px;
  width: 100vw;
  height: 92px;
  background-color: #fafafa;
}
.partner-logos {
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
}
.partner-logos a {
  position: relative;
  min-width: 120px;
  margin: 0 10px;
  z-index: 11;
}
.partner-logos img {
  width: 100%;
  margin: auto;
}
.partner-logos a:last-child {
  z-index: 9;
}
.about p {
  margin-bottom: 22px;
}
.about p:last-child {
  margin-bottom: 0;
}

.about .fighters {
  position: relative;
  right: 70px;
}
.about .left {
  padding-right: 25px;
  width: 40%;
}
.about .right {
  padding-right: 25px;
  width: 55%;
}

.about .iframe-main-item {
  align-self: flex-start;
  margin-top: 50px;
  position: relative;
  width: 55%;
  padding-bottom: 30%;
  height: 0;
}

.about .iframe-main-item iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.section-heading span {
  font-size: 35px;
  line-height: 40px;
}
/* Become a partner part  */
.colorful-part {
  position: relative;
  background: radial-gradient(
    69.82% 79.51% at 79.2% 61.98%,
    rgba(95, 149, 255, 0.95) 0%,
    rgba(0, 58, 125, 0.95) 100%
  );
  margin: 120px auto;
}
.colorful-part__content {
  position: relative;
  height: 350px;
  display: flex;
  align-items: center;
}
.colorful-part_text {
  min-width: 205px;
}

.colorful-part_heading {
  font-weight: 700;
  font-size: 45px;
  letter-spacing: 2px;
  line-height: 52px;
  color: #ffffff;
  margin-bottom: 25px;
}

.colorful-part img {
  position: absolute;
  width: 400px;
  right: 0;
  bottom: 0;
  align-self: flex-end;
}
/* Our tainers */
.our-trainers {
  margin-bottom: 120px;
}
/* World section  */
.world-pic {
  height: 490px;
  background: url("../assets/img/World.png") center/cover no-repeat;
}

@keyframes bckChange {
  0% {
    background-image: url("../assets/img/1.png");
  }
  25% {
    background-image: url("../assets/img/1.png");
  }
  25.01% {
    background-image: url("../assets/img/2.png");
  }
  50% {
    background-image: url("../assets/img/2.png");
  }
  50.01% {
    background-image: url("../assets/img/3.png");
  }
  75% {
    background-image: url("../assets/img/3.png");
  }
  75.01% {
    background-image: url("../assets/img/4.png");
  }
  100% {
    background-image: url("../assets/img/4.png");
  }
}
@keyframes sportsmenChange {
  0% {
    background-image: url("../assets/img/s1.png");
  }
  25% {
    background-image: url("../assets/img/s1.png");
  }
  25.01% {
    background-image: url("../assets/img/s2.png");
  }
  50% {
    background-image: url("../assets/img/s2.png");
  }
  50.01% {
    background-image: url("../assets/img/s3.png");
  }
  75% {
    background-image: url("../assets/img/s3.png");
  }
  75.01% {
    background-image: url("../assets/img/s4.png");
  }
  100% {
    background-image: url("../assets/img/s4.png");
  }
}
@keyframes bckChange3 {
  0% {
    background-image: url("../assets/img/bkg-m_1.png");
  }
  25% {
    background-image: url("../assets/img/bkg-m_1.png");
  }
  25.01% {
    background-image: url("../assets/img/bkg-m_2.png");
  }
  50% {
    background-image: url("../assets/img/bkg-m_2.png");
  }
  50.01% {
    background-image: url("../assets/img/bkg-m_3.png");
  }
  75% {
    background-image: url("../assets/img/bkg-m_3.png");
  }
  75.01% {
    background-image: url("../assets/img/bkg-m_4.png");
  }
  100% {
    background-image: url("../assets/img/bkg-m_4.png");
  }
}
@media (max-width: 1250px) {
  /* 1400 */
  .about {
    flex-direction: column;
    position: relative;
  }
  .about .left,
  .about .right {
    width: 100%;
  }
  .about .iframe-main-item {
    width: 100%;
    padding-bottom: 50%;
  }
  .about .fighters {
    top: 8%;
    position: absolute;
    z-index: -1;
    opacity: 0.1;
    right: 0;
  }
}
@media (max-width: 1283px) {
  .sportsmen {
    bottom: -427px;
    background-position: right;
  }
}
@media (max-width: 1070px) {
  .colorful-part__content {
    height: 35vw;
  }
  .colorful-part_text {
    width: 50%;
  }
  .colorful-part_heading {
    font-size: 35px;
  }
  .colorful-part img {
    width: 50%;
    margin: auto;
  }
}
@media (max-width: 900px) {
  .sportsmen {
    display: none;
  }
}
@media (max-width: 630px) {
  .colorful-part_heading {
    font-size: 20px;
    line-height: 23px;
  }
  .colorful-part img {
    width: 40%;
    margin: auto;
  }
}
@media (max-width: 550px) {
  .partner-logos a:last-child {
    display: none;
    z-index: 11;
  }
}
@media (max-width: 450px) {
  .main-page {
    background-image: url("../assets/img/bkg-m_1.png");
    animation: bckChange3 60s infinite;
    overflow: hidden;
    margin-bottom: 50px;
  }
  .partner {
    z-index: 10;
    bottom: 0;
    height: 50px;
    border-radius: 15px 15px 0 0;
  }
  .partner-logos {
    height: 50px;
  }
  .partner-logos a {
    min-width: 30%;
  }
  .sportsmen {
    display: none;
  }
  .main-text {
    width: 100%;
  }
  .about p {
    margin-bottom: 16px;
  }
  .about .fighters {
    width: 90%;
  }
  .colorful-part {
    margin: 50px 0;
  }
  .colorful-part_heading {
    margin-bottom: 16px;
  }
  .our-trainers {
    margin-bottom: 65px;
  }
}
</style>
