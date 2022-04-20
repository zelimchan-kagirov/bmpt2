<template>
  <main class="life-trainers-page">
    <div class="main-context container">
      <div class="main-text">
        <h1 class="main-header">Find the perfect trainer for yourself</h1>
        <h2 class="main-subheader">Train without leaving home</h2>
      </div>
    </div>
    <Partners />
  </main>
  <section class="container">
    <h3 class="section-heading">How does it work?</h3>
    <hr class="gradient-hr" />
    <div class="steps">
      <div>
        <h4>Step one:</h4>
        <p>Find the right coach for you</p>
      </div>
      <div>
        <h4>Step two:</h4>
        <p>Fill out the form with the date and time for training</p>
      </div>
      <div>
        <h4>Step three:</h4>
        <p>Wait for a response from us and get ready for training</p>
      </div>
    </div>
  </section>
  <section class="choose-trainer container">
    <!-- Choose buttons  -->
    <div class="choose-btns">
      <button
        @click="activeSection = 'LifeTrainers'"
        :class="{ clicked: activeSection === 'LifeTrainers' }"
        class="choose-btn bg-black-btn"
      >
        Trainer
      </button>
      <button
        @click="activeSection = 'LifeDietitian'"
        :class="{ clicked: activeSection === 'LifeDietitian' }"
        class="choose-btn bg-black-btn"
      >
        Dietitian
      </button>
    </div>
    <hr class="gradient-hr" />
    <Selects />
    <p class="available-trainer"><span>1321</span> Available Trainer</p>
    <!-- Trainers or Dietitian  -->
    <LifeTrainers
      :trainerPrice="getTrainerPrice"
      class="training-slider"
      v-if="activeSection === 'LifeTrainers'"
    />
    <LifeDietitian
      :trainerPrice="getTrainerPrice"
      class="training-slider"
      v-if="activeSection === 'LifeDietitian'"
    />
  </section>
  <section class="container">
    <h3 id="section-heading" class="section-heading">Training schedule</h3>
    <hr class="gradient-hr" />
    <section class="schedule">
      <Calendar :day="getSelectedDays" />
      <form @submit.prevent>
        <h4 class="form-heading">Contact</h4>
        <input type="text" placeholder="First Name" v-model.trim="firstName" />
        <input type="text" placeholder="Last Name" v-model.trim="lastName" />
        <input type="tel" placeholder="Mobile No." v-model.trim="mobileNum" />
        <input type="email" placeholder="Email" v-model.trim="email" />
        <p class="text">Individual Training</p>
        <p>
          Date
          <span class="selected-day bold"
            >{{ selectedDay }} of {{ currentMonth }}</span
          >
        </p>
        <p>
          Price <span class="cost bold"> {{ selectedTrainerPrice }}</span>
        </p>
        <input type="submit" value="Submit" class="bg-black-btn" />
      </form>
    </section>
  </section>
  <section class="payment container">
    <div class="payment-part">
      <h2 class="section-heading">Choose Payment Method</h2>
      <hr class="gradient-hr" />
      <div class="methods">
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
            @click="[(paymentMethod = 'american express'), showThanksMessage()]"
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
      </div>
    </div>
    <div class="thanks-window">
      <div class="thanks-message">
        <div class="message-content">
          <img src="../assets/img/icons/logo-black.svg" alt="Logo" />
          <p class="thanks-words">Thank you!</p>
          <p>
            Your Payment Successfull.<br />Please verify your email (email id)
            in order to activateyour account.<br />Note - if you don’t verify
            your email then your accountwon’t be activated.<br />BeMyPrivatetrainer
            <br />
            Thanks for your registering!
          </p>
          <router-link to="/" class="backTo-btn">Back To Main Page</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Selects from "@/components/Selects";
import LifeTrainers from "@/components/LifeTrainingSlider";
import LifeDietitian from "@/components/LifeDietitianSlider";
import Calendar from "@/components/Calendar";
import Partners from "@/components/Partners";
export default {
  components: {
    Selects,
    LifeTrainers,
    LifeDietitian,
    Calendar,
    Partners,
  },
  data() {
    return {
      activeSection: "LifeTrainers",
      firstName: "",
      lastName: "",
      mobileNum: "",
      email: "",
      selectedTrainerPrice: "",
      currentMonth: "",
      selectedDay: [],
      paymentMethod: "",
    };
  },
  methods: {
    getTrainerPrice(price) {
      this.selectedTrainerPrice = price;
    },
    getSelectedDays(days, month) {
      this.currentMonth = month;
      // this.selectedDay.push(days);
      // this.selectedDay = days;
      if (!this.selectedDay.includes(days)) {
        this.selectedDay.push(days);
      } else {
        this.selectedDay.splice(this.selectedDay.indexOf(days), 1);
      }
    },
    showThanksMessage() {
      document.querySelector(".thanks-window ").style.display = "block";
    },
  },
};
</script>

<style scoped>
.life-trainers-page {
  background-image: url("../assets/img/LifeTrainings.png");
}

.main-header {
  margin-bottom: 7px;
}
.main-subheader {
  max-width: 330px;
}
.choose-btns {
  display: flex;
  flex-wrap: nowrap;
}
/* How does it work */
.steps {
  margin: 60px 0 100px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 18px;
  line-height: 30px;
}
.steps div {
  width: 27%;
}
/* Choose trainer section  */
.choose-trainer {
  margin-bottom: 100px;
}
.available-trainer {
  font-weight: normal;
  font-size: 15px;
  line-height: 17px;
  color: #95979c;
  margin-bottom: 34px;
}
.schedule {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  margin-top: 50px;
  margin-bottom: 200px;
}
form {
  align-self: center;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 33%;
  margin-right: 5%;
  color: #95979c;
  font-size: 15px;
  line-height: 25px;
}
.form-heading {
  font-size: 25px;
  line-height: 29px;
  color: #000000;
  margin-bottom: 25px;
}
input {
  border: 0.5px solid #c4c4c4;
  border-radius: 5px;
  padding: 6px 12px;
  margin-bottom: 7px;
  font-size: 15px;
  line-height: 25px;
}
input::placeholder {
  font-size: 15px;
  line-height: 25px;
  color: #95979c;
}
input[type="submit"] {
  position: absolute;
  right: 0;
  cursor: pointer;
  padding: 15px;
  bottom: -75px;
}
.text {
  margin-top: 20px;
  margin-bottom: 14px;
}
.payment {
  margin-bottom: 100px;
}
@media (max-width: 1200px) {
  .schedule {
    flex-direction: column;
  }
  form {
    width: 100%;
    margin-top: 60px;
    margin-right: 0;
    /* align-self: left !important; */
  }
  form input {
    width: 60%;
  }
  form .bg-black-btn {
    right: 40%;
  }
}
@media (max-width: 515px) {
  .life-trainers-page {
    background-image: url("../assets/img/mob-lifr.png");
  }
  form input {
    width: 100%;
  }
  form .bg-black-btn {
    position: relative;
    right: 0;
  }
  input[type="submit"] {
    bottom: -15px;
  }
  .schedule {
    margin-bottom: 65px;
  }
}
@media (max-width: 430px) {
  .available-trainer {
    margin-bottom: 0;
  }
  .steps {
    margin: 0 0 50px;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    line-height: 17px;
  }
  .steps div {
    width: 50%;
    margin-bottom: 16px;
  }
  .steps div:last-child {
    margin-bottom: 0;
  }
  .choose-trainer {
    margin-bottom: 50px;
  }
}

/* Styles for payment method u can find in payment-method.scss  */
</style>