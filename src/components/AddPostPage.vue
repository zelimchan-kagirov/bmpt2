<template>
  <div class="create-post">
    <div class="head">
      <div>
        <h2 class="section-heading">Add Post</h2>
        <hr class="gradient-hr" />
        <span>Blog</span>
      </div>
      <button class="bg-black-btn">Close Action</button>
      <!-- <div class="social-media">
        <a href="#"> <img src="../assets/img/icons/whatsapp.svg" alt="" /></a>
        <a href="#"> <img src="../assets/img/icons/facebook.svg" alt="" /></a>
        <a href="#"> <img src="../assets/img/icons/twitter.svg" alt="" /></a>
        <a href="#"> <img src="../assets/img/icons/insta.svg" alt="" /></a>
        <a href="#"> <img src="../assets/img/icons/youtube.svg" alt="" /></a>
      </div> -->
    </div>
    <div class="body">
      <h2 class="section-heading">Heading</h2>
      <input
        class="blog-heading"
        type="text"
        v-model="blogHeading"
        placeholder="Your heading text"
      />
      <h3>Blog Content</h3>
      <textarea
        class="blog-body"
        v-model="blogBody"
        placeholder="Your blog Content text"
      ></textarea>
      <h3>Image</h3>
      <div>
        <div class="previewImg">
          <img v-if="postImg" :src="postImg" />
        </div>
        <label for="uploadImg" class="uploadImg">
          <img src="../assets/img/icons/download.svg" alt="" /> Download</label
        >
        <input id="uploadImg" type="file" @change="onFileChange" />
      </div>
      <div class="control-btn">
        <button class="save">Save</button>
        <button class="del" @click="[$emit('closeAction'), scrollUp()]">
          Close Action
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import { quillEditor, Quill } from "vue3-quill";
// import customQuillModule from "customQuillModule";
// Quill.register("modules/customQuillModule", customQuillModule);

export default {
  components: {
    // quillEditor,
  },
  data() {
    return {
      blogHeading: "",
      blogBody: "",
      postImg: null,
    };
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.postImg = URL.createObjectURL(file);
    },
    scrollUp() {
      const pageStart = document.querySelector(".wallpaper-btn");
      pageStart.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.create-post {
  width: 70%;
  margin: 90px 0;
  position: relative;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
}
.section-heading {
  font-size: 30px;
  line-height: 34px;
}
.head button {
  padding-left: 22px;
  padding-right: 22px;
}
.social-media {
  position: absolute;
  top: -32px;
  right: 0;
}
.social-media a {
  margin-left: 21px;
}
.blog-heading,
.blog-body {
  border: 1px solid #dfe1e6;
  border-radius: 5px;
  padding: 13px 29px;
  width: 100%;
  font-size: 18px;
  line-height: 25px;
}
.blog-heading::placeholder,
.blog-body::placeholder {
  font-size: 18px;
  line-height: 25px;
  color: #b8b8b8;
}
.body .section-heading {
  margin-bottom: 22px;
}
.blog-heading {
  margin-bottom: 50px;
}
.body h3 {
  font-size: 18px;
  line-height: 25px;
  color: #000000;
  margin-bottom: 22px;
}
.blog-body {
  height: 400px;
  margin-bottom: 50px;
}
.previewImg {
  background: url("../assets/img/emptyImg.png") center no-repeat;
  border-radius: 15px;
  width: 434px;
  height: 251px;
  background-color: #f8f8f8;
  overflow: hidden;
  margin-bottom: 26px;
}
.previewImg img {
  width: 100%;
  height: 100%;
}
#uploadImg {
  display: none;
}

.uploadImg {
  text-align: center;
  background: #252525;
  border-radius: 5px;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
  padding: 11px 15px;
  display: inline-block;
  margin-bottom: 43px;
  cursor: pointer;
  position: relative;
  left: 217px;
  transform: translateX(-50%);
}
.uploadImg img {
  vertical-align: middle;
}
.control-btn button {
  width: 166px;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
  padding: 13px 0;
  text-align: center;
  border-radius: 5px;
}
.control-btn {
  margin-top: 140px;
}
.save {
  background: #35a500;
  margin-right: 24px;
}
.del {
  background: #ca0000;
}
@media (max-width: 1030px) {
  .create-post {
    width: 100%;
  }
  .head .bg-black-btn {
    display: none;
  }
}
@media (max-width: 500px) {
  .head {
    margin-bottom: 50px;
  }
  .body h3 {
    font-size: 13px;
  }
  .previewImg {
    width: 100%;
  }
  .uploadImg {
    width: 100%;
    left: 0;
    transform: none;
  }
  .blog-heading::placeholder,
  .blog-body::placeholder {
    font-size: 15px;
  }
  .control-btn {
    display: flex;
  }
  .control-btn button {
    width: 100%;
  }
}
</style>