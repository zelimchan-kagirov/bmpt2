<template>
  <main class="blog-page">
    <div class="main-context container">
      <h1 class="main-header">Blog</h1>
    </div>
    <Partners />
  </main>
  <section class="container full-post">
    <h2 class="section-heading">Blog</h2>
    <hr class="gradient-hr" />
    <div class="page-content">
      <aside class="blog-page-aside">
        <p class="title">Recent Post</p>
        <router-link to="/trainer-blog">
          <div class="recent-post">
            <div class="post-info">
              <img src="../assets/img/post2.jpg" alt="post image" />
              <div>
                <h4 class="recent-post_title">Der Weg zum Kampfsport</h4>
                <p class="recent-post_date">Jul 28, 2019</p>
                <p class="recent-post_text">
                  Kampfsport ist ein komplexes Thema und es gibt viele
                  unterschiedliche Kampfsportarten.
                </p>
              </div>
            </div>
            <hr class="resent-post-hr" />
          </div>
        </router-link>
        <router-link to="/bmpt-blog">
          <div class="recent-post">
            <div class="post-info">
              <img src="../assets/img/post1.jpg" alt="post image" />
              <div>
                <h4 class="recent-post_title">getting yourself fit for you!</h4>
                <p class="recent-post_date">Jul 25, 2019</p>
                <p class="recent-post_text">
                  Kampfsport ist ein komplexes Thema und es gibt viele
                  unterschiedliche Kampfsportarten.
                </p>
              </div>
            </div>
            <hr class="resent-post-hr" />
          </div>
        </router-link>
      </aside>
      <article class="whole-post">
        <img src="../assets/img/postImg.jpg" alt="" class="post-img" />
        <p class="post-date">Nov 29, 2021</p>
        <h3 class="post-title uppercase">GETTING YOURSELF FIT FOR YOU</h3>
        <p class="post-text">
          Nobody dreams of being unfit and no one wishes for it. However, most
          of us don't have that body we desire. Most people are constantly
          trolled by body shamers and they want to get in shape as soon as
          possible. Besides, getting in shape shouldn't be because of body
          shamers, but because of your health. The changes you make to your body
          should be about you and you alone. <br />Meanwhile, eating the right
          kind of food and working out can be very difficult and tedious if
          you're doing it alone. Sometimes, you need encouragement and
          discipline; you need someone to guide you. Here's some good news, we
          have lots of friendly trainers who are more than willing to help you
          out. We care about you: your health and fitness and we have several
          trainers to help out. <br />Not only are our trainers determined to
          give you your dream body, but they are also highly knowledgeable about
          all kinds of sports. Whatever the sport may be and whatever the level
          of passion you have, training can't be neglected. Our professional
          trainers are ready to help you every step of the way. To reach maximum
          efficiency, the principles of sports training as explained by Marty
          Gaal are incorporated, which are; individuality, specificity,
          progression, overload, adaptation, recovery, and reversibility. We
          respect the fact that we all grow at different paces and we are
          willing to follow you up all the way. Our trainers understand that we
          all are different and have different capacities and our trainers
          respect that. <br />
          The specifics of your sport of choice are strictly adhered to and you
          don't have to do anything unnecessary to whatever sport it is. In
          order to improve, our trainers help you up to your game by
          intensifying the training, but they don't just intensify the training,
          they allow for adaptation. They allow you to adapt to the changes and
          not just demand tough levels from you, they patiently take you through
          the process of growth. Our trainers will indeed help you all the way!
          <br />
          Basically, our certified trainers are there for you; whatsoever sport
          it is or anything related to proper dieting. Really, everybody needs
          training at some point. In fact, great people are trained people. Now,
          how do you get to meet with your personal trainer? Well, it's easy,
          just follow the following steps; <br />1. Sign up with our website,
          www.bemyprivatetrainer.com <br />2. Login to your account and search
          for a professional trainer best for you. <br />3. Boom! You'll find a
          trainer right in whatever city you are in. Now, you have all the
          discipline you need and encouragement from our ever positive and
          skillful trainers. Growth is intentional, it doesn't happen by
          mistake. These amazing trainers are intentional about anything that
          has to do with sports, health, and fitness. When you request for them
          to be your personal trainer, they literally take it personally,
          because they care. You don't want to delay, register today. You're
          just this step close to fulfilling your dream. Nobody that trained has
          ever regretted it and you won't either! Sign up today!
        </p>
      </article>
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
/* styles can be found in full-post.scss */
</style>