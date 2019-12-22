<template>
<div class="Recommend">
    <div class="title">
        热门推荐
    </div>
    <div class="body">
        <ul>
            <li v-for="(item,index) in recommendList" :key="item.id+index" @click="goToDetail(item.id)">
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

            }
        },
        methods:{
            goToDetail(id)
            {
                this.$router.push(`/detail/${id}`);
            }
        },
        props:{

            recommendList:{
                type:Array,
                required:true,
                default:function(){
                    return [];
                }
            }
        }
    }
</script>
<style lang="less" scoped>
@import "../../../../common/less/global";
@import "../../../../common/less/minxs";
.Recommend {
    overflow-x: hidden;
    .title {
        margin-top: 4px;
        background-color: #eee;
        line-height: 34rem/@fontSize;
        font-size: 14px;
        padding-left: 6rem/@fontSize;
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
                height: 100%;
                width: 80rem/@fontSize;
                overflow: hidden;
                img {
                    height: 100%;
                    width: 100%;
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