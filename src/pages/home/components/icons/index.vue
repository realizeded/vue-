<template>
    <div class="icons">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="swiper-slide" v-for="(page,index) in pageIcons" :key="index">
                <div class="icons-item" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <p>{{item.desc}}</p>
                </div>
            </swiper-slide>

        </swiper>


    </div>
</template>
<script>
    export default {
        name:'icons',
        data() {
            return {
                swiperOption:{}
            };
        },
        props:{
            iconList:{
                type:Array,
                required:true,
                default:function() {
                    return [];
                }
            }
        },
        computed:{
            pageIcons:function(){
                const pages = [];
                this.iconList.forEach((item,index)=>{
                   const pageNum = Math.trunc(index / 8);
                   if(!pages[pageNum])
                   {
                       pages[pageNum] = [];
                   }
                   pages[pageNum].push(item);
                });
                return pages;
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../../common/less/global";
    @import "../../../../common/less/minxs";
    .icons {
        margin-top:3px;
        height: 150rem/@fontSize;
        display: flex;
        width:100%;
        justify-content: space-around;
        flex-wrap: wrap;
        align-content: space-around;
       .swiper {
           height: 100%;
           .swiper-slide {
               height: 100%;
               display: flex;
               width:100%;
               justify-content:space-between;
               flex-wrap: wrap;
               align-content: space-between;
           }
       }
        .icons-item {
            width: 24%;
            height: 47%;
            text-align: center;

            overflow: hidden;
            img {
                width: 56%;
                vertical-align: top;
            }
            p {
                font-size: 14px;
                line-height:30px;
                &:extend(.ellipsis);
            }
        }
    }
</style>