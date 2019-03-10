<template>
  <div id="myapp">
    <div class="flex">
      <div class="box">
        <calendar
          :range="calendar1.range"
          :lunar="calendar1.lunar"
          :value="calendar1.value"
          :begin="calendar1.begin"
          :end="calendar1.end"
          @select="calendar1.select"
        ></calendar>
      </div>
      <div class="box">
        <calendar
          :range="calendar2.range"
          :lunar="calendar2.lunar"
          :value="calendar2.value"
          :begin="calendar2.begin"
          :end="calendar2.end"
          @select="calendar2.select"
        ></calendar>
      </div>

      <div class="box">
        <calendar
          :range="calendar3.range"
          :lunar="calendar3.lunar"
          :value="calendar3.value"
          :begin="calendar3.begin"
          :end="calendar3.end"
          @select="calendar3.select"
        ></calendar>
      </div>
      <div class="box">
        <calendar
          :range="calendar4.range"
          :lunar="calendar4.lunar"
          :value="calendar4.value"
          :begin="calendar4.begin"
          :end="calendar4.end"
          @select="calendar4.select"
        ></calendar>
      </div>
    </div>
  </div>
</template>

<script>
import calendar from "./calendar.vue";

export default {
  name: "myapp",
  components: {
    calendar
  },
  data() {
    return {
      calendar1: {
        range: true,
        value: [[2019, 1, 1], [2030, 1, 1]], //默认日期
        lunar: true, //显示农历
        begin: [1900, 1, 1], //可选开始日期
        end: [2030, 1, 1], //可选结束日期
        select(begin, end) {
          // console.log(begin.toString(),end.toString());
        }
      },
      calendar2: {
        range: true,
        value: [[2019, 2, 1], [2030, 1, 1]], //默认日期
        lunar: true, //显示农历
        begin: [1900, 1, 1], //可选开始日期
        end: [2030, 1, 1], //可选结束日期
        select(begin, end) {
          // console.log(begin.toString(),end.toString());
        }
      },
      calendar3: {
        range: true,
        value: [[2019, 3, 1], [2030, 1, 1]], //默认日期
        lunar: true, //显示农历
        begin: [1900, 1, 1], //可选开始日期
        end: [2030, 1, 1], //可选结束日期
        select(begin, end) {
          // console.log(begin.toString(),end.toString());
        }
      },
      calendar4: {
        range: true,
        value: [[2019, 4, 1], [2030, 1, 1]], //默认日期
        lunar: true, //显示农历
        begin: [1900, 1, 1], //可选开始日期
        end: [2030, 1, 1], //可选结束日期
        select(begin, end) {
          // console.log(begin.toString(),end.toString());
        }
      }
    };
  },
  methods: {}
};
</script>

<style>
.flex {
  display: flex;
}
.box {
  width: 300px;
  margin: 20px;
}
</style>

