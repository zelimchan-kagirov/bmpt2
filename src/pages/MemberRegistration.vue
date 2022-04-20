<template>
  <main class="user-page">
    <div class="main-context container">
      <h1 class="main-header">Member <br />Registration</h1>
    </div>
    <Partners />
  </main>
  <section class="member-registration-login">
    <div class="passwordSent" v-if="submited">
      <!-- <div class="passwordSent" v-if="submited && visible"> -->
      <p>We have send you a password o your Email.</p>
      <router-link to="/user-login"
        ><img
          @click="visible = false"
          class="close"
          src="../assets/img/icons/close-grey.svg"
          alt="close icon"
        />
      </router-link>
    </div>
    <div class="container">
      <div class="forms-part">
        <div class="login-part">
          <h2 class="section-heading">Member Registration</h2>
          <hr class="gradient-hr" />
          <form @submit.prevent class="member-login">
            <div class="form-top">
              <img
                src="../assets/img/icons/email.svg"
                alt="icon"
                class="icon"
              />
              <input type="email" placeholder="Email" v-model="email" />
            </div>
            <div class="form-top">
              <img src="../assets/img/icons/key.svg" alt="icon" class="icon" />
              <input
                type="password"
                placeholder="Password"
                v-model="password"
              />
            </div>
            <div class="form-top">
              <img src="../assets/img/icons/key.svg" alt="icon" class="icon" />
              <input type="password" placeholder="Confirm Password" />
            </div>
            <div class="form-bottom">
              <div>
                <input type="checkbox" id="condition" @click="condition" />
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
                <input type="checkbox" id="newsletter" @click="newsletter" />
                <label for="newsletter">
                  I agree to
                  <span class="uppercase">BEMYPRIVATETRAINER</span>
                  NewsLetters</label
                >
              </div>
            </div>
            <input
              @click="submited = true"
              type="submit"
              value="Login"
              class="bg-black-btn"
            />
            <!-- <input
              @click="[(submited = true), (visible = true)]"
              type="submit"
              value="Login"
            /> -->
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Selects from "../components/Selects.vue";
import Partners from "@/components/Partners";
export default {
  components: { Selects, Partners },
  data() {
    return {
      email: "",
      password: "",
      condition: false,
      newsletter: false,
      submited: false,
      visible: false,
    };
  },
};
</script>

<style scoped>
.user-page {
  background-image: url("../assets/img/member-registration.png");
}
@media (max-width: 500px) {
  .user-page {
    background-image: url("../assets/img/mob-member-reg.png");
  }
}
/* Styles can be found in member-registr-login.scss */
</style>