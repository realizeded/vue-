<template>
    <div class="gallery" @click="galleryClose">
        <div class="warpper">
            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="(item,index) in imgs" :key="index">
                    <img :src="item" alt="">
                </swiper-slide>

                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>

        </div>
    </div>
</template>
<script>
    export default {
        name:'gallery',
        data() {
            return {
                swiperOption:{
                    pagination:'.swiper-pagination',
                    paginationType:'fraction',
                    observer:true,
                    observeParents:true
                },

            };
        },
        props:{
          imgs:{
              type:Array,
              default() {
                   return [];
              }
          }
        },
        methods:{
            galleryClose() {
                this.$emit('handGalleryClose');
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../../common/less/global";
    @import "../../common/less/minxs";
    .gallery /deep/ .swiper-container {
        overflow: inherit;
    }
    .gallery {
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    display: flex;
    align-items: center;
    z-index:99999999999;
    .warpper {
     width: 100%;
     height: 320rem/@fontSize;
     background-color: #fff;
        img {
            width: 100%;
            height: 320rem/@fontSize;
        }
        .swiper-pagination {
            font-size: 14px;
            color: #fff;
            bottom: -1rem;
        }
    }
}
</style>