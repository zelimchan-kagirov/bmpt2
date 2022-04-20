<template>
  <main class="user-page">
    <div class="main-context container">
      <h1 class="main-header">Login as<br />Member</h1>
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
          <h2 class="section-heading">Login as Member</h2>
          <hr class="gradient-hr" />
          <form @submit.prevent class="member-login">
            <div class="form-top">
              <img
                src="../assets/img/icons/email.svg"
                alt="icon"
                class="icon"
              />
              <input
                type="email"
                placeholder="Email"
                v-model.trim="userEmail"
              />
            </div>
            <div class="form-top">
              <img src="../assets/img/icons/key.svg" alt="icon" class="icon" />
              <input
                type="password"
                placeholder="Password"
                v-model.trim="password"
              />
            </div>
            <div class="form-bottom forgot-password">
              <div>
                <input type="checkbox" id="remember" @click="toRemember" />
                <label for="remember">Remember me</label>
              </div>
              <button @click="forgotPassword = true" class="forgot">
                Forgot Password
              </button>
            </div>
            <router-link to="/member-page">
              <input
                @click="submited = true"
                type="submit"
                value="Login"
                class="bg-black-btn"
            /></router-link>
            <!-- <input
              @click="submited = true"
              type="submit"
              value="Login"
              class="bg-black-btn"
            /> -->
          </form>
        </div>
        <div class="login-part" v-if="forgotPassword">
          <h2 class="section-heading">Forgot password</h2>
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
            <input
              @click="sendPassword = true"
              type="submit"
              value="Send"
              class="bg-black-btn"
            />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Partners from "@/components/Partners";
export default {
  data() {
    return {
      userEmail: "",
      password: "",
      toRemember: false,
      forgotPassword: false,
      submited: false,
      sendPassword: false,
    };
  },
  components: {
    Partners,
  },
};
</script>

<style scoped>
.user-page {
  background-image: url("../assets/img/member-login.png");
}
@media (max-width: 500px) {
  .user-page {
    background-image: url("../assets/img/mob-member-login.png");
  }
}
/* Styles can be found in member-registr-login.scss */
</style>