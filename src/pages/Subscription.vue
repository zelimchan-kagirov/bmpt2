<template>
  <main class="subscription-page">
    <div class="main-context container">
      <h1 class="main-header">Subscription</h1>
    </div>
    <Partners />
  </main>
  <section class="tarifs container">
    <p class="description">
      Register and start offering your services right now!
    </p>
    <h3>Wähle deinen Abrechnungszeitraum</h3>

    <button
      @click="activeSection = 'MonthSubscription'"
      :class="{ active: activeSection === 'MonthSubscription' }"
      class="month-btn option-btn"
    >
      Month
    </button>
    <button
      @click="activeSection = 'YearSubscription'"
      :class="{ active: activeSection === 'YearSubscription' }"
      class="year-btn option-btn"
    >
      12 months <span class="sale">-50%</span>
    </button>
    <MonthSubscription v-if="activeSection === 'MonthSubscription'" />
    <YearSubscription v-if="activeSection === 'YearSubscription'" />
  </section>
  <section class="apply container">
    <p class="description">
      Order a design for yourself Become a professional trainer
    </p>
    <div class="some-info">
      <div class="left">
        <p>
          A team of our in-house designers will be able to help you develop for
          you: corporate identity
        </p>
        <ul>
          <li>Photo / Video production</li>
          <li>Sport Model</li>
          <li>logo / flyer</li>
          <li>web solution</li>
          <li>Cocial Media Design</li>
          <li>Business Institute (Become a professional Trainer)</li>
        </ul>
        <p>
          you can leave us a request with a comment on what you need we will
          discuss the development with our designers and give you feedback
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
    </div>
  </section>
  <div class="section-form container">
    <img
      v-if="needed === ''"
      src="../assets/img/photo.png"
      alt="decor"
      class="select-img"
    />
    <img
      v-if="needed === 'logo-flyer'"
      src="../assets/img/Logo.png"
      alt="decor"
      class="select-img"
    />
    <img
      v-if="needed === 'sport-model'"
      src="../assets/img/SportModel.png"
      alt="decor"
      class="select-img"
    />
    <img
      v-if="needed === 'web'"
      src="../assets/img/Website.png"
      alt="decor"
      class="select-img"
    />
    <img
      v-if="needed === 'social-media'"
      src="../assets/img/social.png"
      alt="decor"
      class="select-img"
    />
    <img
      v-if="needed === 'business'"
      src="../assets/img/Flyer.png"
      alt="decor"
      class="select-img"
    />
    <img
      v-if="needed === 'photo-video'"
      src="../assets/img/VP.png"
      alt="decor"
      class="select-img"
    />
    <form @submit.prevent>
      <input type="text" placeholder="First Name" v-model.trim="firstName" />
      <input type="text" placeholder="Last Name" v-model.trim="lastName" />
      <input type="phone" placeholder="Mobile No." v-model.trim="phone" />
      <input type="email" placeholder="Email" v-model.trim="email" />
      <SelectCountries v-model="selectedCountry" />
      <svg
        class="select-arrow"
        width="8"
        height="5"
        viewBox="0 0 8 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref="arrow"
          d="M7.8515 0.148419C7.75261 0.0494455 7.63538 0 7.49994 0H0.500038C0.364534 0 0.247392 0.0494455 0.148419 0.148419C0.0494455 0.247501 0 0.364644 0 0.500065C0 0.635459 0.0494455 0.752601 0.148419 0.851602L3.64838 4.35156C3.74746 4.45054 3.86461 4.50009 4 4.50009C4.13539 4.50009 4.25265 4.45054 4.35154 4.35156L7.8515 0.851574C7.95036 0.752601 8 0.635459 8 0.500038C8 0.364644 7.95036 0.247501 7.8515 0.148419Z"
          fill="#000000"
        />
      </svg>
      <select v-model="needed">
        <option value="">I Need</option>
        <option value="photo-video">Photo / Video production</option>
        <option value="sport-model">Sport Model</option>
        <option value="logo-flyer">logo / flyer</option>
        <option value="web">web solution</option>
        <option value="social-media">Social Media Design</option>
        <option value="business">
          Business Institute (Become a professional Trainer)
        </option>
      </select>
      <svg
        class="select-arrow"
        width="8"
        height="5"
        viewBox="0 0 8 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref="arrow"
          d="M7.8515 0.148419C7.75261 0.0494455 7.63538 0 7.49994 0H0.500038C0.364534 0 0.247392 0.0494455 0.148419 0.148419C0.0494455 0.247501 0 0.364644 0 0.500065C0 0.635459 0.0494455 0.752601 0.148419 0.851602L3.64838 4.35156C3.74746 4.45054 3.86461 4.50009 4 4.50009C4.13539 4.50009 4.25265 4.45054 4.35154 4.35156L7.8515 0.851574C7.95036 0.752601 8 0.635459 8 0.500038C8 0.364644 7.95036 0.247501 7.8515 0.148419Z"
          fill="#000000"
        />
      </svg>
      <textarea v-model.lazy="message"></textarea>
      <button class="bg-black-btn">Submit</button>
    </form>
  </div>
