<template>
    <div class="home">
        <home-header ></home-header>
        <home-swiper :swiperList="list.swiperList"></home-swiper>
        <home-icons :iconList="list.iconList"></home-icons>
        <home-recommend :recommendList="list.recommendList"></home-recommend>
        <home-weeken :weekendList="list.weekendList"></home-weeken>
    </div>
</template>
<script>
    import homeHeader from './components/homeHeader/homeHeader.vue';
    import homeSwiper from './components/swiper/index.vue';
    import homeIcons from './components/icons/index.vue';
    import homeRecommend from './components/Recommend/index.vue';
    import homeWeeken from './components/weeken/index.vue';
    export default {
        name:'home',
        data() {
            return {list:{}};
        },
        components:{
            homeHeader,
            homeSwiper,
            homeIcons,
            homeRecommend,
            homeWeeken
        },
        methods:{
            async getHomeInfo() {
                const {data:res} = await this.$axios.get('mock/index.json');

                if(res.ret)
                {
                    this.list = res.data;
                    return;
                }
            }
        },
        created() {
            this.getHomeInfo();
        }
    }
</script>
<style lang="less" scoped>

</style>