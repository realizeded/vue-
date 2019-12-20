<template>
    <div class="side-list" ref="lists">
        <div class="item"
             v-for="item in citiesKey"
             :key="item"
             @click="handleChange(item)"
             @touchstart="handleTouchStart"
             @touchmove="handleTouchMove"
             @touchend="handleTouchEnd"
             :ref="item"
        >
            {{item}}
        </div>
    </div>
</template>
<script>
    export default {
        name:'city-side',
        data() {
            return {
                isTouch:false,
                timer:null
            };
        },
        props:{
            citiesKey:Array
        },
        updated() {
            this.startY = this.$refs.lists.offsetTop+this.$refs['A'][0].offsetTop;
            this.itemHeight = this.$refs['A'][0].offsetHeight;
        },
        methods:{
            handleTouchStart() {
                this.isTouch = true;
            },
            handleTouchMove(e) {
            if(this.isTouch)
            {
               if(this.timer)
               {
                   clearTimeout(this.timer);
                   this.timer = null;
               }
               this.timer = setTimeout(()=>{
                   let TouchY = e.changedTouches[0].clientY;
                   let index = Math.floor((TouchY - this.startY)/this.itemHeight);
                   if(index>=0&&index<this.citiesKey.length)
                   {
                       this.$emit('handleChange',this.citiesKey[index]);
                   }
                   this.timer = null;
               },20);
            }
            },
            handleTouchEnd() {
                this.isTouch = false;
            },
            handleChange(index) {
                this.$emit('handleChange',index);
            }
        }
    }
</script>
<style lang="less" scoped>
    @import "../../../../common/less/global";
    @import "../../../../common/less/variables";
    .side-list {
        position: absolute;
        top:@lineHeight+40rem/@fontSize;
        right: 0;
        bottom: 0;
        width: 24rem/@fontSize;

        display: flex;
        flex-direction: column;
        justify-content: center;
        .item {
            text-align: center;
            line-height: 24rem/@fontSize;
            color:@headBgc;
            font-size: 14px;
        }
    }
</style>