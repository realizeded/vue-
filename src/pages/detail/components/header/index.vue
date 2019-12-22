<template>
    <div class="hdContainer">
        <div class="back-radius-btn"  @click="backTo" v-show="isShow">
            <i class="l-icon l-icon-back-arrow"></i>
        </div>
        <div class="header" :style="opacityStyle">
            <div class="back-arrow" @click="backTo">
                <i class="l-icon l-icon-back-arrow"></i>
            </div>

            景点详情
        </div>
    </div>
</template>
<script>
    export default {
        name:'hd',
        data() {
            return {
                isShow:true,
                opacityStyle:{
                    opacity:0
                }
            };
        },
        methods:{
            backTo() {
                this.$router.back();
            },
            handleScroll() {
            let top = document.body.scrollTop||document.documentElement.scrollTop;
                let opacity = top/60;
                opacity = opacity>1?1:opacity;
            if(top>60)
            {

                this.isShow = false;
            }else {
                this.isShow = true;
            }

                this.opacityStyle = {opacity};
            }
        },
        mounted(){
            
            window.addEventListener('scroll',this.handleScroll);
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../../common/less/global";
    @import "../../../../common/less/variables";
    @import "../../../../common/less/minxs";
.hdContainer {
    .back-radius-btn {
        position: absolute;
        left: 12rem/@fontSize;
        top:20rem/@fontSize;
        width: 45rem/@fontSize;
        height: 45rem/@fontSize;
        background-color: #000;
        z-index: 9999;
        border-radius: 50%;
        color: #fff;
        line-height: 45rem/@fontSize;
        text-align: center;
        font-size: 40rem/@fontSize;
        font-weight: lighter;
    }
    .header {
        font-size: 16px;
        color: #fff;
        height: @height;
        line-height:@lineHeight;
        background-color:@headBgc;
        text-align: center;
        position: fixed;
        width: 100%;
        top:0;
        z-index: 999999;
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
}
</style>