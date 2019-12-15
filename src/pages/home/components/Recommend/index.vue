<template>
<div class="Recommend">
    <div class="title">
        热门推荐
    </div>
    <div class="body">
        <ul>
            <li v-for="(item,index) in recommendList" :key="item.id+index">
                <div class="item">
                    <div class="item-img">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <div class="item-main">
                        <p class="main-tl">{{item.title}}</p>
                        <p class="main-desc">{{item.desc}}</p>
                        <a href="" class="info">查看详情</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
    export default {
        name:'Recommend',
        data() {
            return {
                recommendList: [{
                    "id": "0001",
                    "imgUrl": "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg",
                    "title": "故宫",
                    "desc": "东方宫殿建筑代表，世界宫殿建筑典范"
                }, {
                    "id": "0002",
                    "imgUrl": "http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg",
                    "title": "南山滑雪场",
                    "desc": "北京专业级滑雪圣地"
                }, {
                    "id": "0003",
                    "imgUrl": "http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg",
                    "title": "天安门广场",
                    "desc": "我爱北京天安门，天安门上太阳升"
                }, {
                    "id": "0004",
                    "imgUrl": "http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg",
                    "title": "水立方",
                    "desc": "中国的荣耀，阳光下的晶莹水滴"
                }, {
                    "id": "0005",
                    "imgUrl": "http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg",
                    "title": "温都水城养生馆",
                    "desc": "各种亚热带植物掩映其间仿佛置身热带雨林"
                }]
            }
        }
    }
</script>
<style lang="less" scoped>
@import "../../../../common/less/global";
@import "../../../../common/less/minxs";
.Recommend {
    .title {
        margin-top: 4px;
        background-color: #eee;
        line-height: 34rem/@fontSize;
        font-size: 14px;
    }
    .body {
        li {
            .border-bottom;
        }
        .item {
            height: 80rem/@fontSize;
            width: 100%;

            display: flex;
            padding: 8rem/@fontSize 6rem/@fontSize;
            .item-img {

                overflow: hidden;
                img {
                    height: 100%;
                    width: 80rem/@fontSize;
                    box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.4);
                    border-radius: 0 0 10rem/@fontSize 0;
                }
            }
            .item-main {
                    padding-left: 10rem/@fontSize;
                    overflow: hidden;
                    .main-tl {
                        font-size: 18px;
                        font-weight: 600;
                        line-height: 26rem/@fontSize;
                        &:extend(.ellipsis);
                    }
                    .main-desc {
                        font-size: 15px;
                        line-height: 22rem/@fontSize;
                        &:extend(.ellipsis);
                    }
                    a {
                        font-size: 14px;
                        display: inline-block;
                        padding: 4rem/@fontSize 9rem/@fontSize;
                        background-color: blueviolet;
                        border-radius: 5rem/@fontSize;
                        color: #fff;
                    }
            }
        }
    }
}
</style>