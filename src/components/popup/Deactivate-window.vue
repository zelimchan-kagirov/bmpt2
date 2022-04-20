<template>
  <div class="gray-bck">
    <div class="question-window">
      <img
        @click="$emit('cancelDeactivation')"
        class="close"
        src="../../assets/img/icons/close-grey.svg"
        alt="close"
      />
      <h4 class="form-heading">Are you sure?</h4>
      <p class="warning-message">
        After deactivation all your personal data will be deleted.
      </p>
      <div class="btn-box">
        <button class="sm-black-btn" @click="$emit('cancelDeactivation')">
          Cancel
        </button>
        <router-link
          to="/"
          @click="deactivate = true"
          class="sm-black-btn deactivate"
          >I'm sure</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deactivate: false,
    };
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
.question-window {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: #ffffff;
  border-radius: 5px;
  width: 300px;
  padding: 23px;
}
.close {
  position: absolute;
  right: 23px;
  cursor: pointer;
}
.form-heading {
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  margin-bottom: 22px;
}
.warning-message {
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  color: #c4c4c4;
  margin-bottom: 22px;
}
.btn-box {
  display: flex;
  justify-content: space-between;
}
.btn-box .sm-black-btn {
  width: 100% !important;
}
.btn-box .sm-black-btn:first-child {
  margin-right: 23px;
}
.deactivate {
  background: #b20303;
}
</style>