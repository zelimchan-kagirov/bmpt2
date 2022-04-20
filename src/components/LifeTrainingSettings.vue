<template>
  <section class="life-training">
    <div class="head">
      <div>
        <h2 class="section-heading">Life Training</h2>
        <hr class="gradient-hr" />
      </div>
      <button class="sm-black-btn" @click="$emit('backToPrevious')">
        Back
      </button>
    </div>
    <div class="body">
      <div class="life-group">
        <input
          type="checkbox"
          id="group"
          value="group"
          v-model="trainingOption"
        />
        <label for="group">Group </label>
        <input
          type="checkbox"
          id="indvidual"
          value="indvidual"
          v-model="trainingOption"
        />
        <label for="indvidual">Individual </label>
      </div>
      <label for="">Price</label>
      <input type="text" v-model.trim="price" class="price" />
      <div class="turn-life">
        <input type="checkbox" id="rounded" class="toggle" />
        <label
          for="rounded"
          class="rounded"
          data-checked="On"
          data-unchecked="Off"
        ></label>
      </div>
    </div>
  </section>
</template>
    
<script>
export default {
  data() {
    return {
      trainingOption: [],
      price: null,
    };
  },
};
</script>
    
  
<style scoped>
.life-training {
  margin-bottom: 100px;
  position: relative;
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
}
.head .section-heading {
  font-size: 30px;
  line-height: 34px;
}
button {
  width: 166px;
  box-shadow: none;
}
.body label {
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #000000;
  margin-left: 7px;
  margin-right: 25px;
}
.life-group {
  margin-bottom: 30px;
}
.price {
  border: none;
  border-bottom: 1px solid #dedede;
  padding: 5px;
}
.turn-life {
  margin-top: 77px;
}
input[type="checkbox"].toggle {
  display: none;
}
input[type="checkbox"].toggle + label {
  display: inline-block;
  height: 40px;
  width: 80px;
  position: relative;
  font-size: 15px;
  line-height: 25px;
  font-weight: normal;
  color: #ffffff;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #dedede;
  border-radius: 25px;
}
input[type="checkbox"].toggle + label::before {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 28px;
  width: 28px;
  content: "";
  transition: all 0.3s ease;
  z-index: 3;
}
input[type="checkbox"].toggle + label::after {
  position: absolute;
  text-align: center;
  top: 50%;
  width: 50px;
  text-transform: uppercase;
  transform: translateY(-50%);
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 2;
}
input[type="checkbox"].toggle + label.rounded {
  border-radius: 30px;
}
input[type="checkbox"].toggle + label.rounded::before {
  border-radius: 50%;
}
input[type="checkbox"].toggle:not(:checked) + label::after {
  content: attr(data-unchecked);
  right: 0;
  left: auto;
  opacity: 1;
  color: #ffffff;
}
input[type="checkbox"].toggle:not(:checked) + label::before {
  left: 4px;
  background-color: #ffffff;
}
input[type="checkbox"].toggle:checked + label {
  text-align: left;
  background-color: #69dd33;
}
input[type="checkbox"].toggle:checked + label::after {
  content: attr(data-checked);
  left: 4px;
  right: auto;
  opacity: 1;
  color: #ffffff;
}
input[type="checkbox"].toggle:checked + label::before {
  left: 50px;
  background-color: #ffffff;
}
</style>
