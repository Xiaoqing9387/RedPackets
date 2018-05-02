<template>
    <div class="bottomContainer paddingtop70" id="footer">
        <p class="fontsize55 color-333 textAlignCenter">FAQ</p>
        <div class="bottomContent">
            <el-collapse>
                <el-collapse-item>
                    <template slot="title">
                        <i class="header-icon el-icon-plus fontsize6 marginright20"></i>什么是EOS手气红包
                    </template>
                    <div class="paddingleft30">
                        <p>EOS手机红包全新出炉，不知道你就out了！</p>
                        <p>玩法与微信手气红包类似，发出EOS，与朋友们一起拼手气，看谁能拿到最大的一份。</p>
                        <p>EOS由红包发起人进行出资，最终会存放在好友们的EOS个人地址里。</p>
                        <p>目前由于技术原因，发送红包只能在PC的chrome浏览器进行；但生成红包后可以再微信内随意分享和领取。</p>
                    </div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                        <i class="header-icon el-icon-plus fontsize6 marginright20"></i>钱包会如何分享给好友们
                    </template>
                    <div class="paddingleft30">
                        <p>生成红包后，使用微信扫描二维码，在微信内打开领红包页面，分享到朋友圈或聊天内，大家就能抢红包啦。</p>
                    </div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                        <i class="header-icon el-icon-plus fontsize6 marginright20"></i>我没有EOS钱包怎么办
                    </template>
                    <div class="paddingleft30">
                        <p>点击下方链接，根据官方引导，在chrome浏览器中安装钱包插件，并生成使用你的个人钱包。</p>
                        <a>www.baidu.com</a>
                    </div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                        <i class="header-icon el-icon-plus fontsize6 marginright20"></i>钱包里没有钱怎么办
                    </template>
                    <div class="paddingleft30">
                        <p>EOS可以在各大数字货币交易所进行购买，再转账到你个人的EOS地址。</p>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="footer">
            <div class="floatLeft width50 textAlignCenter"><router-link to="/leaveMsg">给我们留言</router-link></div>
            <div class="floatLeft width50 textAlignCenter"><router-link to="/recorder">红包发送记录</router-link></div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
    methods:{
    }
}
</script>
