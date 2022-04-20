<template>
  <Header />

  <div id="app">
    <router-view></router-view>
  </div>
  <!-- <Partners /> -->
  <Cookies />
  <Footer />
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cookies from "@/components/Cookies";
import Partners from "@/components/Partners";
export default {
  components: {
    Header,
    Footer,
    Cookies,
    Partners,
  },
};
</script>
<style>
</style>
