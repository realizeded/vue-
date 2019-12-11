<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper></home-swiper>
    </div>
</template>
<script>
    import homeHeader from './components/homeHeader/homeHeader.vue';
    import homeSwiper from './components/swiper/index.vue';
    export default {
        name:'home',
        data() {
            return {};
        },
        components:{
            homeHeader,
            homeSwiper
        }
    }
</script>
<style lang="less" scoped>

</style>