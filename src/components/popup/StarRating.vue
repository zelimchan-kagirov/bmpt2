<template>
  <div class="gray-bck">
    <div class="rate-window">
      <img
        @click="$emit('closeRatingForm')"
        class="close"
        src="../../assets/img/icons/close-grey.svg"
        alt="close"
      />
      <h2 class="window-heading">Reviews</h2>
      <div class="feedbacks-list">
        <div
          class="all-feedbacks"
          v-for="feedback in feedbacks"
          :key="feedback"
        >
          <div class="feedbacks">
            <div class="info">
              <div class="trainer-name">{{ feedback.trainerName }}</div>
              <div class="feedback-text">{{ feedback.feedbackText }}</div>
            </div>
            <div class="rainting-stars">
              <star-rating
                :rating="feedback.rating"
                :read-only="true"
                :increment="0.1"
                :star-size="20"
                :show-rating="false"
                :rounded-corners="true"
                :border-width="1"
                :star-points="[
                  23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34,
                  46, 19, 31, 17,
                ]"
                inactive-color=" #FFFFFF"
                active-color="#FECD2D"
                border-color="#FECD2D"
              ></star-rating>
            </div>
          </div>
        </div>
      </div>
      <div class="control-btns" v-if="!leaveFeedback">
        <button class="control-btn" @click="leaveFeedback = true">
          give feedback
        </button>
        <button class="control-btn" @click="$emit('closeRatingForm')">
          close
        </button>
      </div>
      <div class="newFeddback" v-if="leaveFeedback">
        <div class="textarea">
          <input
            type="text"
            v-bind:value="trainerName"
            @input="trainerName = $event.target.value"
            placeholder="Name Last Name"
          />
          <textarea
            type="text"
            v-bind:value="feedbackText"
            @input="feedbackText = $event.target.value"
            placeholder="Test text Reviews"
          />
        </div>
        <div class="giveRating">
          <div class="yourMark">
            <span>your mark:</span>
            <star-rating
              v-model:rating="rating"
              :increment="0.1"
              :star-size="20"
              :show-rating="false"
              :rounded-corners="true"
              :border-width="1"
              :star-points="[
                23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34, 46,
                19, 31, 17,
              ]"
              inactive-color=" #FFFFFF"
              active-color="#FECD2D"
              border-color="#FECD2D"
            ></star-rating>
          </div>
          <input
            class="control-btn"
            type="submit"
            value="submit"
            @click="[createFeedback(), (leaveFeedback = false)]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script >
// Stars
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating,
  },
  data() {
    return {
      leaveFeedback: false,
      feedbacks: [
        {
          id: 1,
          trainerName: "Max Mustermann",
          feedbackText: "one of my favorite trainers! ",
          rating: "4.5",
        },
        {
          id: 2,
          trainerName: "Jane Doe",
          feedbackText: "the best! ",
          rating: "5",
        },
        // {
        //   id: 3,
        //   trainerName: "Jane Doe",
        //   feedbackText: "the best! ",
        //   rating: "5",
        // },
        // {
        //   id: 4,
        //   trainerName: "Jane Doe",
        //   feedbackText:
        //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsum ipsa consectetur repellat reiciendis iusto quam eos, facere quidem consequatur.! ",
        //   rating: "5",
        // },
        // {
        //   id: 5,
        //   trainerName: "Jane Doe",
        //   feedbackText: "the best! ",
        //   rating: "5",
        // },
        // {
        //   id: 5,
        //   trainerName: "Jane Doe",
        //   feedbackText:
        //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsum ipsa consectetur repellat reiciendis iusto quam eos, facere quidem consequatur.! ",
        //   rating: "5",
        // },
      ],
      trainerName: "",
      feedbackText: "",
      rating: "",
    };
  },
  methods: {
    createFeedback() {
      const newFeedback = {
        id: Date.now(),
        trainerName: this.trainerName,
        feedbackText: this.feedbackText,
        rating: this.rating,
      };
      this.feedbacks.push(newFeedback);
      this.trainerName = "";
      this.feedbackText = "";
      this.rating = "";
    },
  },
};
</script>

<style scoped>
.gray-bck {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.692);
  backdrop-filter: blur(3px);
  z-index: 50;
}
.rate-window {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: #ffffff;
  border-radius: 5px;
  width: 558px;
  padding: 23px 33px;
}
.close {
  position: absolute;
  right: 33px;
  cursor: pointer;
}
.window-heading {
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  color: #000000;
  margin-bottom: 32px;
}
.feedbacks-list {
  max-height: 36vh;
  overflow: scroll;
}
.feedbacks {
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
}
.info {
  text-align: left;
  font-size: 15px;
  line-height: 17px;
  color: #000000;
  padding: 0;
}
.trainer-name {
  font-weight: bold;
  margin-bottom: 8px;
}
.feedback-text {
  margin-right: 10px;
}
.rainting-stars {
  align-self: flex-end;
}
.control-btns {
  display: flex;
  justify-content: space-between;
}
.control-btn {
  background: #171717;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
  line-height: 17px;
  padding: 15px 45px;
  color: #ffffff;
  border: none;
  cursor: pointer;
}
.textarea {
  background: #f9f9f9;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding: 13px;
  height: 245px;
}
.textarea input,
.textarea textarea {
  display: block;
  width: 100%;
  border: none;
  background-color: transparent;
  font-size: 15px;
  line-height: 17px;
}
.textarea input {
  margin-bottom: 15px;
  font-weight: bold;
  color: #000000;
}
.textarea textarea {
  height: 85%;
}
.giveRating {
  margin-top: 17px;
  display: flex;
  justify-content: space-between;
}
.yourMark {
  display: flex;
  align-items: center;
}
.yourMark span {
  font-size: 15px;
  line-height: 17px;
  color: #aeaeae;
  margin-right: 13px;
}
@media (max-width: 600px) {
  .rate-window {
    width: 90%;
    padding: 15px;
  }
}
@media (max-width: 430px) {
  .control-btn {
    font-size: 13px;
    line-height: 17px;
    padding: 10px 25px;
  }
  .rate-window {
    padding: 15px 9px;
  }
}
</style>