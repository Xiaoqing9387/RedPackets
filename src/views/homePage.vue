<template>
  <div class="width100 minWidth1200">
    <div class="topContainer1" v-if="sendStatus">
        <img class="width100 height100" src="../assets/img/homePage/BG-top.png"/>
        <div class="topContent width:100%">
            <p class="fontsize55 color-333 textAlignCenter">EOS手气红包‘大放送’</p>
            <p class="fontsize30 textAlignCenter color-darkRed margintop20">大佬你好，多发红包，多交朋友</p>
            <div class="topFormWrapper paddingtop70">
                <el-form label-width="120px">
                    <el-form-item label="发送总金额">
                        <el-input v-model="a1" style="width:480px" placeholder="填写EOS金额">
                            <i slot="prefix" class="el-input__icon el-icon-date fontsize5"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="红包个数">
                        <el-input v-model="a1" style="width:480px" placeholder="填写红包数量，须填写整数">
                            <i slot="prefix" class="el-input__icon el-icon-date fontsize5"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="我的昵称">
                        <el-input v-model="a1" style="width:480px" placeholder="别忘了告诉大家，是谁发的红包">
                            <i slot="prefix" class="el-input__icon el-icon-date fontsize5"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="红包寄语">
                        <el-input v-model="a1" style="width:480px" placeholder="（可不填）最长二十个中文字符">
                            <i slot="prefix" class="el-input__icon el-icon-date fontsize5"></i>
                        </el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="textAlignCenter paddingtop20">
                <button class="sendRedPacket" @click="openDialog">填好了，发送红包</button>
                <p class="textAlignCenter paddingtop30 color-999 fontsize0">注：平台会收取1%的矿工费</p>
            </div>
        </div>
    </div>
    <div class="topContainer2" v-if="!sendStatus">
        <p class="successP"><i class="el-icon-circle-check fontsize55 color-green inlineMiddle marginright15"></i>EOS红包生成好啦！</p>
        <div class="codeWrapper">
            <img src=""/>
        </div>
        <p class="padding30X lineheight25 textAlignCenter color-333">请使用微信扫描二维码，打开抢红包页面，再分享给小伙伴们吧</p>
        <div class="textAlignCenter">
            <button class="sendOnceMore">再发一个</button>
        </div>
    </div>
    <template-footer></template-footer>
    <el-dialog title="" :visible="dialogFormVisible" class="indexDialog">
        <div>
            <p class="color-black textAlignCenter fontsize2 marginbottom20">正在调起EOS钱包chrome插件，帮您完成转账中...</p>
            <p class="color-999 lineHeight30">
                注：请保证您已安装了EOS的钱包chrome插件。</br>
                若没有安装，请点击链接进行安装，并在安装完成后重新发送红包<a>www.baidu.com</a>
            </p>
        </div>
        <div slot="footer" class="dialog-footer textAlignCenter paddingbottom10">
            <button class="cancelSend" @click="dialogFormVisible = false">取消发送</button>
        </div>
        </el-dialog>


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
        dialogFormVisible:false,
        sendStatus:true,   
    }
  },
    methods:{
        openDialog(){
            this.dialogFormVisible=true;
        }
    },
}
</script>
