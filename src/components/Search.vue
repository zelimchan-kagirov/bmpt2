<template>
  <div class="search-box">
    <form v-on:submit.prevent class="main-search">
      <div>
        <span
          ><img src="../assets/img/icons/Searching.svg" alt="search icon"
        /></span>
        <input type="text" placeholder="Try “yoga teacher”" />
      </div>
      <input type="submit" value="Search" class="sm-black-btn" />
    </form>
    <div class="popular">
      <p>Popular:</p>
      <span class="popular-options">Aerobic</span>
      <span class="popular-options">Aikido</span>
      <span class="popular-options">Acrobatics</span>
      <span class="popular-options">Alpine climbing</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-search {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background-color: #ffffff;
  border-radius: 5px;
  height: 50px;
  margin-bottom: 32px;
}

.main-search div {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  border-radius: 5px 0px 0px 5px;
  border: 1px solid #dddddd;
  background-color: #ffffff;
}

.main-search div span {
  padding-left: 20px;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  margin-top: 6px;
}

.main-search div input[type="text"] {
  border: none;
  padding: 0 16px;
  font-size: 15px;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.main-search div input[type="text"]:focus {
  outline: none;
}
.main-search input[type="submit"] {
  border-radius: 0px 5px 5px 0px;
}

.popular {
  width: 80%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 15px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.popular-options {
  border: 1px solid #ffffff;
  border-radius: 50px;
  padding: 2px 16px;
  cursor: pointer;
}
.popular-options:hover {
  background: #ffffff;
  color: #000000;
}
@media (max-width: 1283px) {
  .popular {
    display: none;
  }
}
@media (max-width: 430px) {
  .main-search {
    flex-direction: column;
    background-color: transparent;
    justify-content: center;
    align-content: space-between;
    height: 110px;
  }
  .main-search div {
    margin-bottom: 15px;
    border-radius: 5px;
  }
  .main-search input[type="submit"] {
    border-radius: 5px;
  }
  .sm-black-btn {
    width: 100% !important;
  }
}
</style>