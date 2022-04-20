<template>
  <div class="post-card">
    <button class="close">
      <img src="../assets/img/icons/close-light.svg" alt="close icon" />
    </button>
    <button class="edit-pen">
      <img src="../assets/img/icons/edit-light.svg" alt="edit icon" />
    </button>
    <div class="trainer-sign">
      <img
        src="../assets/img/all-trainers/trainer-1.jpg"
        alt="post from trainer"
        class=""
      />
    </div>
    <div class="post-img">
      <div class="dark-layer"></div>
      <img src="../assets/img/post1.jpg" alt="post picture" />
    </div>
    <div class="post-body">
      <h3 class="post-title">getting yourself fit for you!</h3>
      <p class="post-text">
        Nobody dreams of being unfit and no one wishes for it. However, most of
        us don't have that body we desire. Most people are constantly trolled by
        body shamers and they want to get in shape as soon as possible.
      </p>
      <router-link to="/bmpt-blog" class="learn-more">Learn more</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Post styles  */
.post-card {
  /* width: 30%; */
  max-width: 360px;
  border: 0.5px solid #c4c4c4;
  position: relative;
  margin-top: 30px;
}
.edit-pen {
  left: 10px;
  position: absolute;
  background-color: transparent;
  z-index: 100;
  top: 12px;
}
.close {
  right: 15px;
  position: absolute;
  background-color: transparent;
  z-index: 100;
  top: 12px;
}
.trainer-sign {
  position: absolute;
  top: 16px;
  left: 34px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: 1px solid #ffffff;
  z-index: 6;
}
.trainer-sign img {
  width: 100%;
  /* border-radius: 50%; */
}
.post-img {
  position: relative;
}
.post-img img {
  width: 100%;
  margin: auto;
}
.dark-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #000000 -61.6%, rgba(0, 0, 0, 0) 100%);
}

.post-title {
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 23px;
}
.post-body {
  padding: 25px 27px;
  text-align: center;
}
.post-text {
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 30px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; /* Number of lines displayed before it truncate */
  overflow: hidden;
}
.learn-more {
  font-weight: 700;
  font-size: 15px;
  line-height: 17px;
  color: #ffffff;
  background: #000000;
  padding: 15px 34px;
  border-radius: 5px;
}
</style>