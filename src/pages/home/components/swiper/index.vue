<template>
    <div class="swiper">
        <swiper :options="swiperOption" ref="mySwiper" v-if="swiperList.length">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </swiper-slide>

            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
    export default {
        data(){
            return {

                swiperOption:{
                    pagination:'.swiper-pagination',
                    autoplay:3000,
                    loop:true
                }
            };
        },
        props:{
            swiperList:{
                type:Array,
                require:true,
                default:function() {
                    return [];
                }
            }
        }
    }
</script>
<style lang="less" scoped>
 @import "../../../../common/less/global";
.swiper /deep/ .swiper-pagination-bullet-active {
    background-color: #fff;
}
 .swiper {
     height: 132rem/@fontSize;
     background-color:palevioletred;
    img {
        width: 100%;
        height: 132rem/@fontSize;
    }
}
</style>