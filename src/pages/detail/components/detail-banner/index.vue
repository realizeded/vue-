<template>
    <div>
        <detail-hd></detail-hd>
        <div class="banner" @click="handBannerClick">
            <div class="banner-img">
                <img src="./imgs/banner.jpg" alt="">
            </div>
            <div class="banner-info">
                <div class="title">
                    大连圣亚海洋世界(AAAA景区)
                </div>
                <div class="message">
                    <span class="l-icon l-icon-img"></span>
                    36
                </div>
            </div>
        </div>
        <fade>
        <gallery v-show="isShowGallery" :imgs="imgs" @handGalleryClose="handGalleryClose"></gallery>
        </fade>
  </div>

</template>
<script>
import gallery from '../../../../components/gallery/index.vue';
import detailHd from '../header/index';
import fade from '../fadeAnimation/index';
    export default {
        name:'detail-banner',
        data() {
            return {
                isShowGallery:false,
                imgs: ["http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg",
                    "http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"]
            };
        },
        methods:{
            handBannerClick() {
                this.isShowGallery = true;
            },
            handGalleryClose() {
                this.isShowGallery = false;
            }
        },
        components:{
            gallery,
            detailHd,
            fade
        }
    }
</script>
<style lang="less" scoped>
@import "../../../../common/less/global";
@import "../../../../common/less/minxs";

.banner {
    position: relative;
    .banner-img {
        height:220rem/@fontSize;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .banner-info {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        font-size: 14px;
        line-height: 28rem/@fontSize;
        height:28rem/@fontSize ;
        display: flex;
        justify-content: space-between;
        background-image: linear-gradient(to bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.1));
        .title {
            flex: 1;
            color: #fff;
            padding-left: 10rem/@fontSize;
            letter-spacing: 2rem/@fontSize;
        }
        .message {
            font-size: 14px;
            color: #fff;
            padding: 0 12rem/@fontSize;
            .l-icon-img {
                font-size: 20px;
                vertical-align: middle;
            }
        }
    }
}
</style>