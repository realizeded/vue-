<template>
    <div class="swiper">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
                <img src="https://dimg04.c-ctrip.com/images/zg061a0000019a76aAD00.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="https://dimg04.c-ctrip.com/images/zg0d1a0000018sh7i0217.jpg" alt="">
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