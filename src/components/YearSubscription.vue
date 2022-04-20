<template>
  <div class="offers subscription-plan">
    <div class="offer-card">
      <p class="status">Member</p>
      <p class="free">Free</p>
      <router-link to="/member-registartion" class="offer-card_btn signUp-btn"
        >Sign Up</router-link
      >
      <hr />
      <div class="offer-description">
        <ul>
          <p>Inklusive:</p>
          <li>Free Membership Account</li>
          <li>Search Private Trainer by Location</li>
          <li>Contact Trainer</li>
          <li>Get Your Training Started</li>
        </ul>
      </div>
    </div>
    <div class="offer-card premium">
      <p class="status">Trainer</p>
      <p class="cost">
        4<sup>.99</sup><span class="euro">&euro;</span
        ><span class="per-month">/mo</span>
      </p>
      <router-link to="/trainer-registartion" class="offer-card_btn premium-btn"
        >Get Premium</router-link
      >
      <span>Annual Invoice</span>
      <hr />
      <div class="offer-description">
        <ul>
          <p>Inklusive:</p>
          <li>* 1 YEAR SUBSCRIPTION PLAN *</li>
          <li>Create a Trainer Profile</li>
          <li>Make Yourself Visible Worldwide</li>
          <li>Deliver Your Training Online and Face-to-Face</li>
          <li>Get Hired By Member</li>
          <li>Your Coaching. Your Prices. Your Time!</li>
          <li>0% Brokerage FEE - 100% Your Revenue</li>
          <li>Direct Customer Contact</li>
          <li>Write Blogs</li>
        </ul>
      </div>
    </div>
    <div class="offer-card premium">
      <p class="status">Dietitian</p>
      <p class="cost">
        4<sup>.99</sup><span class="euro">&euro;</span
        ><span class="per-month">/mo</span>
      </p>
      <router-link
        to="/dietitian-registartion"
        class="offer-card_btn premium-btn"
        >Get Premium</router-link
      >
      <span>Annual Invoice</span>
      <hr />
      <div class="offer-description">
        <ul>
          <p>Inklusive:</p>
          <li>* 1 YEAR SUBSCRIPTION PLAN *</li>
          <li>Create a Trainer Profile</li>
          <li>Make Yourself Visible Worldwide</li>
          <li>Deliver Your Training Online and Face-to-Face</li>
          <li>Get Hired By Member</li>
          <li>Your Coaching. Your Prices. Your Time!</li>
          <li>0% Brokerage FEE - 100% Your Revenue</li>
          <li>Direct Customer Contact</li>
          <li>Write Blogs</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
/* Styles can be found in subscription-plan.scss  */
</style>