<template>
   <div class="search">
       <div class="city-search">
           <input type="text" placeholder="请输入城市名或拼音" v-model="keywords">
       </div>
       <div class="search-list" v-show="keywords" ref="wrapper">
           <ul>
               <li class="border-bottom" v-for="item in list" :key="item.id"  @click="citySelected(item.name)">
                   {{item.name}}
               </li>
               <li class="border-bottom" v-show="!list.length">
                   没有匹配到数据
               </li>
           </ul>
       </div>
   </div>
</template>
<script>
    import betterScroll from 'better-scroll';
    export default {
        data() {
            return {
                keywords:"",
                list:[]
            };
        },
        methods:{
            handleClickCity(city) {
                this.changeCity(city);

                this.$router.push({path:'/',params:{}});
            },
            citySelected(city) {
                this.$emit('handleClickCity',city);
            }
        },
        mounted() {
            const wrapper = this.$refs.wrapper;
            this.scroll = new betterScroll(wrapper,{click:true});
        },
        props:{
            cities:Object
        },
        watch:{
            keywords:function(newVal){
                const result = [];
                if(!newVal)
                {
                    this.list = [];
                    return;
                }
                for(let key in this.cities)
                {
                    if(this.cities.hasOwnProperty(key))
                    {
                        this.cities[key].forEach(item=>{
                            if(item.spell.indexOf(newVal)!=-1||item.name.includes(newVal))
                            {
                                result.push(item);
                            }
                        });
                    }
                }
                this.list = result;
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../../common/less/global";
    @import "../../../../common/less/variables";
    .search {
        .city-search {
            height: 38rem/@fontSize;
            background-color: @headBgc;
            overflow:hidden;
            padding: 0 4rem/@fontSize;
            input {
                &::placeholder {
                    color:palevioletred;
                }
                margin-top: 4rem/@fontSize;
                border:none;
                outline: none;
                height: 32rem/@fontSize;
                width: 100%;
                border-radius: 5rem/@fontSize;
                text-align: center;
                color:#666;
                box-sizing: border-box;
                padding: 0 3rem/@fontSize;
            }
        }
        .search-list {
            position: absolute;
            width: 100%;
            top: 38rem/@fontSize+@lineHeight;
            bottom: 0;
            background-color: #eee;
            z-index: 9999;
            overflow: hidden;
            li {
                &.border-bottom {
                    border-bottom: 0.3rem/@fontSize solid #eff;
                }
                padding: 6rem/@fontSize;
                font-size: 16px;
                color: #666;
                line-height: 20rem/@fontSize;
                background-color: #fff;
            }
        }
    }
</style>