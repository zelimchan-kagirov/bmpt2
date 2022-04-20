<template>
  <main class="our-trainers-page">
    <div class="main-context container">
      <div class="main-text">
        <h1 class="main-header search-header">
          <span class="uppercase">PRO</span> Trainers
        </h1>
        <h2 class="main-subheader search-subheader">
          Here are the most top trenners in the world
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
        @click="activeSection = 'Protrainers'"
        :class="{ clicked: activeSection === 'Protrainers' }"
        class="choose-btn bg-black-btn"
      >
        Trainer
      </button>
      <button
        @click="activeSection = 'Prodietitian'"
        :class="{ clicked: activeSection === 'Prodietitian' }"
        class="choose-btn bg-black-btn"
      >
        Dietitian
      </button>
    </div>
    <hr class="gradient-hr" />
    <Selects />
    <p class="available-trainer"><span>1321</span> Available Trainer</p>
    <!-- Trainers or Dietitian  -->
    <Protrainers v-if="activeSection === 'Protrainers'" />
    <Prodietitian v-if="activeSection === 'Prodietitian'" />
  </section>
</template>
<script>
import Search from "@/components/Search";
import Protrainers from "@/components/ProTrainers";
import Prodietitian from "@/components/ProDietitian";
import Selects from "@/components/Selects";
import Partners from "@/components/Partners";

export default {
  components: {
    Search,
    Protrainers,
    Prodietitian,
    Selects,
    Partners,
  },
  data() {
    return {
      activeSection: "Protrainers",
    };
  },
  // methods: {
  //   logger(value) {
  //     console.log(value.code);
  //   },
  // },
};
</script>

<style scoped>
.our-trainers-page {
  background-image: url("../assets/img/pro.png");
}

.main-header {
  margin-bottom: 7px;
}
.main-search {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  height: 50px;
  margin-bottom: 32px;
}

.main-search div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  border-radius: 5px 0px 0px 5px;
  border: 1px solid #dddddd;
}

.main-search div span {
  padding-left: 20px;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
}

.main-search div input[type="text"] {
  border: none;
  padding: 0 16px;
  font-size: 15px;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.main-search div input[type="text"]:focus {
  outline: none;
}
.main-search input[type="submit"] {
  background-color: #171717;
  color: #ffffff;
  font-weight: 700;
  font-size: 15px;
  line-height: 17px;
  cursor: pointer;
  padding: 15px 25px;
  border: none;
  border-radius: 0px 5px 5px 0px;
}

.popular {
  width: 70%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 15px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.popular-options {
  border: 1px solid #ffffff;
  border-radius: 50px;
  padding: 2px 16px;
}
/* Choose trainer section  */
.choose-btns {
  display: flex;
  flex-wrap: nowrap;
}
.available-trainer {
  font-weight: normal;
  font-size: 15px;
  line-height: 17px;
  color: #95979c;
  margin-bottom: 68px;
}
@media (max-width: 500px) {
  .our-trainers-page {
    background-image: url("../assets/img/mob-pro.png");
  }
}
</style>