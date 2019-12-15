<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
    </div>
</template>
<script>
    import homeHeader from './components/homeHeader/homeHeader.vue';
    import homeSwiper from './components/swiper/index.vue';
    import homeIcons from './components/icons/index.vue';
    import homeRecommend from './components/Recommend/index.vue';

    export default {
        name:'home',
        data() {
            return {};
        },
        components:{
            homeHeader,
            homeSwiper,
            homeIcons,
            homeRecommend
        }
    }
</script>
<style lang="less" scoped>

</style>