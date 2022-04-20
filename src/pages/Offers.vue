<template>
  <main class="offers-page">
    <div class="main-context container">
      <h1 class="main-header">Business Offer</h1>
    </div>
    <Partners />
  </main>
  <section class="container">
    <h2 class="section-heading">Business Offer</h2>
    <hr class="gradient-hr" />
    <div class="offer-content">
      <div class="left">
        <p class="bold">
          We are always ready to welcome new partnerships and cooperation from
          people, businesses and companies that are interested in what we do.
        </p>
        <p>
          Our driving principle is quality service Delivery, therefore we accept
          any offers and business ideas that will help us in servicing our
          esteemed clients. The community has registered exponential growth with
          time, therefore working with us is one step towards success.
        </p>
      </div>
      <form @submit.prevent class="partner-form">
        <div v-if="!submited">
          <input type="text" placeholder="Name" required v-model.trim="name" />
          <input
            type="email"
            placeholder="Email"
            required
            v-model.trim="email"
          />
          <input type="tel" placeholder="Phone" required v-model.trim="tel" />
          <div class="upload-file">
            <input type="text" placeholder="Message" v-model.trim="message" />
            <span v-if="!files">Attach File</span>
            <span v-for="file in files" :key="file.index">{{ file.name }}</span>
            <label for="upload-btn" class="upload-btn sm-black-btn"
              >Upload</label
            >
            <input id="upload-btn" @change="onfileSelected" type="file" />
          </div>

          <input
            @click="submited = true"
            type="submit"
            value="Submit"
            class="bg-black-btn"
          />
        </div>
        <div v-if="submited" class="submited">
          <p>
            Thank you for your interest. <br />We will connect with you soon.
          </p>
          <button class="submitted-btn">Submit</button>
        </div>
      </form>
    </div>
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
      files: "",
      submited: false,
    };
  },
  components: {
    Partners,
  },
  methods: {
    onfileSelected(e) {
      this.files = e.target.files;
    },
  },
};
</script>

<style scoped>
.offers-page {
  background-image: url("../assets/img/business.png");
}
.offer-content {
  display: flex;
  justify-content: space-between;
  margin-top: 43px;
  margin-bottom: 110px;
}
.left,
.partner-form {
  width: 45%;
}
.partner-form p {
  max-width: 250px;
  margin: auto;
  font-size: 20px;
  line-height: 35px;
  text-align: center;
  color: #000000;
  margin-bottom: 30px;
}
.left p {
  margin-bottom: 45px;
  /* font-size: 18px;
  line-height: 30px; */
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
.upload-file {
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #dedede;
  height: 35px;
}
.upload-file input {
  border-bottom: none;
  margin-bottom: 0;
}
.upload-file span {
  min-width: 70px;
  font-size: 13px;
  line-height: 20px;
  color: #c4c4c4;
  padding: 6px 0;
  margin-right: 5px;
}
input[type="file"] {
  display: none;
}
.upload-btn {
  float: right;
  /* transform: translateY(-12px); */
  z-index: 2;
}
.sm-black-btn {
  max-width: 70px;
  font-size: 10px;
  line-height: 11px;
  padding: 9px;
}
input[type="submit"] {
  width: 150px;
  margin-top: 35px;
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

@media (max-width: 960px) {
  .offer-content {
    flex-direction: column;
  }
  .left,
  .partner-form {
    width: 100%;
  }
  .left p {
    margin-bottom: 23px;
  }
  input::placeholder,
  .upload-file span {
    font-size: 12px;
    line-height: 20px;
  }
  .submited {
    margin-top: 40px;
  }
}
@media (max-width: 500px) {
  .offers-page {
    background-image: url("../assets/img/mob-offer.png");
  }
}
</style>