</template>
<script>
import MonthSubscription from "@/components/MonthSubscription";
import YearSubscription from "@/components/YearSubscription";
import SelectCountries from "@/components/SelectCountries";
import Partners from "@/components/Partners";
export default {
  components: {
    MonthSubscription,
    YearSubscription,
    SelectCountries,
    Partners,
  },
  data() {
    return {
      activeSection: "MonthSubscription",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      selectedCountry: "",
      needed: "",
      message: "",
    };
  },
  methods: {
    rotateArrow() {
      const arrow = this.$refs.selectArrow;
      arrow.style.transform = " translateX(-25px) rotate(180deg)";
      setTimeout(function () {
        arrow.style.transform = " translateX(-25px) rotate(0)";
      }, 3000);
    },
  },
};
</script>
<style scoped>
.subscription-page {
  background-image: url("../assets/img/subscription.png");
}
.tarifs {
  text-align: center;
  /* width: 80%;
  margin: auto; */
}
.description {
  font-weight: bold;
  font-size: 40px;
  line-height: 46px;
  text-align: center;
  max-width: 580px;
  margin: auto;
  margin-bottom: 120px;
}
.option-btn {
  border: none;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: #282f39;
  padding: 20px 0;
  width: 275px;
  cursor: pointer;
  margin-top: 60px;
  margin-bottom: 100px;
  background: #eff3f8;
}
.option-btn:hover {
  background: #e3e8ee;
}
.month-btn {
  border-radius: 50px 0px 0px 50px;
}
.year-btn {
  border-radius: 0px 50px 50px 0px;
}
.sale {
  color: #6ece77;
}
.active {
  background-color: #282f39;
  color: #ffffff;
}
.active:hover {
  background-color: #282f39;
  color: #ffffff;
}
/* .apply {
  width: 80%;
  margin: auto;
} */
.some-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}
.left {
  width: 40%;
  font-size: 18px;
  line-height: 30px;
}
.left p:first-child {
  margin-bottom: 24px;
}
.left ul {
  list-style: none;
  margin-bottom: 80px;
}
.left ul li::before {
  content: "\2022";
  color: #c4c4c4;
  margin: 0 16px 0 5px;
}
.iframe-main-item {
  position: relative;
  width: 50%;
  padding-bottom: 41%;
  height: 0;
  margin-bottom: 50px;
}

.iframe-main-item iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  border-radius: 5px;
}
/* Form par */
.section-form {
  display: flex;
  /* width: 90%; */
  justify-content: space-between;
  margin-bottom: 110px;
}
form {
  align-self: flex-start;
  width: 45%;
  margin-top: 45px;
}
.select-img {
  width: 50%;
  min-width: 305px;
  margin: auto;
  /* position: absolute; */
  /* transform: translateX(-30%); */
}
input {
  display: block;
  border: 0.5px solid #c4c4c4;
  border-radius: 5px;
  width: 70%;
  min-width: 345px;
  max-width: 362px;
  font-size: 15px;
  line-height: 25px;
  padding: 10px;
  margin-bottom: 7px;
}
select {
  font-size: 15px;
  line-height: 25px;
  display: inline-block;
  max-width: 100px;
  border: 0.5px solid #c4c4c4;
  border-radius: 5px;
  padding: 6px;
  padding-right: 17px;
  margin-right: 10px;
  margin-bottom: 7px;
}
.select-arrow {
  transform: translateX(-25px) rotate(0);
}
textarea {
  width: 100%;
  height: 200px;
  border: 0.5px solid #c4c4c4;
  border-radius: 5px;
  padding: 6px;
  margin-bottom: 50px;
}
@media (max-width: 1140px) {
  .description {
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 80px;
  }
  form {
    width: 60%;
  }
  .select-img {
    transform: translateX(-30%);
  }
}
@media (max-width: 500px) {
  .subscription-page {
    background-image: url("../assets/img/mob-subscr.png");
  }
}
@media (max-width: 955px) {
  .left {
    width: 90%;
    margin-bottom: 45px;
    font-size: 15px;
    line-height: 23px;
  }
  .left ul {
    margin-bottom: 38px;
  }
  .iframe-main-item {
    width: 100%;
    padding-bottom: 50%;
  }
  .iframe-main-item iframe {
    height: 100%;
  }
}
@media (max-width: 726px) {
  .section-form {
    flex-direction: column-reverse;
  }
  form {
    width: 100%;
  }
  input {
    min-width: 100%;
    font-size: 10px;
    line-height: 25px;
  }
  select {
    font-size: 10px;
    line-height: 25px;
  }
  .select-img {
    width: 80%;
    transform: translateX(0);
    margin-top: 50px;
  }
}
@media (max-width: 690px) {
  .option-btn {
    width: 50%;
    font-size: 13px;
    line-height: 15px;
    padding: 10px 0;
    margin-bottom: 50px;
  }
}
@media (max-width: 430px) {
  .description {
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 50px;
  }
  .option-btn {
    margin-top: 25px;
    margin-bottom: 30px;
  }
  .left {
    font-size: 12px;
    line-height: 20px;
  }
  .apply > .description {
    margin-bottom: 30px;
  }
  .select-img {
    width: 80%;
    transform: translateX(-40%);
  }
}
</style>