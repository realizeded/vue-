<template>
    <div class="Weeken">
        <div class="title">
            去哪玩
        </div>
        <div class="body">
            <ul>
                <li v-for="(item,index) in weekendList" :key="item.id+index">
                    <div class="item">
                       <div class="item-img-wrapper">
                           <div class="item-img">
                               <img :src="item.imgUrl" alt="">
                           </div>
                       </div>
                        <div class="item-main">
                            <p class="main-tl">{{item.title}}</p>
                            <p class="main-desc">{{item.desc}}</p>

                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name:'Weeken',
        data() {
            return {

            }
        },
        props:{
            weekendList:{
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
    .Weeken {
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
                padding: 4rem/@fontSize 0;
            }
            .item {

                width: 100%;

                .item-img-wrapper {
                    height:100rem/@fontSize;
                    .item-img {
                        height: 100%;
                        overflow: hidden;
                        img {
                            height: 100%;
                            width: 100%;

                        }
                    }
                }

                .item-main {

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

                }
            }
        }
    }
</style>