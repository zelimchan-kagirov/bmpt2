<template>
  <main class="user-page">
    <div class="main-context container">
      <h1 class="main-header">Trainer <br />Registration</h1>
    </div>
    <Partners />
  </main>
  <section class="member-registration-login">
    <div class="container">
      <div class="forms-part registration-forms">
        <div class="login-part" v-if="!paymentPart">
          <h2 class="section-heading">Trainer Registration</h2>
          <hr class="gradient-hr" />
          <div class="registation-steps">
            <button
              class="step-btn"
              @click="activeSection = 'LoginInfo'"
              :class="{ active: activeSection === 'LoginInfo' }"
            >
              Login information
            </button>
            <button
              class="step-btn"
              @click="activeSection = 'Personal'"
              :class="{ active: activeSection === 'Personal' }"
            >
              Personal
            </button>
            <button
              class="step-btn"
              @click="activeSection = 'Image'"
              :class="{ active: activeSection === 'Image' }"
            >
              Image
            </button>
            <button
              class="step-btn"
              @click="activeSection = 'Professional'"
              :class="{ active: activeSection === 'Professional' }"
            >
              Professional
            </button>
            <button
              class="step-btn"
              @click="activeSection = 'SocialMedia'"
              :class="{ active: activeSection === 'SocialMedia' }"
            >
              Social Media
            </button>
            <button
              class="step-btn"
              @click="activeSection = 'Payment'"
              :class="{ active: activeSection === 'Payment' }"
            >
              Payment
            </button>
          </div>
          <form @submit.prevent class="registration-form">
            <div
              class="step-info login-part"
              v-if="activeSection === 'LoginInfo'"
            >
              <div class="form-box">
                <img
                  src="../assets/img/icons/country.svg"
                  alt="icon"
                  class="icon"
                />
                <SelectCountries
                  class="user-select"
                  v-model="selectedCountry"
                  @click="rotateArrow"
                />
                <svg
                  ref="selectArrow"
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
              </div>
              <div class="form-box">
                <img
                  src="../assets/img/icons/city.svg"
                  alt="icon"
                  class="icon"
                />
                <input type="text" placeholder="City" v-model="city" />
              </div>
              <div class="form-box">
                <img
                  src="../assets/img/icons/email.svg"
                  alt="icon"
                  class="icon"
                />
                <input type="email" placeholder="Email" v-model.trim="email" />
              </div>
              <div class="form-box">
                <img
                  src="../assets/img/icons/key.svg"
                  alt="icon"
                  class="icon"
                />
                <input
                  type="password"
                  placeholder="Password"
                  v-model.trim="password"
                />
              </div>
              <div class="bottom-btns first-step">
                <button
                  class="next-btn sm-black-btn"
                  @click="activeSection = 'Personal'"
                >
                  Next
                </button>
              </div>
            </div>
            <div class="step-info" v-if="activeSection === 'Personal'">
              <div class="form-box">
                <img
                  src="../assets/img/icons/name.svg"
                  alt="icon"
                  class="icon"
                />
                <input type="text" placeholder="Name" v-model.trim="name" />
              </div>
              <div class="form-box">
                <img
                  src="../assets/img/icons/name.svg"
                  alt="icon"
                  class="icon"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  v-model.trim="lastName"
                />
              </div>
              <div class="form-box">
                <img
                  src="../assets/img/icons/phone.svg"
                  alt="icon"
                  class="icon"
                />
                <input
                  type="tel"
                  placeholder="Contact number"
                  v-model.trim="phone"
                />
              </div>
              <div class="form-box">
                <img
                  src="../assets/img/icons/calendar.svg"
                  alt="icon"
                  class="icon"
                />
                <input
                  type="text"
                  placeholder="Date of birth"
                  v-model.trim="birthday"
                />
              </div>
              <div class="form-box">
                <img
                  src="../assets/img/icons/country.svg"
                  alt="icon"
                  class="icon"
                />
                <input
                  type="text"
                  placeholder="Language"
                  v-model.trim="language"
                />
              </div>
              <div class="form-box textarea">
                <img
                  src="../assets/img/icons/resume.svg"
                  alt="icon"
                  class="icon"
                />
                <textarea
                  placeholder="Aboute me"
                  v-model.lazy="aboutMe"
                ></textarea>
              </div>
              <div class="bottom-btns">
                <button
                  class="back-btn road-btn sm-black-btn"
                  @click="activeSection = 'LoginInfo'"
                >
                  Back
                </button>
                <button
                  class="next-btn road-btn sm-black-btn"
                  @click="activeSection = 'Image'"
                >
                  Next
                </button>
              </div>
            </div>
            <div class="step-info" v-if="activeSection === 'Image'">
              <div class="image-step">
                <div class="previewImg">
                  <img v-if="url" :src="url" />
                </div>
                <label for="uploadImg" class="uploadImg">
                  <img src="../assets/img/icons/download.svg" alt="" /> Choose
                  photo</label
                >
                <input id="uploadImg" type="file" @change="onFileChange" />
              </div>
              <div class="bottom-btns">
                <button
                  class="back-btn road-btn sm-black-btn"
                  @click="activeSection = 'Personal'"
                >
                  Back
                </button>
                <button
                  class="next-btn road-btn sm-black-btn"
                  @click="activeSection = 'Professional'"
                >
                  Next
                </button>
              </div>
            </div>
            <div class="step-info" v-if="activeSection === 'Professional'">
              <div class="form-box">
                <img
                  src="../assets/img/icons/resume.svg"
                  alt="icon"
                  class="icon"
                />
                <input type="text" placeholder="Category" v-model="category" />
              </div>
              <div class="form-box">
                <img
                  src="../assets/img/icons/price.svg"
                  alt="icon"
                  class="icon"
                />
                <input type="text" placeholder="Price" v-model="price" />
              </div>
              <div class="form-box">
                <img
                  src="../assets/img/icons/sertificate.svg"
                  alt="icon"
                  class="icon"
                />
                <input
                  type="text"
                  placeholder="Certified"
                  v-model="certified"
                />
              </div>
              <div class="form-box">
                <img
                  src="../assets/img/icons/country.svg"
                  alt="icon"
                  class="icon"
                />
                <input
                  type="text"
                  placeholder="Website url"
                  v-model="website"
                />
              </div>
              <div class="bottom-btns">
                <button
                  class="back-btn road-btn sm-black-btn"
                  @click="activeSection = 'Image'"
                >
                  Back</button
                ><button
                  class="next-btn road-btn sm-black-btn"
                  @click="activeSection = 'SocialMedia'"
                >
                  Next
                </button>
              </div>
            </div>
            <div class="step-info" v-if="activeSection === 'SocialMedia'">
              <div class="socials">
                <div>
                  <div class="form-box">
                    <img
                      src="../assets/img/icons/facebook.svg"
                      alt="icon"
                      class="icon"
                    />
                    <input type="text" v-model="facebook" />
                  </div>
                  <div class="form-box">
                    <img
                      src="../assets/img/icons/insta.svg"
                      alt="icon"
                      class="icon"
                    />
                    <input type="text" v-model="instagram" />
                  </div>
                  <div class="form-box">
                    <img
                      src="../assets/img/icons/vk.svg"
                      alt="icon"
                      class="icon"
                    />
                    <input type="text" v-model="vk" />
                  </div>
                </div>
                <div>
                  <div class="form-box">
                    <img
                      src="../assets/img/icons/twitter.svg"
                      alt="icon"
                      class="icon"
                    />
                    <input type="text" v-model="twitter" />
                  </div>
                  <div class="form-box">
                    <img
                      src="../assets/img/icons/youtube.svg"
                      alt="icon"
                      class="icon"
                    />
                    <input type="text" v-model="youtube" />
                  </div>
                  <div class="form-box">
                    <img
                      src="../assets/img/icons/wp.svg"
                      alt="icon"
                      class="icon"
                    />
                    <input type="text" v-model="whatsapp" />
                  </div>
                </div>
              </div>
              <div class="bottom-btns">
                <button
                  class="back-btn road-btn sm-black-btn"
                  @click="activeSection = 'Professional'"
                >
                  Back</button
                ><button
                  class="next-btn road-btn sm-black-btn"
                  @click="activeSection = 'Payment'"
                >
                  Next
                </button>
              </div>
            </div>
            <div class="step-info" v-if="activeSection === 'Payment'">
              <button class="payment-btn" @click="paymentPart = true">
                Payment
                <img
                  src="../assets/img/icons/arrow-right.svg"
                  alt="arrow right"
                />
              </button>
              <div class="form-bottom">
                <div>
                  <input
                    type="checkbox"
                    id="condition"
                    @click="condition = true"
                  />
                  <label for="condition">
                    I agree to
                    <span class="uppercase">BEMYPRIVATETRAINER</span>
                    <router-link to="/conditions" class="links">
                      Terms and conditions </router-link
                    >and
                    <router-link to="/privacy" class="links"
                      >Privacy policy.</router-link
                    ></label
                  >
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="newsletter"
                    @click="newsletter = true"
                  />
                  <label for="newsletter">
                    I agree to
                    <span class="uppercase">BEMYPRIVATETRAINER</span>
                    NewsLetters</label
                  >
                </div>
              </div>
              <div class="bottom-btns">
                <button
                  class="back-btn road-btn sm-black-btn"
                  @click="activeSection = 'SocialMedia'"
                >
                  Back
                </button>
                <button
                  class="next-btn road-btn sm-black-btn"
                  @click="paymentPart = true"
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="payment-part" v-if="paymentPart">
          <h2 class="section-heading">Choose Payment Method</h2>
          <hr class="gradient-hr" />
          <div class="methods regist-page_method">
            <div class="top">
              <button
                class="method-card"
                @click="[(paymentMethod = 'paypal'), showThanksMessage()]"
              >
                <img src="../assets/img/paypal.svg" alt="paypal" />
                <p>The safer, easier way to pay</p>
              </button>
              <button
                class="method-card"
                @click="[(paymentMethod = 'stripe'), showThanksMessage()]"
              >
                <img src="../assets/img/stripe.svg" alt="stripe" />
                <p>Powered by</p>
              </button>
            </div>
            <div class="bottom">
              <button
                class="method-card"
                @click="[(paymentMethod = 'visa'), showThanksMessage()]"
              >
                <img src="../assets/img/visa.svg" alt="visa" />
              </button>
              <button
                class="method-card"
                @click="[(paymentMethod = 'mastercard'), showThanksMessage()]"
              >
                <img src="../assets/img/mastercard.svg" alt="mastercard" />
              </button>
              <button
                class="method-card"
                @click="
                  [(paymentMethod = 'american express'), showThanksMessage()]
                "
              >
                <img
                  src="../assets/img/americanexpress.svg"
                  alt="american express"
                />
              </button>
              <button
                class="method-card"
                @click="[(paymentMethod = 'discover'), showThanksMessage()]"
              >
                <img src="../assets/img/discover.svg" alt="discover" />
              </button>
            </div>
            <div class="coupon">
              <input type="text" v-model="couponNumber" />
              <button
                v-if="!usedCoupon"
                @click="[(usedCoupon = true), showThanksMessage()]"
                class="coupon-btn no-cupon"
              >
                Pay with Coupon Code
              </button>
              <button v-if="usedCoupon" class="coupon-btn with-cupon">
                Coupon Code Applied
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="thanks-window">
    <div class="thanks-message">
      <div class="message-content">
        <img src="../assets/img/icons/logo-black.svg" alt="Logo" />
        <p class="thanks-words">Thank you!</p>
        <p>
          Your Payment Successfull.<br />Please verify your email (email id) in
          order to activateyour account.<br />Note - if you don’t verify your
          email then your accountwon’t be activated.<br />BeMyPrivatetrainer -
          Thanks for your registering!
        </p>
        <router-link to="/" class="backTo-btn">Back To Main Page</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import SelectCountries from "@/components/SelectCountries";
