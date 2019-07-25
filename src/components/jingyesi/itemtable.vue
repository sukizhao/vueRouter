<template>
  <div class="tablebox">
    <div class="tbl-header">
      <table class="table table-striped table-201709211728">
        <thead>
          <tr class="bg-info">
            <th class="text-center" width="25%">{{tableHeader.code}}</th>
            <th class="text-center" width="15%">{{tableHeader.orgname}}</th>
            <th class="text-center" width="25%">{{tableHeader.bjname}}</th>
            <th class="text-center" width="25%">{{tableHeader.time}}</th>
            <th class="text-center" width="10%">{{tableHeader.result}}</th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="tbl-body">
      <table class="table table-striped table-201709211728">
        <thead>
          <tr class="bg-info">
            <th class="text-center" width="25%">{{tableHeader.code}}</th>
            <th class="text-center" width="15%">{{tableHeader.orgname}}</th>
            <th class="text-center" width="25%">{{tableHeader.bjname}}</th>
            <th class="text-center" width="25%">{{tableHeader.time}}</th>
            <th class="text-center" width="10%">{{tableHeader.result}}</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: '',
      tableHeader: {
        name: '申请人',
        bjname: '办件名称',
        code: '办件编号',
        time: '办结时间',
        orgname: '受理部门',
        result: '结果'
      },
      moveTable: [
        {
          applyerName: '1云南新路程人力资源有限',
          taskName: '关于新路程人力资源有限公司人力资源服务机构年度报告的业务',
          projectNo: 'QT00052000610100190313000113',
          applyDate: '2019-03-13 16:09:00',
          workStatus: '1000'
        },
        {
          applyerName: '2云南基业长青管理咨询有限',
          taskName: '关于新路程人力资源有限公司人力资源服务机构年度报告的业务',
          projectNo: 'QT00052000610100190313000113',
          applyDate: '2019-03-13 16:09:00',
          workStatus: '1000'
        },
        {
          name: '3云南乾锦和程人力资源有限',
          taskName: '关于新路程人力资源有限公司人力资源服务机构年度报告的业务',
          projectNo: 'QT00052000610100190313000113',
          applyDate: '2019-03-13 16:09:00',
          workStatus: '1000'
        },
        {
          name: '4云南慈俊人力资源有限',
          taskName: '关于新路程人力资源有限公司人力资源服务机构年度报告的业务',
          projectNo: 'QT00052000610100190313000113',
          applyDate: '2019-03-13 16:09:00',
          workStatus: '1000'
        },
        {
          name: '5云南天使汇人力资源有限',
          taskName: '关于新路程人力资源有限公司人力资源服务机构年度报告的业务',
          projectNo: 'QT00052000610100190313000113',
          applyDate: '2019-03-13 16:09:00',
          workStatus: '1000'
        },
        {
          name: '6云南新兰德教育科技有限',
          taskName: '关于新路程人力资源有限公司人力资源服务机构年度报告的业务',
          projectNo: 'QT00052000610100190313000113',
          applyDate: '2019-03-13 16:09:00',
          workStatus: '1000'
        },
        {
          name: '7云南众仁达人力资源有限',
          taskName: '关于新路程人力资源有限公司人力资源服务机构年度报告的业务',
          projectNo: 'QT00052000610100190313000113',
          applyDate: '2019-03-13 16:09:00',
          workStatus: '1000'
        },
        {
          name: '8云南隆益华人力资源有限',
          taskName: '关于新路程人力资源有限公司人力资源服务机构年度报告的业务',
          projectNo: 'QT00052000610100190313000113',
          applyDate: '2019-03-13 16:09:00',
          workStatus: '1000'
        },
        {
          name: '9云南隆益华人力资源有限',
          taskName: '关于新路程人力资源有限公司人力资源服务机构年度报告的业务',
          projectNo: 'QT00052000610100190313000113',
          applyDate: '2019-03-13 16:09:00',
          workStatus: '1000'
        },
        {
          name: '10云南隆益华人力资源有限',
          taskName: '关于新路程人力资源有限公司人力资源服务机构年度报告的业务',
          projectNo: 'QT00052000610100190313000113',
          applyDate: '2019-03-13 16:09:00',
          workStatus: '1000'
        },
        {
          name: '11云南隆益华人力资源有限',
          taskName: '关于新路程人力资源有限公司人力资源服务机构年度报告的业务',
          projectNo: 'QT00052000610100190313000113',
          applyDate: '2019-03-13 16:09:00',
          workStatus: '1000'
        },
        {
          name: '12云南隆益华人力资源有限',
          taskName: '关于新路程人力资源有限公司人力资源服务机构年度报告的业务',
          projectNo: 'QT00052000610100190313000113',
          applyDate: '2019-03-13 16:09:00',
          workStatus: '1000'
        }
      ]
    }
  },
  mounted() {
    this.dd()
  },
  destroyed() {
    clearInterval(this.timer)
  },
  methods: {
    dd() {
      clearInterval(this.timer)
      var MyMarhq = ''
      clearInterval(MyMarhq)
      var self = this
      var str = []
      for (let item of this.moveTable) {
        str.push(`<tr>
						<td title="${item.projectNo}">${item.projectNo}</td>
						<td title="${item.orgName}">${item.orgName}</td>
						<td title="${item.taskName}">${item.taskName}</td>
						<td title="${item.applyDate}">${item.applyDate}</td>
						<td title="办结">办结</td>
					</tr>`)
      }
      $('.tbl-body tbody').append(str.join(''))
      if (this.moveTable.length > 5) {
        $('.tbl-body tbody').html(
          $('.tbl-body tbody').html() + $('.tbl-body tbody').html()
        )
        $('.tbl-body').css('top', '0')
        var tblTop = 0
        var speedhq = 30 // 数值越大越慢
        var outerHeight = $('.tbl-body tbody')
          .find('tr')
          .outerHeight()
        function Marqueehq() {
          if (tblTop <= -outerHeight * self.moveTable.length) {
            tblTop = 0
          } else {
            tblTop -= 1
          }
          $('.tbl-body').css('top', tblTop + 'px')
        }
        // MyMarhq = setInterval(Marqueehq, speedhq);
        this.scrollNotice(Marqueehq, speedhq)
        // 鼠标移上去取消事件
        $('.tbl-body tbody').hover(
          function() {
            clearInterval(self.timer)
            clearInterval(MyMarhq)
          },
          function() {
            clearInterval(self.timer)
            clearInterval(MyMarhq)
            self.scrollNotice(Marqueehq, speedhq)
            // MyMarhq = setInterval(Marqueehq, speedhq);
          }
        )
      }
    },
    scrollNotice(Marqueehq, speedhq) {
      this.timer = setInterval(Marqueehq, speedhq)
    }
  }
}
</script>
<style>
.table {
  border-spacing: 0;
  table-layout: fixed;
  width: 100%;
}
.tablebox {
  height: 216px;
  overflow: hidden;
  position: relative;
  border: 1px solid #e0e0e0;
}

.tbl-header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
}
.tbl-header tr {
  line-height: 36px;
  background: #fff;
}
.tbl-body {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.tbl-body tr {
  line-height: 36px;
  border: none;
}
.tbl-body tr td {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.tbl-body tr:nth-of-type(odd) {
  background: #f8f8f8;
}
.tbl-body tr td:nth-child(1),
.tbl-body tr td:nth-child(2) {
  text-align: center;
}
.tbl-body tr td .notice_td_width {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0 5px;
  text-align: center;
}
.tablebox table td,
.tablebox table th {
  height: 36px;
  text-align: center;
  border: none;
}
</style>