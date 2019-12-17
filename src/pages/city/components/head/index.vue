<template>
    <div class="city-head">
        选择城市
        <div class="back-arrow" @click="backToHome">
            <i class="l-icon l-icon-back-arrow"></i>
        </div>
    </div>
</template>
<script>
    export default {
        name:'cityHead',
        methods:{
            backToHome() {
                this.$router.back();
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../../common/less/global";
    @import "../../../../common/less/variables";
   .city-head {
       font-size: 16px;
       color: #fff;
       height: @height;
       line-height:@lineHeight;
       background-color:@headBgc;

       text-align: center;
       position:relative;
        .back-arrow {
            position: absolute;
            left:0;
            top:0;
            width: 34rem/@fontSize;
            height: 100%;
            text-align: center;
            .l-icon-back-arrow {
                font-size: 24rem/@fontSize;
            }
        }
   }
</style>