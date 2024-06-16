<template>
  <div class="time-widget">
    <div class="time-widget-text">
      <b>{{ this.text }}</b>
    </div>
    <div class="time-widget-time">
      {{ this.getTrackedTimeAsString() }}
    </div>
  </div>
</template>

<script>
import router from "@/router/router.js";
export default {
  methods: {
    getTrackedTimeAsString() {
      var formattedHours =
        this.time.hours < 10 ? "0" + this.time.hours : this.time.hours;
      var formattedMinutes =
        this.time.minutes < 10 ? "0" + this.time.minutes : this.time.minutes;
      var formattedSeconds =
        this.time.seconds < 10 ? "0" + this.time.seconds : this.time.seconds;

      return formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
    },
  },
  props: {
    time: {
      type: Object,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.time-widget {
  background-color: rgb(230, 230, 230);
  width: 20%;
  height: 125px;
  border-radius: 10px;
}

.time-widget:hover {
  background-color: rgb(210, 210, 210);
}

.time-widget-text {
  border-radius: 10px 10px 0px 0px;
  padding-top: 10px;
  padding-left: 10px;
  font-size: 250%;
  color: white;
  background-color: #05386b;
}

.time-widget-time {
  border-radius: 10px 10px 0px 0px;
  padding-top: 10px;
  padding-right: 10px;
  display: flex;
  font-size: 200%;
  color: #05386b;
  justify-content: flex-end;
}
</style>
