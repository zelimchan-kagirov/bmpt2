<template>
  <div class="select-part">
    <div class="select-settings">
      <div class="countries-box">
        <div class="labels">
          <p>Select country</p>
          <p>Select city</p>
        </div>
        <countriesCities
          @country="selectedCountry = $event"
          @city="selectedCity = $event"
        />
      </div>
      <div class="sort-box">
        <p>Category</p>
        <vue-select
          :options="category"
          placeholder=""
          class="category"
          v-model="selectedcategory"
        >
        </vue-select>
      </div>
      <div class="sort-box range">
        <div>
          <p>From</p>
          <vue-select :options="from" placeholder="" class="from"> </vue-select>
        </div>
        <div>
          <p>To</p>
          <vue-select :options="to" placeholder="" class="to"> </vue-select>
        </div>
      </div>
      <button class="sm-black-btn">Search</button>
    </div>
    <div class="sort-option">
      <div class="sort-box">
        <p>Sort by</p>
        <vue-select :options="sort" placeholder="" class="category">
        </vue-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCountry: "",
      selectedCity: "",
      selectedcategory: "",
      category: [
        "Aerobic",
        "Aikido",
        "Acrobatics",
        "Alpine climbing",
        "American football",
        "Armwresling",
        "Artistic gymnastics",
        "Aerobatics",
        "Athletics",
        "Alpine skiing",
        "Aerial silk",
        "Base jumping",
        "Baseball",
        "Basketball",
        "Beach volleyball",
        "Biathlon",
        "Billiards",
        "Bodybuilding",
        "Bouldering",
        "Bowling",
        "Boxing",
        "Brazil Jiu-Jitsu",
        "Bungee jumping",
        "Bavarian curling",
        "Canyoning",
        "Capoeira",
        "Cricket",
        "Crossfit",
        "Curling",
        "Caving",
        "Canoe sprint",
        "Climbing",
        "Clay pigeon shooting",
        "Conditioning Trainer",
        "Darts",
        "Discus throw",
        "Downhill",
        "Diving",
        "Fishing",
        "Freediving",
        "Figure skating",
        "Fencing",
        "Formula racing",
        "Freestyle skiing",
        "Free climbing",
        "Football",
        "Fitness",
        "Freeride",
        "Footgolf",
        "Gatka",
        "Grappling",
        "Golf",
        "Gymnastics",
        "Haganah System",
        "Hapkido",
        "High jump",
        "Hockey",
        "Hurdling",
        "Horse racing",
        "Horse riding",
        "Ice hockey",
        "Ice skating",
        "Ice climbing",
        "Judo",
        "Ju-Jutsu",
        "Javelin throw",
        "Jiu Jitsu",
        "Krav - Maga",
        "Kyokushin Karate",
        "Karate",
        "Kendo",
        "Kickboxing",
        "Kiteboarding",
        "Kung Fu",
        "Latar Do - martial arts",
        "Luge",
        "Long jump",
        "Mountaineering",
        "Mixed Martial Arts",
        "Miniature golf",
        "Muay Thai",
        "Motorcycle trials",
        "Massage",
        "Paragliding",
        "Paintball",
        "Parkour",
        "Pilates",
        "Pole vault",
        "Physiotherapy",
        "Rafting",
        "Rally",
        "Rowing",
        "Savate - martial arts",
        "Sambo",
        "Swimming",
        "Sailing",
        "Skateboarding",
        "Skydiving",
        "Ski jumping",
        "Slacklining",
        "Snowboarding",
        "Speed Flying",
        "Shooting sports",
        "Surfing",
        "Show jumping",
        "Sprinting",
        "Sumo wrestling",
        "Street Workout",
        "Self Defense Instructor",
        "Track cycling",
        "Taekwondo",
        "Thai Boxing",
        "Tennis",
        "Table tennis",
        "Volleyball",
        "Weightlifting",
        "Wrestling",
        "Wakeboarding",
        "Windsurfing",
        "Wing Chun",
        "Water polo",
        "Yoga",
      ],
      from: [5, 10, 15, 20],
      to: [15, 30, 44, 60],
      sort: ["Low to high", "High to low"],
    };
  },
  methods: {},
};
</script>

<style scoped>
button {
  height: 40px;
  align-self: flex-end;
  padding: 0 25px;
  margin-top: 10px;
}
.sort-box,
.countries-box {
  margin-top: 10px;
}
</style>
