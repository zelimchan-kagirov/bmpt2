<template>
  <section class="member-page">
    <div class="header-bkg"></div>
    <div class="member-page_content container">
      <div class="member-info" v-if="!changeProfile">
        <img :src="memberImg" alt="member picture" class="member-img" />
        <h3 class="member-name">
          {{ trainerName }} {{ trainerSurame }}
          <span class="country-flag">
            <img src="../assets/img/icons/flags/austria.png" alt="flag icon" />
          </span>
        </h3>
        <p class="about-text" v-if="!changeAboutText">
          {{ aboutText }}
          <button class="edit-pencil" @click="changeAboutText = true">
            <img
              src="../assets/img/icons/edit-pen.svg"
              alt="icon to edit text"
            />
          </button>
        </p>
        <div class="about-text-edit" v-if="changeAboutText">
          <input
            type="text"
            class="about-text-change"
            v-model.trim="aboutText"
          />
          <button class="edit-btn" @click="changeAboutText = false">
            Save
          </button>
        </div>
        <button @click="changeProfile = true" class="edit-btn">
          Edit profile
        </button>
        <hr />
        <div class="member-personal-info">
          <p>
            <img
              src="../assets/img/icons/location-grey.svg"
              alt="location icon"
            />From
          </p>
          <p class="bold">{{ trainerCountry }} / {{ trainerCity }}</p>
        </div>
        <div class="member-personal-info">
          <p>
            <img src="../assets/img/icons/person-grey.svg" alt="icon" />Phone
            Number
          </p>
          <p class="bold">{{ trainerPhone }}</p>
        </div>
        <div class="member-personal-info">
          <p>
            <img
              src="../assets/img/icons/email-grey.svg"
              alt="emailicon"
            />Email
          </p>
          <p class="bold">{{ trainerEmail }}</p>
        </div>
        <hr />
        <button class="edit-btn">Log out</button>
      </div>
      <!-- Edit info window  -->
      <div class="member-info" v-if="changeProfile">
        <div class="memeber-pic">
          <img :src="memberImg" alt="member picture" class="member-img" />
          <label for="pictureEdit" class="edit-img">
            <img
              src="../assets/img/icons/load-img.svg"
              alt="load new picture icon"
            />
            <input id="pictureEdit" type="file" @change="onImageChange" />
          </label>
        </div>
        <p class="img-resolution-info">
          * For best resolution upload in “270*240 Pixel.”
        </p>
        <form @submit.prevent>
          <div class="inputs-box">
            <label for="tr-name"
              ><img src="../assets/img/icons/person-grey.svg" alt=""
            /></label>
            <input id="tr-name" type="text" v-model.trim="trainerName" />
          </div>
          <div class="inputs-box">
            <label for="tr-surname"
              ><img src="../assets/img/icons/person-grey.svg" alt=""
            /></label>
            <input id="tr-surname" type="text" v-model.trim="trainerSurame" />
          </div>
          <div class="inputs-box">
            <label for="tr-phone"
              ><img src="../assets/img/icons/phone-grey.svg" alt=""
            /></label>
            <input id="tr-phone" type="text" v-model.trim="trainerPhone" />
          </div>
          <div class="inputs-box">
            <label for="tr-email"
              ><img src="../assets/img/icons/email-grey.svg" alt=""
            /></label>
            <input id="tr-email" type="email" v-model.trim="trainerEmail" />
          </div>
          <div class="inputs-box">
            <label for="tr-country"
              ><img src="../assets/img/icons/location-grey.svg" alt=""
            /></label>
            <SelectCountries v-model="trainerCountry" />
          </div>
          <div class="inputs-box">
            <label for="tr-city"
              ><img src="../assets/img/icons/location-city.svg" alt=""
            /></label>
            <input id="tr-city" type="text" v-model.trim="trainerCity" />
          </div>
          <div class="form-btns">
            <button class="edit-btn" @click="changeProfile = false">
              Proceed your Profile
            </button>
            <button class="edit-btn">Reset your Profile</button>
          </div>
        </form>
        <button class="deactivate-btn" @click="deactivate()">Deactivate</button>
      </div>
      <transition name="fade">
        <Deactivation
          v-if="deactivateWindowVisible"
          @cancelDeactivation="cancelDeactivation"
        />
      </transition>
      <!-- Edit info window ends -->
      <div class="extra-info">
        <section>
          <h4 class="section-header">My Favourite List</h4>
          <div class="liked-trainers all-trainers">
            <div
              class="bkg-layer liked-profs"
              :class="{ pro: cardInfo.pro }"
              v-for="cardInfo in likedTrainers"
              :key="cardInfo.id"
            >
              <!-- Click on card to see the trainer personal page  -->
              <!-- <router-link :to="`/trainer-page/${cardInfo.id}`"> -->
              <div class="trainer-card">
                <router-link :to="`/trainer-page/${cardInfo.id}`">
                  <img
                    v-if="cardInfo.pro"
                    src="../assets/img/icons/PRO.svg"
                    alt=""
                    class="pro-icon"
                  />
                  <div class="picture">
                    <img
                      class="trainer-pic"
                      v-bind:src="cardInfo.img"
                      alt="trainer"
                    />
                  </div>
                  <div class="info">
                    <p class="name">
                      {{ cardInfo.name
                      }}<span
                        ><img v-bind:src="cardInfo.flag" alt="coutry flag"
                      /></span>
                    </p>
                    <p>
                      Country
                      <span class="personal-info"
                        >({{ cardInfo.country }})</span
                      >
                    </p>
                    <p>
                      City
                      <span class="personal-info">({{ cardInfo.city }})</span>
                    </p>
                    <p>
                      Category
                      <span class="personal-info"
                        >({{ cardInfo.category }})</span
                      >
                    </p>
                    <p>
                      Type
                      <span class="personal-info">({{ cardInfo.type }})</span>
                    </p>
                    <div class="rating">
                      <img
                        @click="giveRate()"
                        src="../assets/img/icons/start.svg"
                        alt="raiting star"
                        class="star"
                      /><span class="raiting-number">{{ cardInfo.rating }}</span
                      ><span>(1k +)</span>
                      <!-- if there is NO live training show this img  -->
                      <img
                        v-if="!cardInfo.liveTraining"
                        class="live-training"
                        src="../assets/img/icons/no-live.svg"
                        alt=""
                      />
                      <!-- if there is live training show this img  -->
                      <img
                        v-else
                        class="live-training"
                        src="../assets/img/icons/live.svg"
                        alt=""
                      />
                      <div class="training-window">
                        <div class="training-message">
                          <p v-if="!cardInfo.liveTraining">
                            The coach does not conduct Life Training
                          </p>
                          <p v-if="cardInfo.liveTraining">
                            The coach conducts Life Training
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr v-if="!cardInfo.pro" class="card-hr" />
                  <hr v-else class="pro-hr" />
                </router-link>
                <div class="like-price">
                  <img
                    @click="cardInfo.liked = !cardInfo.liked"
                    v-if="!cardInfo.liked"
                    class="like"
                    src="../assets/img/icons/grey-heart.svg"
                    alt="like"
                  />
                  <img
                    @click="cardInfo.liked = !cardInfo.liked"
                    v-if="cardInfo.liked"
                    class="like"
                    src="../assets/img/icons/like-red.svg"
                    alt="like"
                  />
                  <p>
                    Starting At
                    <span class="bold">{{ cardInfo.cost }} / Hr.</span>
                  </p>
                </div>
              </div>
              <!-- </router-link> -->
              <!-- ------- -->
            </div>
          </div>
        </section>
        <!-- Reviews  -->
        <section>
          <h4 class="section-header">My Reviews</h4>
          <div class="reviwed-trainers">
            <div class="reviwed-trainers_pic">
              <img
                src="../assets/img/all-trainers/trainer-1.jpg"
                alt="trainer picture"
              />

              <div class="rate">
                <img
                  src="../assets/img/icons/start.svg"
                  alt="raiting star"
                  class="star"
                /><span class="raiting-number">4.9</span>
                <span>(1k +)</span>
              </div>
            </div>
            <div class="details">
              <div class="review-detail">
                <h6 class="review-heading">Trainer Name</h6>
                <p>Mansur Dzhamaldinov</p>
              </div>
              <div class="review-detail">
                <h6 class="review-heading">Category</h6>
                <p>Grappling</p>
              </div>
              <div class="review-detail">
                <h6 class="review-heading">Rating</h6>
                <p>5</p>
              </div>
              <div class="review-detail">
                <h6 class="review-heading">Reviews</h6>
                <p>One of my favorite trainers!</p>
              </div>
            </div>
            <button class="delete-btn">
              <img src="../assets/img/icons/trash.svg" alt="trash icon" />
            </button>
          </div>
        </section>
        <!-- ------ -->
      </div>
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";
import SelectCountries from "@/components/SelectCountries";
import Deactivation from "@/components/popup/Deactivate-window";
export default {
  components: { SelectCountries, Deactivation },
  data() {
    const store = useStore();
    return {
      deactivateWindowVisible: false,
      changeAboutText: false,
      changeProfile: false,
      memberImg: require("../assets/img/member-img.jpg"),
      trainerName: "Max",
      trainerSurame: "Mustermann",
      trainerPhone: "42 567 492 75 84",
      trainerEmail: "Maugli870@gmail.com",
      trainerCountry: "Austria",
      trainerCity: "Vienna",
      aboutText:
        " I am looking for a personal fitness trainer, write to direct",
    };
  },
  computed: {
    likedTrainers() {
      return this.$store.getters["getLiked"];
    },
  },
  methods: {
    onImageChange(e) {
      const file = e.target.files[0];
      this.memberImg = URL.createObjectURL(file);
    },
    deactivate() {
      this.deactivateWindowVisible = true;
    },
    cancelDeactivation() {
      this.deactivateWindowVisible = false;
    },
  },
};
</script>

