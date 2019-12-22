<template>
    <div class="header">
        <div class="header-left"> <i class="l-icon l-icon-back-arrow"></i></div>
        <div class="header-center">
            <div class="search-input">
                <span><i class="l-icon l-icon-search"></i>搜索城市/景点/游玩主题</span>
            </div>
        </div>
        <div class="header-right" @click="goToCity">
            <span>{{$store.state.city}}</span>
            <i class="l-icon l-icon-down-menu-arrow"></i>
        </div>
    </div>
</template>
<script>

    export default {
        name:'home-header',
        methods:{
            goToCity() {
                this.$router.push({path:'/city',query:{}});
            }
        }
    }
</script>
<style lang="less" scoped>
@import "../../../../common/less/global";
@import "../../../../common/less/variables";
.header {
    height:@height;
    line-height:@lineHeight;
    background-color:@headBgc;
    font-size: 16px;
    display: flex;
    width: 100%;
    overflow: hidden;

    >div {
        &.header-left {
            width: 34rem/@fontSize;
            text-align: center;
            color: #FFF;

            .l-icon-back-arrow {
                font-size: 24rem/@fontSize;
            }
        }
        &.header-center {
            flex: 1;

            >.search-input {
                height: 32rem/@fontSize;
                line-height:32rem/@fontSize;
                margin-top: 6rem/@fontSize;
                background-color: #fff;
                margin-left: 2px;
                margin-right: 2px;
                border-radius: 5px;

                   >span {
                       color: #31c27c;
                       .l-icon-search {
                           font-size: 18rem/@fontSize;
                           padding: 0 6rem/@fontSize;

                       }
                   }

            }
        }
        &.header-right {
            min-width: 62rem/@fontSize;
            text-align: center;
            color: #FFF;
            font-size: 14px;
            .l-icon-down-menu-arrow {
                font-size: 16rem/@fontSize;


            }
        }
    }
}
</style>