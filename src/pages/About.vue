<template>
  <main class="about-page">
    <div class="main-context container">
      <h1 class="main-header">About Us</h1>
    </div>
    <Partners />
  </main>
  <section class="about container">
    <h2 class="section-heading">
      <span>About</span><br />
      BeMyPrivateTrainer
    </h2>
    <hr class="gradient-hr" />
    <p>
      <span class="bold">We are an online community</span> for trainers,
      dietitians as well as members who are seeking help and guidance on
      different sports and diets. We are providing the best trainers for all
      kinds of sports, and all of them are passionate about getting the best
      results from our future members. Our certified personal trainers are among
      the most competent and knowledgeable people across the globe. We aim at
      helping to guarantee that everybody has a possibility to achieve their set
      objectives.<br />
      What is special about
      <span class="bold uppercase">BEMYPRIVATETRAINER</span> is, that we always
      have a trainer on the ground who is always ready to assist you whenever it
      is required.
    </p>
  </section>
  <section class="our-trainers container">
    <h2 class="section-heading">Top trainers</h2>
    <hr class="gradient-hr" />
    <Slider />
  </section>
  <article class="colorful-part">
    <div class="container">
      <div class="colorful-part_text">
        <h3 class="colorful-part_heading">
          Ready to get started on your goals?
        </h3>
        <router-link to="/subscription" class="white-btn">Sign Up</router-link>
      </div>
    </div>
    <!-- <ParnerForm
      v-if="partherFormVisible"
      @closePartnerForm="closePartnerForm"
    /> -->
    <img src="../assets/img/Start.png" alt="" class="runner" />
  </article>
  <section class="testimonials container">
    <h2 class="section-heading">Testimonials</h2>
    <hr class="gradient-hr" />
    <div class="testimonials-content">
      <div
        class="testimonial-card"
        v-for="testimonial in testimonials"
        :key="testimonial.id"
      >
        <img v-bind:src="testimonial.img" alt="person picture" />
        <h4 class="name">{{ testimonial.name }}</h4>
        <p class="text">{{ testimonial.text }}</p>
      </div>
    </div>
  </section>
  <section class="world">
    <div class="container">
      <h2 class="section-heading">We are all over the world</h2>
      <hr class="gradient-hr" />
    </div>
    <div class="world-pic"></div>
  </section>
</template>
<script>
import Slider from "@/components/Trainerslider";
import ParnerForm from "@/components/popup/BecomePartnerForm";
import Partners from "@/components/Partners";
export default {
  data() {
    return {
      partherFormVisible: false,
      testimonials: [
        {
          id: 1,
          name: "Matt Hudson",
          img: require("../assets/img/testimonials/t1.png"),
          text: "With BMPT I found these two important factors, which make my life easier and profitable. Great people on the excellent platform. I appreciate the opportunity to be closer to my clients who become my friends.",
        },
        {
          id: 2,
          name: "L.Ruslan",
          img: require("../assets/img/testimonials/t2.png"),
          text: "Hallo an alle Sportinhaber!Ich habe von meinem Freund über diese Website erfahren und finde es toll, dass man selbst einen Trainer aussuchen kann. Auf jeden Fall, empfehlenswert!",
        },
        {
          id: 3,
          name: "Zoki Lazic",
          img: require("../assets/img/testimonials/t3.png"),
          text: "Bemyprivatetrainer ermöglicht mehrere Sportarten auszutesten. Die Vielfalt an Trainern setzt dies sehr gut um.",
        },
        {
          id: 4,
          name: "Rene. S",
          img: require("../assets/img/testimonials/t4.png"),
          text: "I think the idea is very good, I wanted to learn capoeira for a long time :-).",
        },
      ],
    };
  },
  components: {
    Slider,
    ParnerForm,
    Partners,
  },
  methods: {
    showPartnerForm() {
      this.partherFormVisible = true;
    },
    closePartnerForm() {
      this.partherFormVisible = false;
    },
  },
};
</script>

<style scoped>
.about-page {
  background-image: url("../assets/img/about-page.png");
}
.about {
  margin-bottom: 120px;
}
.section-heading span {
  font-size: 35px;
  line-height: 40px;
}
.our-trainers {
  margin-bottom: 180px;
}
/* Colorful part */
.colorful-part {
  position: relative;
  background: radial-gradient(
    69.82% 79.51% at 79.2% 61.98%,
    rgba(95, 149, 255, 0.95) 0%,
    rgba(0, 58, 125, 0.95) 100%
  );
  height: 257px;
  margin: 120px auto;
}
.colorful-part_text {
  position: relative;
  height: 257px;
  padding: 55px 0;
  z-index: 2;
}
.colorful-part_heading {
  font-weight: 700;
  font-size: 45px;
  line-height: 52px;
  color: #ffffff;
  margin-bottom: 20px;
}

.runner {
  height: 350px;
  position: absolute;
  right: 0;
  bottom: 0;
}
/* Testimonials  */

.testimonials {
  margin-bottom: 120px;
}
.testimonials-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 40px;
}
.testimonial-card {
  width: 45%;
  margin-top: 50px;
}
.testimonial-card img {
  width: 124px;
  height: 124px;
  margin-bottom: 20px;
}
.testimonial-card .name {
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  margin-bottom: 5px;
}
.testimonial-card .text {
  font-size: 15px;
  line-height: 24px;
}
/* World section  */
.world-pic {
  height: 490px;
  background: url("../assets/img/World.png") center/cover no-repeat;
}
@media (max-width: 1070px) {
  .colorful-part_text {
    width: 75%;
  }
  .colorful-part_heading {
    font-size: 35px;
    line-height: 40px;
  }
}
@media (max-width: 710px) {
  .about {
    margin-bottom: 50px;
  }
  .colorful-part {
    height: 34vh;
    /* height: 184px; */
  }
  .colorful-part img {
    height: 47vh;
  }
  .colorful-part_heading {
    font-size: 30px;
    line-height: 35px;
  }
  .colorful-part_text {
    height: 34vh;
    padding: 20px 0;
  }
  .white-btn {
    font-size: 10px;
    line-height: 11px;
    padding: 9px 0;
    background: #ffffff;
    color: #000000;
    width: 80%;
  }
}
@media (max-width: 500px) {
  .about-page {
    background-image: url("../assets/img/mob-about.png");
  }
}
@media (max-width: 430px) {
  .our-trainers {
    margin-bottom: 50px;
  }
  .colorful-part {
    height: 100px;
    margin: 90px 0 65px;
  }
  .colorful-part_text {
    height: auto;
    padding: 10px 0;
    width: 55%;
  }
  .colorful-part_heading {
    font-size: 13px;
    line-height: 15px;
    margin-bottom: 13px;
  }
  .colorful-part img {
    height: 136px;
    width: auto;
  }
  .white-btn {
    width: 100%;
  }
  .testimonials {
    margin-bottom: 50px;
  }
  .testimonials-content {
    margin-top: 0;
  }
  .testimonial-card {
    width: 95%;
    margin-top: 35px;
    /* margin-bottom: 35px; */
  }
  .testimonial-card img {
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
  }
  .testimonial-card .name {
    font-size: 15px;
    line-height: 17px;
  }
  .testimonial-card .text {
    font-size: 10px;
    line-height: 15px;
  }
}
</style>