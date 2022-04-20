<template>
  <main class="jobs-page">
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
    <p class="description">
      We are always looking for talented and motivated people to join our
      journey. If you have a passion for sports, wellness, and health, we would
      be happy to hear from you. Learn all about the current positions and the
      team.
    </p>
    <div class="jobs-cards">
      <div class="card">
        <img src="../assets/img/job-offer.jpg" alt="job image" />
        <p>Open position for Representative in Brazil</p>
        <router-link to="/job" class="apply">Apply Now</router-link>
      </div>
      <div class="card">
        <img src="../assets/img/job-offer.jpg" alt="job image" />
        <p>Open position for Representative in Brazil</p>
        <router-link to="/job" class="apply">Apply Now</router-link>
      </div>
      <div class="card">
        <img src="../assets/img/job-offer.jpg" alt="job image" />
        <p>Open position for Representative in Brazil</p>
        <router-link to="/job" class="apply">Apply Now</router-link>
      </div>
      <div class="card">
        <img src="../assets/img/job-offer.jpg" alt="job image" />
        <p>Open position for Representative in Brazil</p>
        <router-link to="/job" class="apply">Apply Now</router-link>
      </div>
    </div>
  </section>
</template>
<script>
import Partners from "@/components/Partners";

export default {
  components: {
    Partners,
  },
};
</script>

<style scoped>
.jobs-page {
  background-image: url("../assets/img/jobs.png");
}
.description {
  max-width: 50%;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 70px;
}
.jobs-cards {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 170px;
}
.card {
  width: 264px;
  min-width: 162px;
  text-align: center;
  margin-right: 15px;
  margin-bottom: 20px;
}
.card img {
  border-radius: 5px;
  width: 100%;
  margin: auto;
}
.card p {
  padding: 15px;
  margin-bottom: 20px;
}
.apply {
  padding: 15px 32px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  display: inline-block;
  color: #ffffff;
  background: #252525;
  font-size: 15px;
  line-height: 17px;
}
@media (max-width: 500px) {
  .jobs-page {
    background-image: url("../assets/img/mob-jobs.png");
  }
  .description {
    max-width: 100%;
    font-size: 12px;
    line-height: 18px;
  }
  .jobs-cards {
    justify-content: space-between;
  }
  .card {
    width: 47%;
    margin-right: 0;
  }
} ;
</style>