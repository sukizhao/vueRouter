<template>
  <div id="mycalender">
    <div class="flex">
      <div class="box" v-for="item in valueArray">
        <calendar
          :range="true"
          :lunar="false"
          :value="[item, [2030, 1, 1]]"
          :begin="[1900, 1, 1]"
          :end="[2030, 1, 1]"
        ></calendar>
      </div>
    </div>
  </div>
</template>

<script>
import calendar from "./calendar.vue";

export default {
  name: "mycalendar",
  components: {
    calendar
  },
  data() {
    return {
      selectYear: 2020,
      valueArray: []
    };
  },
  mounted() {
    this.valueArray = [
      [this.selectYear, 1, 1],
      [this.selectYear, 2, 1],
      [this.selectYear, 3, 1],
      [this.selectYear, 4, 1],
      [this.selectYear, 5, 1],
      [this.selectYear, 6, 1],
      [this.selectYear, 7, 1],
      [this.selectYear, 8, 1],
      [this.selectYear, 9, 1],
      [this.selectYear, 10, 1],
      [this.selectYear, 11, 1],
      [this.selectYear, 12, 1]
    ];
  },
  methods: {}
};
</script>

<style>
.flex {
  /* display: flex; */
}
.box {
  width: 300px;
  border: 1px solid #aaa;
  margin: 10px 10px;
  float: left;
}
</style>

