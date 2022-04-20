<template>
  <main class="our-trainers-page">
    <div class="main-context container">
      <div class="main-text">
        <h1 class="main-header search-header">Our Trainers</h1>
        <h2 class="main-subheader search-subheader">
          Find the perfect trainer for yourself
        </h2>
        <Search />
      </div>
    </div>
    <Partners />
  </main>
  <section class="choose-trainer container">
    <!-- Choose buttons  -->
    <div class="choose-btns">
      <button
        @click="activeSection = 'Alltrainers'"
        :class="{ clicked: activeSection === 'Alltrainers' }"
        class="choose-btn bg-black-btn"
      >
        Trainer
      </button>
      <button
        @click="activeSection = 'Alldietitian'"
        :class="{ clicked: activeSection === 'Alldietitian' }"
        class="choose-btn bg-black-btn"
      >
        Dietitian
      </button>
    </div>
    <hr class="gradient-hr" />
    <Selects />
    <p class="available-trainer"><span>1321</span> Available Trainer</p>
    <!-- Trainers or Dietitian  -->
    <Alltrainers v-if="activeSection === 'Alltrainers'" />
    <Alldietitian v-if="activeSection === 'Alldietitian'" />
  </section>
</template>
<script>
import Search from "@/components/Search";
import Alltrainers from "@/components/AllTrainers";
import Alldietitian from "@/components/AllDietitian";
import Selects from "@/components/Selects";
import Partners from "@/components/Partners";

export default {
  components: {
    Search,
    Alltrainers,
    Alldietitian,
    Selects,
    Partners,
  },
  data() {
    return {
      activeSection: "Alltrainers",
    };
  },
};
</script>

<style scoped>
.our-trainers-page {
  background-image: url("../assets/img/ourtrainers.png");
}

.main-header {
  margin-bottom: 7px;
}
.choose-btns {
  display: flex;
  flex-wrap: nowrap;
}
/* Choose trainer section  */
.available-trainer {
  font-weight: normal;
  font-size: 15px;
  line-height: 17px;
  color: #95979c;
  margin-bottom: 68px;
}
@media (max-width: 500px) {
  .our-trainers-page {
    background-image: url("../assets/img/mob-trainers.png");
  }
}
@media (max-width: 430px) {
  .available-trainer {
    margin-bottom: 34px;
  }
}
</style>