<template>
  <div class="gray-bck">
    <form @submit.prevent class="partner-form">
      <img
        @click="$emit('closePartnerForm')"
        class="close"
        src="../../assets/img/icons/close-grey.svg"
        alt="close"
      />
      <div v-if="!submited">
        <h4 class="form-heading">Become a partner</h4>
        <input type="text" placeholder="Name" required v-model.trim="name" />
        <input type="email" placeholder="Email" required v-model="email" />
        <input type="tel" placeholder="Phone" required v-model="tel" />
        <input type="text" placeholder="Message" v-model="message" />

        <button @click="submited = true" type="submit" class="bg-black-btn">
          Submit
        </button>
      </div>
      <div v-if="submited" class="submited">
        <p>Thank you for your interest. <br />We will connect with you soon.</p>
        <button class="bg-black-btn ok-btn" @click="$emit('closePartnerForm')">
          Ok
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      tel: "",
      message: "",
      submited: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
.gray-bck {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.692);
  backdrop-filter: blur(3px);
  z-index: 50;
}
.partner-form {
  background-color: #ffffff;
  width: 420px;
  height: 385px;
  margin: auto;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  z-index: 10;
}
div {
  height: 100%;
  position: relative;
}
p {
  max-width: 250px;
  font-size: 20px;
  line-height: 35px;
  text-align: center;
  color: #000000;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.close {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
.form-heading {
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  margin-bottom: 22px;
}
input {
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #dedede;
  padding: 6px 0;
  margin-bottom: 25px;
}

input::placeholder {
  font-weight: normal;
  font-size: 15px;
  line-height: 35px;
  color: #c4c4c4;
}
.bg-black-btn {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 5px;
}
.ok-btn {
  position: absolute;
  bottom: 1px;
}
@media (max-width: 540px) {
  .partner-form {
    width: 80vw;
  }
}
</style>