import Partners from "@/components/Partners";
export default {
  components: { SelectCountries, Partners },
  data() {
    return {
      paymentPart: false,
      activeSection: "LoginInfo",
      email: "",
      name: "",
      lastName: "",
      password: "",
      phone: "",
      birthday: "",
      language: "",
      aboutMe: "",
      condition: false,
      newsletter: false,
      submited: false,
      url: null,
      category: "",
      price: "",
      certified: "",
      website: "",
      facebook: "",
      instagram: "",
      vk: "",
      twitter: "",
      youtube: "",
      whatsapp: "",
      paymentMethod: "",
      couponNumber: "",
      usedCoupon: false,
    };
  },
  methods: {
    showThanksMessage() {
      document.querySelector(".thanks-window ").style.display = "block";
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    rotateArrow() {
      const arrow = this.$refs.selectArrow;
      arrow.style.transform = "rotate(180deg)";
      setTimeout(function () {
        arrow.style.transform = "rotate(0)";
      }, 3000);
    },
  },
};
</script>

<style scoped>
.user-page {
  background-image: url("../assets/img/member-registration.png");
}
.previewImg {
  background: url("../assets/img/emptyImg.png") center no-repeat;
}
@media (max-width: 500px) {
  .user-page {
    background-image: url("../assets/img/mob-member-reg.png");
  }
}
/* Styles can be found in member-registr-login.scss */
/* Styles for payment method u can find in payment-method.scss  */
</style>