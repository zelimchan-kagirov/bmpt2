<template>
  <div class="calendar">
    <h3 class="currentdate">{{ currentMonthName }} / {{ currentDay }}</h3>
    <section class="week-days">
      <p v-for="day in days" :key="day">{{ day }}</p>
    </section>
    <section class="date">
      <div v-for="num in startDay()" :key="num"></div>
      <div
        class="date-num"
        v-for="num in daysInMonth(currentYear, currentMonth)"
        :key="num"
      >
        {{ num }}
        <!-- <div class="time-window">
          <div class="window-inner">
            <ul class="availiable-time">
              <li>12:00</li>
              <li>13:00</li>
              <li>16:00</li>
            </ul>
          </div>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentMonthName: new Date().toLocaleString("default", { month: "long" }),
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
      currentDay: new Date().toLocaleString("default", { day: "numeric" }),
      days: ["S", "M", "T", "W", "T", "F", "S"],
    };
  },
  methods: {
    daysInMonth(year, month) {
      return new Date(2022, month, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth - 1, 1).getDay();
    },
  },
};
</script>

<style scoped>
.calendar {
  max-width: 262px;
  /* width: 100%; */
}
.currentdate {
  font-size: 10px;
  line-height: 35px;
  color: #000000;
}

.week-days {
  background-color: #2f2e2d;
  color: #ffffff;
  display: flex;
  align-items: center;
  font-size: 10px;
  /* margin: 0 4px; */
  margin-bottom: 5px;
}
.week-days p {
  width: 31px;
  text-align: center;
  padding: 10px 0;
  margin: 0 3px;
}
.date {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.date > div {
  width: 31px;
  padding: 15px 3px 3px;
  text-align: right;
  margin: 3px;
}
.date-num {
  border: 1px solid #e4e4e4;
  font-size: 7px;
  position: relative;
  cursor: pointer;
  line-height: 10px;
}
.date-num:hover {
  border: 1px solid #5f95ff;
  box-shadow: 0px 0px 4px #5f95ff;
}
.date-num:hover .time-window {
  display: block;
}
/* Add this class if the day is busy  */
.busy {
  background-color: #e4e4e4;
  cursor: none;
  border: none;
}
.busy:hover {
  cursor: none;
  border: none;
  filter: none;
}
/* Availiable time  */
.time-window {
  display: none;
  /* display: inline-block; */
  position: absolute;
  top: 100%;
  right: 50%;
  transform: translateX(50%);
  padding-top: 20px;
  z-index: 10;
}
.window-inner {
  position: relative;
  background: #5f95ff;
  border-radius: 5px;
  color: #ffffff;
  padding: 0 19px;
  font-size: 10px;
  line-height: 25px;
}
.window-inner:before {
  content: "";
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 23px;
  height: 23px;
  background-color: #5f95ff;
  border-radius: 3px;
}
.availiable-time {
  list-style: none;
  position: relative;
  z-index: 6;
}
</style>