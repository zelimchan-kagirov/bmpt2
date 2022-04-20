<template>
  <main class="job-page">
    <div class="main-context container">
      <h1 class="main-header">
        Current Jobs <br />
        Opening
      </h1>
    </div>
    <Partners />
  </main>
  <section class="container">
    <h2 class="section-heading">Current jobs opening</h2>
    <hr class="gradient-hr" />
    <div class="job-info">
      <h3 class="job-title">Open position for Representative in Brazil</h3>
      <p class="important-detail">Experience: 3</p>
      <p class="important-detail">Location: Brazil</p>
      <p class="description">
        We are excited to present first online Trainers data from heart of
        Europe Vienna, Austria. We're proud to empower our project
        www.bemyprivatetraine.com in first January 2019 to connect people such
        as trainers and gym owners around the world. Every trainer deserves to
        explore his coaching skills as private or group training, and we're glad
        to see you as a part of our global BeMyPrivateTrainer project. We are
        looking to have relationships with BMPT representatives, that are based
        on commitment, cooperation, and trust worldwide stout. As an
        BeMyPrivateTrainer agent, you should have excellent verbal and
        communication skills, outstanding phone and email etiquette, effective
        negotiating skills, be results driven and persistent.
      </p>
      <ul>
        <p>Our advise :</p>
        <li>Contacting different sports communities, gyms</li>
        <li>Developing relationships with trainers/dietitian and companies</li>
        <li>Attending sports exhibitions to promote BMPT</li>
        <li>Attracting young people organizing open days</li>
        <li>Educating people, what is BeMyPrivateteTrainer</li>
        <li>We look forward to hearing from you!</li>
      </ul>
    </div>
  </section>
  <section class="apply container">
    <h2 class="section-heading">Apply Now</h2>
    <hr class="gradient-hr" />
    <form @submit.prevent class="apply-form" v-if="!submited">
      <div class="form-part">
        <div>
          <img src="../assets/img/icons/name.svg" alt="icon" class="icon" />
          <input type="text" placeholder="Name" />
        </div>
        <div>
          <img src="../assets/img/icons/phone.svg" alt="icon" class="icon" />
          <input type="tel" placeholder="Phone number" />
        </div>
        <div>
          <img src="../assets/img/icons/city.svg" alt="icon" class="icon" />
          <input type="text" placeholder="City" />
        </div>
        <div class="upload-img">
          <span v-if="!files">Attach Resume (pdf,doc,docs) </span>
          <span v-for="file in files" :key="file.index">{{ file.name }}</span>
          <img src="../assets/img/icons/resume.svg" alt="icon" class="icon" />
          <label for="upload-btn" class="upload-btn sm-black-btn">Upload</label>
          <input id="upload-btn" @change="onfileSelected" type="file" />
        </div>
      </div>
      <div class="form-part">
        <div>
          <img src="../assets/img/icons/email.svg" alt="icon" class="icon" />
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <img src="../assets/img/icons/country.svg" alt="icon" class="icon" />
          <input type="text" placeholder="Country" />
        </div>
        <div>
          <img src="../assets/img/icons/category.svg" alt="icon" class="icon" />
          <input type="text" placeholder="Category" />
        </div>
      </div>
      <input
        @click="submited = true"
        type="submit"
        class="bg-black-btn"
        value="Submit"
      />
    </form>
    <div v-if="submited" class="submited">
      <p>Thank you for your interest. We will connect with you soon.</p>
      <router-link class="toMain sm-black-btn" to="/">To Main </router-link>
    </div>
  </section>
</template>
<script>
import Partners from "@/components/Partners";
export default {
  data() {
    return {
      name: "",
      tel: "",
      city: "",
      country: "",
      files: "",
      email: "",
      category: "",
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
.job-page {
  background-image: url("../assets/img/job-page.png");
}
.job-info {
  max-width: 785px;
  color: #000000;
}
.job-title {
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  margin-bottom: 18px;
  color: #404145;
}
.important-detail {
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  color: #95979c;
}
.description {
  margin-top: 18px;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 23px;
}
.job-info ul {
  list-style: none;
  margin-bottom: 80px;
  font-size: 18px;
  line-height: 30px;
}

.job-info ul li::before {
  content: "\2022";
  color: #c4c4c4;
  margin: 0 16px 0 5px;
}
.apply-form {
  position: relative;
  display: flex;
  margin-top: 70px;
  justify-content: space-between;
  margin-bottom: 300px;
}
.form-part {
  width: 45%;
  position: relative;
  padding-left: 60px;
}
.form-part div {
  margin-bottom: 20px;
  position: relative;
}
.icon {
  margin-right: 30px;
  vertical-align: middle;
  position: absolute;
  left: -40px;
}
input {
  border: none;
  border-bottom: 1px solid #dedede;
  padding: 5px 0;
  width: 100%;
}
input::placeholder {
  font-size: 15px;
  line-height: 35px;
  color: #c4c4c4;
}
input[type="submit"] {
  position: absolute;
  bottom: -50px;
  right: 0;
  margin-top: 35px;
  padding: 15px;
}
.upload-img {
  position: relative;
  border-bottom: 1px solid #dedede;
  height: 35px;
}
.upload-img span {
  font-weight: normal;
  font-size: 15px;
  line-height: 35px;
  color: #c4c4c4;
}
input[type="file"] {
  display: none;
}
.upload-btn {
  float: right;
  transform: translateY(-12px);
  z-index: 2;
}
.submited {
  text-align: center;
  padding: 100px 0;
}
.submited p {
  font-size: 20px;
  line-height: 35px;
  max-width: 390px;
  margin: auto;
  margin-bottom: 50px;
}
.toMain {
  padding: 15px;
}
@media (max-width: 940px) {
  .apply-form {
    flex-direction: column;
  }
  .form-part {
    width: 100%;
    padding-left: 40px;
  }
  input[type="submit"] {
    bottom: -60px;
  }
}
@media (max-width: 500px) {
  .job-page {
    background-image: url("../assets/img/mob-job.png");
  }
  .job-title {
    font-size: 15px;
    line-height: 17px;
  }
  .important-detail,
  .description,
  .job-info ul {
    font-size: 12px;
    line-height: 18px;
  }
  .job-info ul li::before {
    margin: 0 7px 0 5px;
  }
  .sm-black-btn {
    max-width: 70px;
    font-size: 10px;
    line-height: 11px;
    padding: 9px;
  }
  input::placeholder,
  .upload-img span {
    font-size: 10px;
  }
  .upload-btn {
    transform: translateY(5px);
  }
}
</style>