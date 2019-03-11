<template>
  <div id="mycalender">
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
      <div class="box">
        <calendar
          :range="calendar5.range"
          :lunar="calendar5.lunar"
          :value="calendar5.value"
          :begin="calendar5.begin"
          :end="calendar5.end"
          @select="calendar5.select"
        ></calendar>
      </div>
      <div class="box">
        <calendar
          :range="calendar6.range"
          :lunar="calendar6.lunar"
          :value="calendar6.value"
          :begin="calendar6.begin"
          :end="calendar6.end"
          @select="calendar6.select"
        ></calendar>
      </div>
    </div>
    <div class="flex">
      <div class="box">
        <calendar
          :range="calendar7.range"
          :lunar="calendar7.lunar"
          :value="calendar7.value"
          :begin="calendar7.begin"
          :end="calendar7.end"
          @select="calendar7.select"
        ></calendar>
      </div>

      <div class="box">
        <calendar
          :range="calendar8.range"
          :lunar="calendar8.lunar"
          :value="calendar8.value"
          :begin="calendar8.begin"
          :end="calendar8.end"
          @select="calendar8.select"
        ></calendar>
      </div>
      <div class="box">
        <calendar
          :range="calendar9.range"
          :lunar="calendar9.lunar"
          :value="calendar9.value"
          :begin="calendar9.begin"
          :end="calendar9.end"
          @select="calendar9.select"
        ></calendar>
      </div>
      <div class="box">
        <calendar
          :range="calendar10.range"
          :lunar="calendar10.lunar"
          :value="calendar10.value"
          :begin="calendar10.begin"
          :end="calendar10.end"
          @select="calendar10.select"
        ></calendar>
      </div>
      <div class="box">
        <calendar
          :range="calendar11.range"
          :lunar="calendar11.lunar"
          :value="calendar11.value"
          :begin="calendar11.begin"
          :end="calendar11.end"
          @select="calendar11.select"
        ></calendar>
      </div>
      <div class="box">
        <calendar
          :range="calendar12.range"
          :lunar="calendar12.lunar"
          :value="calendar12.value"
          :begin="calendar12.begin"
          :end="calendar12.end"
          @select="calendar12.select"
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
      calendar1: {
        range: true,
        value: [[2019, 1, 1], [2030, 1, 1]], //默认日期
        lunar: false, //显示农历
        begin: [1900, 1, 1], //可选开始日期
        end: [2030, 1, 1], //可选结束日期
        select(begin, end) {
          // console.log(begin.toString(),end.toString());
        }
      },
      calendar2: {
        range: true,
        value: [[2019, 2, 1], [2030, 1, 1]], //默认日期
        lunar: false, //显示农历
        begin: [1900, 1, 1], //可选开始日期
        end: [2030, 1, 1], //可选结束日期
        select(begin, end) {
          // console.log(begin.toString(),end.toString());
        }
      },
      calendar3: {
        range: true,
        value: [[2019, 3, 1], [2030, 1, 1]], //默认日期
        lunar: false, //显示农历
        begin: [1900, 1, 1], //可选开始日期
        end: [2030, 1, 1], //可选结束日期
        select(begin, end) {
          // console.log(begin.toString(),end.toString());
        }
      },
      calendar4: {
        range: true,
        value: [[2019, 4, 1], [2030, 1, 1]], //默认日期
        lunar: false, //显示农历
        begin: [1900, 1, 1], //可选开始日期
        end: [2030, 1, 1], //可选结束日期
        select(begin, end) {
          // console.log(begin.toString(),end.toString());
        }
      },
      calendar5: {
        range: true,
        value: [[2019, 5, 1], [2030, 1, 1]], //默认日期
        lunar: false, //显示农历
        begin: [1900, 1, 1], //可选开始日期
        end: [2030, 1, 1], //可选结束日期
        select(begin, end) {
          // console.log(begin.toString(),end.toString());
        }
      },
      calendar6: {
        range: true,
        value: [[2019, 6, 1], [2030, 1, 1]], //默认日期
        lunar: false, //显示农历
        begin: [1900, 1, 1], //可选开始日期
        end: [2030, 1, 1], //可选结束日期
        select(begin, end) {
          // console.log(begin.toString(),end.toString());
        }
      },
      calendar7: {
        range: true,
        value: [[2019, 7, 1], [2030, 1, 1]], //默认日期
        lunar: false, //显示农历
        begin: [1900, 1, 1], //可选开始日期
        end: [2030, 1, 1], //可选结束日期
        select(begin, end) {
          // console.log(begin.toString(),end.toString());
        }
      },
      calendar8: {
        range: true,
        value: [[2019, 8, 1], [2030, 1, 1]], //默认日期
        lunar: false, //显示农历
        begin: [1900, 1, 1], //可选开始日期
        end: [2030, 1, 1], //可选结束日期
        select(begin, end) {
          // console.log(begin.toString(),end.toString());
        }
      },
      calendar9: {
        range: true,
        value: [[2019, 9, 1], [2030, 1, 1]], //默认日期
        lunar: false, //显示农历
        begin: [1900, 1, 1], //可选开始日期
        end: [2030, 1, 1], //可选结束日期
        select(begin, end) {
          // console.log(begin.toString(),end.toString());
        }
      },
      calendar10: {
        range: true,
        value: [[2019, 10, 1], [2030, 1, 1]], //默认日期
        lunar: false, //显示农历
        begin: [1900, 1, 1], //可选开始日期
        end: [2030, 1, 1], //可选结束日期
        select(begin, end) {
          // console.log(begin.toString(),end.toString());
        }
      },
      calendar11: {
        range: true,
        value: [[2019, 11, 1], [2030, 1, 1]], //默认日期
        lunar: false, //显示农历
        begin: [1900, 1, 1], //可选开始日期
        end: [2030, 1, 1], //可选结束日期
        select(begin, end) {
          // console.log(begin.toString(),end.toString());
        }
      },
      calendar12: {
        range: true,
        value: [[2019, 12, 1], [2030, 1, 1]], //默认日期
        lunar: false, //显示农历
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
  border: 1px solid #aaa;
  margin: 30px 10px;
}
</style>

