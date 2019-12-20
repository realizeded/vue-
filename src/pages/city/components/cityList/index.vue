<template>
    <div class="cityList" ref="wrapper">
     <div>
         <div class="area">
             <div class="title">
                 当前城市
             </div>
             <div class="button-list">
                 <div class="button-wrap">
                     <div class="button">北京</div>
                 </div>
             </div>
         </div>
         <div class="area">
             <div class="title">
                 热门城市
             </div>
             <div class="button-list">
                 <div class="button-wrap" v-for="(item,index) of hotCities" :key="index" >
                     <div class="button" @click="citySelected(item.name)">{{item.name}}</div>
                 </div>
             </div>
         </div>
         <div class="area" v-for="(item,index) of cities" :key="index" :ref="index">
             <div class="title">
                 {{index}}
             </div>
             <ul class="list-city-name">
                 <li v-for="itemChild in item" :key="itemChild.id" @click="citySelected(itemChild.name)">{{itemChild.name}}</li>
             </ul>
         </div>

     </div>

    </div>

</template>
<script>
    import betterScroll from 'better-scroll';

    export default {
        name:'cityList',
        data() {
            return {};
        },
        methods:{
            citySelected(city) {
                this.$emit('handleClickCity',city);
            }
        },
        mounted() {
            const wrapper = this.$refs.wrapper;
            this.scroll = new betterScroll(wrapper,{click:true});
        },
        props:{
            hotCities:Array,
            cities:{
                type:Object,
                default:function() {
                    return {};
                }
            },
            Scrollindex:String

        },
        watch:{
            Scrollindex:function(newVal){
                let ele = this.$refs[newVal][0];//在v-for里面使用ref 则获取时是一个数组
                this.scroll.scrollToElement(ele);

            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../../common/less/global";
    @import "../../../../common/less/variables";
.cityList {
    position: absolute;
    left: 0;
    top:@lineHeight+38rem/@fontSize+1rem/@fontSize;
    right: 0;
    bottom:0;
    overflow:hidden;
        .title {
            font-size: 13rem/@fontSize;
            height: 26rem/@fontSize;
            line-height: 26rem/@fontSize;
            background-color: #eee;
            padding-left: 16rem/@fontSize;
            border-bottom: 0.4rem/@fontSize solid #eee;
            border-top: 0.4rem/@fontSize solid #eee;
        }
        .button-list {
            overflow:hidden;
            padding: 0 5rem/@fontSize;
            .button-wrap {
                float: left;
                width: 33%;
                box-sizing: border-box;
                padding: 0 10rem/@fontSize;
                .button {
                    font-size: 13rem/@fontSize;
                    padding: 4rem/@fontSize 0;
                    border: 0.6rem/@fontSize solid #ecc;
                    text-align: center;
                    margin: 5rem/@fontSize auto;
                    border-radius: 3rem/@fontSize;
                }
            }
        }
        .list-city-name {
            padding-left: 16rem/@fontSize;
            font-size: 13rem/@fontSize;
            li {
                border-bottom: 0.4rem/@fontSize solid #eee;
                height: 30rem/@fontSize;
                line-height: 30rem/@fontSize;
            }
        }
    }


</style>