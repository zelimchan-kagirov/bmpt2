<template>
  <div class="header-bkg"></div>
  <section class="sport container">
    <ul class="sport-names">
      <span class="start-letter">A</span>
      <li>Aerobic</li>
      <li>Aikido</li>
      <li>Acrobatics</li>
      <li>Alpine climbing</li>
      <li>American football</li>
      <li>Armwresling</li>
      <li>Artistic gymnastics</li>
      <li>Aerobatics</li>
      <li>Athletics</li>
      <li>Alpine skiing</li>
      <li>Aerial silk</li>
      <span class="start-letter">b</span>
      <li>Base jumping</li>
      <li>Baseball</li>
      <li>Basketball</li>
      <li>Beach volleyball</li>
      <li>Biathlon</li>
      <li>Billiards</li>
      <li>Bodybuilding</li>
      <li>Bouldering</li>
      <li>Bowling</li>
      <li>Boxing</li>
      <li>Brazil Jiu-Jitsu</li>
      <li>Bungee jumping</li>
      <li>Bavarian curling</li>
      <span class="start-letter">c</span>
      <li>Canyoning</li>
      <li>Capoeira</li>
      <li>Cricket</li>
      <li>Crossfit</li>
      <li>Curling</li>
      <li>Caving</li>
      <li>Canoe sprint</li>
      <li>Climbing</li>
      <li>Clay pigeon shooting</li>
      <li>Conditioning Trainer</li>
      <span class="start-letter">d</span>
      <li>Darts</li>
      <li>Discus throw</li>
      <li>Downhill</li>
      <li>Diving</li>
      <span class="start-letter">f</span>
      <li>Fishing</li>
      <li>Freediving</li>
      <li>Figure skating</li>
      <li>Fencing</li>
      <li>Formula racing</li>
      <li>Freestyle skiing</li>
      <li>Free climbing</li>
      <li>Football</li>
      <li>Fitness</li>
      <li>Freeride</li>
      <li>Footgolf</li>
      <span class="start-letter">g</span>
      <li>Gatka</li>
      <li>Grappling</li>
      <li>Golf</li>
      <li>Gymnastics</li>
      <span class="start-letter">h</span>
      <li>Haganah System</li>
      <li>Hapkido</li>
      <li>High jump</li>
      <li>Hockey</li>
      <li>Hurdling</li>
      <li>Horse racing</li>
      <li>Horse riding</li>
      <span class="start-letter">i</span>
      <li>Ice hockey</li>
      <li>Ice skating</li>
      <li>Ice climbing</li>
      <span class="start-letter">j</span>
      <li>Judo</li>
      <li>Ju-Jutsu</li>
      <li>Javelin throw</li>
      <li>Jiu Jitsu</li>
      <span class="start-letter">k</span>
      <li>Krav - Maga</li>
      <li>Kyokushin Karate</li>
      <li>Karate</li>
      <li>Kendo</li>
      <li>Kickboxing</li>
      <li>Kiteboarding</li>
      <li>Kung Fu</li>
      <span class="start-letter">l</span>
      <li>Latar Do - martial arts</li>
      <li>Luge</li>
      <li>Long jump</li>
      <span class="start-letter">m</span>
      <li>Mountaineering</li>
      <li>Mixed Martial Arts</li>
      <li>Miniature golf</li>
      <li>Muay Thai</li>
      <li>Motorcycle trials</li>
      <li>Massage</li>
      <span class="start-letter">p</span>
      <li>Paragliding</li>
      <li>Paintball</li>
      <li>Parkour</li>
      <li>Pilates</li>
      <li>Pole vault</li>
      <li>Physiotherapy</li>
      <span class="start-letter">r</span>
      <li>Rafting</li>
      <li>Rally</li>
      <li>Rowing</li>
      <span class="start-letter">s</span>
      <li>Savate - martial arts</li>
      <li>Sambo</li>
      <li>Swimming</li>
      <li>Sailing</li>
      <li>Skateboarding</li>
      <li>Skydiving</li>
      <li>Ski jumping</li>
      <li>Slacklining</li>
      <li>Snowboarding</li>
      <li>Speed Flying</li>
      <li>Shooting sports</li>
      <li>Surfing</li>
      <li>Show jumping</li>
      <li>Sprinting</li>
      <li>Sumo wrestling</li>
      <li>Street Workout</li>
      <li>Self Defense Instructor</li>
      <span class="start-letter">t</span>
      <li>Track cycling</li>
      <li>Taekwondo</li>
      <li>Thai Boxing</li>
      <li>Tennis</li>
      <li>Table tennis</li>
      <span class="start-letter">v</span>
      <li>Volleyball</li>
      <span class="start-letter">w</span>
      <li>Weightlifting</li>
      <li>Wrestling</li>
      <li>Wakeboarding</li>
      <li>Windsurfing</li>
      <li>Wing Chun</li>
      <li>Water polo</li>
      <span class="start-letter">y</span>
      <li>Yoga</li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.header-bkg {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 80px;
  background-color: #000000;
}
.sport {
  padding-top: 80px;
}
.sport-names {
  list-style-type: none;
  padding: 30px 20px 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-around;
  height: 100vh;
}
.sport-names li {
  font-size: 10px;
  line-height: 20px;
  cursor: auto;
  width: fit-content;
  margin-left: 10px;
}
.start-letter {
  text-transform: capitalize;
  color: #b20303;
  margin-left: 10px;
  margin-bottom: 12px;
  font-size: 10px;
  line-height: 20px;
  width: fit-content;
}
@media (max-width: 525px) {
  .sport-names {
    height: 210vh;
    align-content: space-between;
  }
}
</style>