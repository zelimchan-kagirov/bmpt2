<template>
  <main class="contact-page">
    <div class="main-context container">
      <div class="main-text">
        <h1 class="main-header">Contact Us</h1>
        <h2 class="main-subheader">Get In touch</h2>
      </div>
    </div>
    <Partners />
  </main>
  <section>
    <form @submit.prevent class="partner-form">
      <div v-if="!submited">
        <input type="text" placeholder="Name" required v-model.trim="name" />
        <input type="email" placeholder="Email" required v-model="email" />
        <input type="tel" placeholder="Phone" required v-model="tel" />
        <input type="text" placeholder="Message" v-model="message" />
        <input
          @click="submited = true"
          type="submit"
          value="Submit"
          class="bg-black-btn"
        />
      </div>
      <div v-if="submited" class="submited">
        <p>Thank you for your interest. <br />We will connect with you soon.</p>
        <button class="submitted-btn">Submit</button>
      </div>
    </form>
  </section>
</template>

<script>
import Partners from "@/components/Partners";
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
  components: {
    Partners,
  },
};
</script>

<style scoped>
.contact-page {
  background-image: url("../assets/img/contacts.png");
}

.main-header {
  margin-bottom: 7px;
}
.partner-form {
  width: 560px;
  margin: auto;
  margin-bottom: 100px;
  box-shadow: 0px 0px 24px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 50px 100px;
}
p {
  max-width: 250px;
  margin: auto;
  font-size: 20px;
  line-height: 35px;
  text-align: center;
  color: #000000;
  margin-bottom: 30px;
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
input[type="submit"] {
  width: 150px;
  margin: auto;
  padding: 15px;
  cursor: pointer;
}
.submitted-btn {
  background: #d6d6d6;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #ffffff;
  width: 150px;
  border: none;
  cursor: none;
  font-weight: bold;
  font-size: 15px;
  line-height: 17px;
  padding: 15px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
@media (max-width: 650px) {
  .partner-form {
    padding: 0;
    box-shadow: none;
    width: 420px;
  }
}
@media (max-width: 500px) {
  .contact-page {
    background-image: url("../assets/img/mob-contact.png");
  }
}
@media (max-width: 460px) {
  .partner-form {
    width: 90%;
    margin-bottom: 50px;
  }
}
</style>