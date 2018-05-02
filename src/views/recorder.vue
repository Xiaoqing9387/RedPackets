<template>
  <div class="recorder">
    <p class="textAlignCenter color-333 paddingtop70" style="font-size:45px">EOS红包发送记录</p>
    <p class="textAlignCenter color-999 margintop10">注：仅记录了浏览器内存储的发送信息</p>
    <div class="paddingtop30" style="width: 980px;margin:0 auto">
        <el-table
        border
        stripe
      :data="tableData"
      >
      <el-table-column
        prop="name"
        label="二维码"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column
        prop="money"
        label="EOS金额"
        align="center">
      </el-table-column>
      <el-table-column
        prop="account"
        label="红包数"
        align="center">
      </el-table-column>
      <el-table-column
        prop="name"
        label="昵称"
        align="center">
      </el-table-column>
    </el-table>
    </div>
  </div>
</template>

<script>
export default {
    components: {
        templateFooter: () => import("@/components/footer")
    },
  name: 'homePage',
  data () {
    return {
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            money: '300',
            account:2
          }, {
            date: '2016-05-04',
            name: '王小虎',
            money: '200',
            account:2
          }, {
            date: '2016-05-01',
            name: '王小虎',
            money: '100',
            account:2
          }, {
            date: '2016-05-03',
            name: '王小虎',
            money: '100',
            account:2
          }]
    }
  },
    methods:{
    },
}
</script>
