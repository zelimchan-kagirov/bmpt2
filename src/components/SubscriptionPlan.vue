<template>
  <section class="subscription">
    <div class="head">
      <div>
        <h2 class="section-heading">Subscription Plan</h2>
        <hr class="gradient-hr" />
      </div>
      <button class="sm-black-btn" @click="$emit('backToPrevious')">
        Back
      </button>
      <!-- <div class="social-media">
        <a href="#"> <img src="../assets/img/icons/whatsapp.svg" alt="" /></a>
        <a href="#"> <img src="../assets/img/icons/facebook.svg" alt="" /></a>
        <a href="#"> <img src="../assets/img/icons/twitter.svg" alt="" /></a>
        <a href="#"> <img src="../assets/img/icons/insta.svg" alt="" /></a>
        <a href="#"> <img src="../assets/img/icons/youtube.svg" alt="" /></a>
      </div> -->
    </div>
    <div class="subscription-body">
      <div class="sub-info">
        <div class="info-box">
          <p class="bold">Plan Name</p>
          <p>Trainer</p>
        </div>
        <div class="info-box">
          <p class="bold">Amount</p>
          <p>€ 9.99 / Mo</p>
          <button class="sm-black-btn edit-sub m-hide">Edit</button>
        </div>
        <!-- Ask how it suppose to work ?  -->

        <!-- <div class="info-box">
          <p class="bold">Amount</p>
          <p>€ 9.99 / Mo</p>
          <button class="bg-black-btn edit-sub">Ok</button>
        </div> -->
        <div class="info-box">
          <p class="bold">No of years</p>
          <p>0</p>
        </div>
        <div class="info-box">
          <p class="bold">Registration Date</p>
          <p>Nov-22-2018</p>
        </div>
        <div class="info-box">
          <p class="bold">Valid Till</p>
          <p>Nov-22-2019</p>
        </div>
        <div class="info-box">
          <p class="bold">Subscription</p>
          <p>
            the subscription will renew automatically with the deactivate button
            you can always cancel your subscription
          </p>
        </div>
      </div>
      <button class="bg-black-btn m-show edit-amount-btn">Edit Amount</button>
      <div class="sub-btns">
        <button class="invoice bg-black-btn">Invoice</button>
        <img
          class="sm-hide"
          src="../assets/img/icons/download-invoice.svg"
          alt="download-
      invoice icon"
        />
      </div>
      <div class="sub-btns">
        <button class="deactivate bg-black-btn">Deactivate</button>
        <span>Delete your account</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.subscription {
  margin-bottom: 100px;
  position: relative;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head .section-heading {
  font-size: 30px;
  line-height: 34px;
}
button {
  width: 166px;
  box-shadow: none;
}
/* .social-media {
  position: absolute;
  top: -32px;
  right: 0;
}
.social-media a {
  margin-left: 21px;
} */
.subscription-body {
  margin-top: 60px;
}
.sub-info {
  margin-bottom: 70px;
}
.info-box {
  position: relative;
  display: flex;
  margin-bottom: 34px;
  font-size: 18px;
  line-height: 25px;
  color: #95979c;
}
.info-box p:first-child {
  min-width: 160px;
  color: #000000;
  margin-right: 115px;
}

.edit-sub {
  position: absolute;
  right: 0;
  bottom: 0;
  /* bottom: -50%; */
}
.sub-btns {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.sub-btns button {
  border-radius: 5px;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
  padding: 11px;
  margin-right: 27px;
}
/* .invoice {
  background: #2f2e2d;
} */
.deactivate {
  background: #ca0000;
}
.m-show {
  display: none;
}
.edit-amount-btn {
  margin-bottom: 13px;
}
@media (max-width: 700px) {
  .m-show {
    display: block;
  }
  .m-hide {
    display: none;
  }
  .bg-black-btn {
    width: 100% !important;
  }
  .sub-btns {
    flex-direction: column;
    margin-bottom: 13px;
  }
  .sub-btns button,
  .edit-amount-btn {
    font-size: 15px;
    line-height: 25px;
    margin-right: 0;
  }
  .sub-btns span {
    font-size: 10px;
    line-height: 25px;
  }
  .subscription-body {
    margin-top: 40px;
  }
  .info-box {
    font-size: 13px;
    line-height: 25px;
    margin-bottom: 12px;
  }
  .info-box p:first-child {
    min-width: 100px;
    margin-right: 30px;
  }
}
</style>