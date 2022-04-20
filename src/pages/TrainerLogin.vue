<template>
  <main class="user-page">
    <div class="main-context container">
      <h1 class="main-header">Trainer<br />Dietitian Login</h1>
    </div>
    <Partners />
  </main>

  <section class="member-registration-login">
    <div class="passwordSent" v-if="sendPassword && forgotPassword">
      <p>We have send you a password o your Email.</p>
      <img
        @click="forgotPassword = false"
        class="close"
        src="../assets/img/icons/close-grey.svg"
        alt="close icon"
      />
    </div>
    <div class="container">
      <div class="forms-part">
        <div class="login-part" v-if="!forgotPassword">
          <h2 class="section-heading">Trainer/Dietitian Login</h2>
          <hr class="gradient-hr" />
          <form @submit.prevent class="member-login">
            <div class="form-top">
              <img
                src="../assets/img/icons/email.svg"
                alt="icon"
                class="icon"
              />
              <input type="email" placeholder="Email" />
            </div>
            <div class="form-top">
              <img src="../assets/img/icons/key.svg" alt="icon" class="icon" />
              <input type="password" placeholder="Password" />
            </div>
            <div class="form-bottom forgot-password">
              <div>
                <input type="checkbox" id="remember" />
                <label for="remember">Remember me</label>
              </div>
              <button @click="forgotPassword = true" class="forgot">
                Forgot Password
              </button>
            </div>
            <router-link to="/trainer-account">
              <input
                @click="submited = true"
                type="submit"
                value="Login"
                class="bg-black-btn"
            /></router-link>
            <!-- <input
              @click="submited = true"
              type="submit"
              class="sm-black-btn"
              value="Login"
            /> -->
          </form>
        </div>
        <div class="forgotPassword-part" v-if="forgotPassword">
          <h2 class="section-heading">Forgot password</h2>
          <hr class="gradient-hr" />
          <form @submit.prevent class="member-login">
            <div class="form-top">
              <img src="../assets/img/icons/name.svg" alt="icon" class="icon" />
              <select name="user-select" id="user-select" class="user-select">
                <option value="">Select login type</option>
                <option value="User">User</option>
                <option value="Trainer-Dietitian">Trainer / Dietitian</option>
              </select>
            </div>
            <div class="form-top">
              <img
                src="../assets/img/icons/email.svg"
                alt="icon"
                class="icon"
              />
              <input type="email" placeholder="Email" />
            </div>
            <input @click="sendPassword = true" type="submit" value="Send" />
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
      forgotPassword: false,
      submited: false,
      sendPassword: false,
    };
  },
};
</script>

<style scoped>
.user-page {
  background-image: url("../assets/img/trainer:dietitian.png");
}
@media (max-width: 500px) {
  .user-page {
    background-image: url("../assets/img/mob-trainer-log.png");
  }
}
/* Styles can be found in member-registr-login.scss */
</style>