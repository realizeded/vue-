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
                swiperOption:{},
                iconList:[
                    {
                        "id": "0001",
                        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
                        "desc": "景点门票"
                    }, {
                        "id": "0002",
                        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
                        "desc": "滑雪季"
                    }, {
                        "id": "0003",
                        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
                        "desc": "泡温泉"
                    }, {
                        "id": "0004",
                        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
                        "desc": "动植园"
                    }, {
                        "id": "0005",
                        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
                        "desc": "游乐园"
                    }, {
                        "id": "0006",
                        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
                        "desc": "必游榜单"
                    }, {
                        "id": "0007",
                        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
                        "desc": "演出"
                    }, {
                        "id": "0008",
                        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
                        "desc": "城市观光"
                    }, {
                        "id": "0009",
                        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
                        "desc": "一日游"
                    }
                ]
            };
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