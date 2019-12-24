<template>
    <div class="list">
        <div class="item border-bottom" v-for="(item,index) in categoryList" :key="index">
           <div class="item-title">
            {{item.title}}
             <!--  //递归组件-->

           </div>
            <div class="item-children" v-if="item.children">
                <detail-list :categoryList="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'detailList',
        props:{
            categoryList:Array
        },
        data(){
            return {

            }
            }

    }
</script>
<style lang="less" scoped>
    @import "../../../../common/less/global";
    @import "../../../../common/less/variables";
    .item {
        .item-children {
            padding-left: 20rem/@fontSize;
        }
        &.border-bottom {
            border-bottom: 0.4rem/@fontSize solid #eee;
        }
        .item-title {
            font-size: 16rem/@fontSize;
            line-height: 44rem/@fontSize;
        }
    }
</style>