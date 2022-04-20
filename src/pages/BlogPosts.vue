<template>
  <main class="blog-page">
    <div class="main-context container">
      <h1 class="main-header">Blog</h1>
    </div>
    <Partners />
  </main>
  <section class="blog-posts container">
    <h2 class="section-heading">Blog</h2>
    <hr class="gradient-hr" />
    <div class="all-posts">
      <div class="post-card">
        <span class="post-date">25 July</span>
        <div class="post-img">
          <div class="dark-layer"></div>
          <img src="../assets/img/post1.jpg" alt="post picture" />
        </div>
        <div class="post-body">
          <h3 class="post-title">getting yourself fit for you!</h3>
          <p class="post-text">
            Nobody dreams of being unfit and no one wishes for it. However, most
            of us don't have that body we desire. Most people are constantly
            trolled by body shamers and they want to get in shape as soon as
            possible.
          </p>
          <router-link to="/bmpt-blog" class="learn-more bg-black-btn"
            >Learn more</router-link
          >
        </div>
      </div>
      <div class="post-card">
        <span class="post-date">28 July</span>
        <div class="trainer-sign">
          <img
            src="../assets/img/all-trainers/trainer-1.jpg"
            alt="post from trainer"
            class=""
          />
        </div>
        <div class="post-img">
          <div class="dark-layer"></div>
          <img src="../assets/img/post2.jpg" alt="post picture" />
        </div>
        <div class="post-body">
          <h3 class="post-title">Der Weg zum Kampfsport!</h3>
          <p class="post-text">
            Nobody dreams of being unfit and no one wishes for it. However, most
            of us don't have that body we desire. Most people are constantly
            trolled by body shamers and they want to get in shape as soon as
            possible.
          </p>
          <router-link to="/trainer-blog" class="learn-more bg-black-btn"
            >Learn more</router-link
          >
        </div>
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
.blog-page {
  background-image: url("../assets/img/blog-page.png");
}
/* Post card */
.all-posts {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
.post-card {
  width: 30%;
  max-width: 360px;
  min-width: 160px;
  border: 0.5px solid #c4c4c4;
  position: relative;
  margin-right: 30px;
  margin-bottom: 30px;
}
.post-card:last-child {
  margin-right: 0;
}
.post-date {
  font-size: 15px;
  line-height: 17px;
  color: #ffffff;
  position: absolute;
  top: 16px;
  right: 20px;
  z-index: 6;
}
.trainer-sign {
  position: absolute;
  top: 16px;
  left: 20px;
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
.dark-layer {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #000000 -61.6%, rgba(0, 0, 0, 0) 100%);
}
.post-img img {
  width: 100%;
  margin: auto;
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
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
@media (max-width: 1024px) {
  .post-body {
    padding: 10px;
  }
}

@media (max-width: 500px) {
  .blog-page {
    background-image: url("../assets/img/mob-blog.png");
  }
  .all-posts {
    justify-content: center;
  }
  .post-card {
    width: 45%;
    margin-right: 10px;
  }
  .post-date {
    font-size: 8px;
    line-height: 9px;
    top: 7px;
    right: 9px;
  }
  .trainer-sign {
    width: 22px;
    height: 22px;
    top: 7px;
    right: 9px;
  }
  .post-title {
    font-size: 13px;
    line-height: 16px;
    margin-bottom: 10px;
  }
  .post-text {
    font-size: 10px;
    line-height: 10px;
    margin-bottom: 9px;
  }
}
</style>