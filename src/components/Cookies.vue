<template>
  <div class="cookies" v-if="agreed === false">
    <p class="cookie-text">
      This website uses cookies to ensure you get the best experience on our
      website.
      <router-link to="/impressum" class="cookie-link">More info</router-link>
    </p>
    <button @click="agreed = true" class="cookie-btn">I agree</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      agreed: false,
    };
  },
};
</script>

<style scoped>
.cookies {
  width: 100vw;
  /* height: 40px; */
  position: fixed;
  bottom: 0;
  padding: 11px 14px;
  background-color: #ffffff;
  z-index: 100;
}
.cookie-text {
  text-align: center;
  width: fit-content;
  margin: auto;
  padding: 0 120px;
  font-size: 15px;
  line-height: 20px;
}
.cookie-link {
  color: #5f95ff;
}
.cookie-btn {
  position: absolute;
  background: #fed42d;
  border-radius: 5px;
  color: #000000;
  right: 15px;
  bottom: 50%;
  transform: translateY(50%);
  font-size: 15px;
  line-height: 20px;
  padding: 4px 23px;
}
@media (max-width: 580px) {
  .cookie-text {
    padding: 0 120px 0 0;
    text-align: left;
    /* margin: none; */
    font-size: 12px;
    line-height: 18px;
  }
}
</style>