<style scoped>
.member-page {
  background: #e5e5e5;
  padding-top: 200px;
}
.header-bkg {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 80px;
  background-color: #000000;
}
.member-page_content {
  display: flex;
  justify-content: space-between;
  padding-bottom: 120px;
}
.member-info {
  position: relative;
  width: 264px;
  padding: 45px 10px 22px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  text-align: center;
  align-self: flex-start;
}
.member-img {
  border-radius: 50%;
  width: 133px;
  height: 133px;
  margin-bottom: 9px;
}
.member-name {
  font-size: 20px;
  line-height: 35px;
}
.about-text {
  font-size: 10px;
  line-height: 15px;
  text-align: left;
  color: #95979c;
  padding: 0 25px;
  margin-bottom: 5px;
}
.edit-pencil {
  background-color: transparent;
  margin-left: 5px;
}
.about-text-edit {
  margin-bottom: 15px;
}
.about-text-edit input {
  border: none;
  border-bottom: 1px solid #dedede;
  padding: 7px;
  margin-bottom: 10px;
  width: 100%;
  color: #c4c4c4;
}
.edit-btn {
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background-color: #ffffff;
  width: 100%;
  color: #c4c4c4;
  font-size: 10px;
  line-height: 35px;
}

hr {
  margin: 15px 0;
  background-color: #dedede;
  border: none;
  height: 1px;
}
.member-personal-info {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  line-height: 25px;
  align-items: center;
}
.member-personal-info p:first-child {
  display: flex;
}
.member-personal-info img {
  width: 13px;
  margin-right: 11px;
  object-fit: none;
}
/* Edit info window  */
.memeber-pic {
  position: relative;
  width: 133px;
  height: 133px;
  margin: auto;
}
.edit-img {
  cursor: pointer;
  position: absolute;
  background-color: transparent;
  bottom: 0;
  right: 11px;
}
#pictureEdit {
  display: none;
}
.img-resolution-info {
  font-weight: bold;
  font-size: 10px;
  line-height: 25px;
  color: #000000;
}
.inputs-box {
  display: flex;
  border-bottom: 1px solid #dedede;
  align-items: center;
  padding: 7px;
}
.inputs-box label {
  margin-right: 12px;
}
.inputs-box input,
.inputs-box select {
  background-color: none;
  -webkit-appearance: none;
  border: none;
  font-size: 10px;
  line-height: 25px;
  flex-grow: 1;
}
.form-btns {
  display: flex;
  margin-top: 37px;
}
.form-btns button:first-child {
  margin-right: 3px;
}
.deactivate-btn {
  position: absolute;
  background: #b20303;
  border-radius: 5px;
  width: 100%;
  left: 0;
  bottom: -52px;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  padding: 12px;
  color: #ffffff;
}
/* Extra info section  */
.extra-info {
  width: 74%;
}
.section-header {
  background: #ffffff;
  border: 1px solid #dddddd;
  font-size: 20px;
  line-height: 35px;
  padding: 14px 37px;
}
.liked-trainers {
  margin: 21px 0;
}
/* Reviewed trainers  */
.reviwed-trainers {
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 17px 0;
}
.details {
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
}
.reviwed-trainers_pic {
  display: flex;
  flex-direction: column;
}
.reviwed-trainers_pic > img {
  width: 73px;
  height: 73px;
  border-radius: 50%;
  margin-bottom: 7px;
}
.rate {
  display: flex;
  align-items: center;
  font-size: 15px;
  line-height: 17px;
  color: #c4c4c4;
}
.review-detail {
  max-width: 100px;
}
.review-heading {
  font-size: 13px;
  line-height: 18px;
  color: #404145;
  margin-bottom: 10px;
}
.review-heading ~ p {
  font-size: 13px;
  line-height: 18px;
}
.delete-btn {
  background-color: transparent;
  align-self: center;
}

@media (max-width: 910px) {
  .member-page {
    background: rgb(255, 255, 255);
    padding-top: 150px;
  }
  .member-page_content {
    flex-direction: column;
  }
  .member-info,
  .extra-info {
    border: none;
    width: 100%;
  }
  .about-text {
    text-align: center;
    padding: 0;
  }
  .section-header {
    border: none;
    text-align: center;
  }
  .reviwed-trainers {
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
  .reviwed-trainers > div {
    width: 100%;
    margin-bottom: 35px;
  }
  .reviwed-trainers_pic {
    align-items: center;
  }
}
@media (max-width: 430px) {
  .member-page_content {
    padding-bottom: 50px;
  }
  .details {
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .reviwed-trainers > div {
    margin-bottom: 15px;
  }
  .review-detail {
    min-width: 45%;
    margin-bottom: 20px;
  }
  .review-heading {
    margin-bottom: 5px;
  }
}
</style>