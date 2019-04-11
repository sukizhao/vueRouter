<template>
  <div class="content">
    <div class="box" v-for="item in monthArray">
      <calendar
        ref="Calendar"
        :markDateMore="arr"
        :markDate="arr2"
        :value="item"
        v-on:choseDay="clickDay"
      ></calendar>
    </div>
  </div>
</template>
<script>
import calendar from "./calendar.vue";
export default {
  data() {
    return {
      selectYear: "",
      arr2: ["2019/1/1", "2019/2/1", "2019/6/1"],
      // arr2: [],
      monthArray: [],
      arr: [
        // {
        //   date: "2018/8/1",
        //   className: "mark1"
        // },
        // {
        //   date: "2018/8/13",
        //   className: "mark2"
        // }
      ]
    };
  },
  components: {
    calendar
  },
  methods: {
    clickDay(data) {
      console.log("选中了", data); //选中某天
    }
  },
  mounted() {
    this.selectYear = "2019";
    this.monthArray = [
      { year: this.selectYear, month: 0 },
      { year: this.selectYear, month: 1 },
      { year: this.selectYear, month: 2 },
      { year: this.selectYear, month: 3 },
      { year: this.selectYear, month: 4 },
      { year: this.selectYear, month: 5 },
      { year: this.selectYear, month: 6 },
      { year: this.selectYear, month: 7 },
      { year: this.selectYear, month: 8 },
      { year: this.selectYear, month: 9 },
      { year: this.selectYear, month: 10 },
      { year: this.selectYear, month: 11 }
    ];
  },
  created() {}
};
</script>
<style scoped>
.box {
  border: 1px solid #aaa;
  margin: 10px 10px;
  float: left;
  height: 310px;
}
h3 {
  text-align: center;
  width: 90%;
  margin: auto;
}
.div {
  margin: auto;
  width: 220px;
  height: 44px;
  line-height: 44px;
  background: #0fc37c;
  color: #fff;
  font-size: 17px;
  text-align: center;
  margin-top: 20px;
}

.wh_container >>> .mark1 {
  background-color: orange;
}

.wh_container >>> .mark2 {
  background-color: blue;
}
.wh_content_item > .wh_isMark {
  background: orange;
}
.wh_container >>> .wh_content_all {
  /* background-color: red; */
}
</style>