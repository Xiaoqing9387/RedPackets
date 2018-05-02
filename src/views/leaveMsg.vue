<template>
  <div class="leaveMsg">
    <p class="textAlignCenter color-333 paddingtop70" style="font-size:45px">留言</p>
    <div class="topFormWrapper paddingtop50">
        <el-form label-width="165px">
            <el-form-item label="您的称呼">
                <el-input v-model="a1" style="width:480px" placeholder="填写EOS金额">
                    <i slot="prefix" class="el-input__icon el-icon-date fontsize5"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="您的联系方式">
                <el-input v-model="a1" style="width:480px" placeholder="填写红包数量，须填写整数">
                    <i slot="prefix" class="el-input__icon el-icon-date fontsize5"></i>
                </el-input>
            </el-form-item>
            <el-form-item label="有什么想对我们说的">
                <el-input v-model="a1" style="width:480px" placeholder="别忘了告诉大家，是谁发的红包">
                    <i slot="prefix" class="el-input__icon el-icon-date fontsize5"></i>
                </el-input>
            </el-form-item>
        </el-form>
    </div>
    <div class="textAlignCenter paddingtop50" style="margin-bottom:80px">
        <button class="sendRedPacket">发送留言</button>
    </div>
    <template-footer></template-footer>
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
        a1:'',
    }
  },
    methods:{
    },
}
</script>
