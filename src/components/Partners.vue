<template>
  <div class="partner">
    <div class="container partner-logos">
      <a
        href="https://www.personaltrainerakademie.com/sportausbildungen-oesterreich/personal-trainer-ausbildung/"
        target="_blank"
      >
        <img src="../assets/img/partner-logo.png" alt="" />
      </a>
      <a
        href="https://www.personaltrainerakademie.com/sportausbildungen-oesterreich/personal-trainer-ausbildung/"
        target="_blank"
      >
        <img src="../assets/img/partner-logo.png" alt="" />
      </a>
      <a
        href="https://www.personaltrainerakademie.com/sportausbildungen-oesterreich/personal-trainer-ausbildung/"
        target="_blank"
      >
        <img src="../assets/img/partner-logo.png" alt="" />
      </a>
      <a
        href="https://www.personaltrainerakademie.com/sportausbildungen-oesterreich/personal-trainer-ausbildung/"
        target="_blank"
      >
        <img src="../assets/img/partner-logo.png" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.partner {
  position: absolute;
  top: 693px;
  /* top: 663px; */
  width: 100vw;
  height: 92px;
  background-color: #fafafa;
  z-index: 100;
  /* opacity: 0.4; */
}
.partner-logos {
  height: 92px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
}
.partner-logos a {
  position: relative;
  cursor: pointer;
  min-width: 120px;
  margin: 0 10px;
  z-index: 11;
}
.partner-logos img {
  width: 100%;
  margin: auto;
}
@media (max-width: 550px) {
  .partner-logos a:last-child {
    display: none;
  }
}
@media (max-width: 450px) {
  .partner {
    position: absolute;
    top: 680px;
    height: 50px;
    border-radius: 15px 15px 0 0;
  }
  .partner-logos {
    height: 50px;
  }
}
@media (max-width: 430px) {
  .partner-logos a {
    min-width: 30%;
  }
}
</style>