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
    import {mapState} from 'vuex';
    export default {
        name:'home',
        data() {
            return {
                lastCity:"",
                list:{},
            };
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

                const {data:res} = await this.$axios.get('mock/index.json',{params:{city:this.city}});

                if(res.ret)
                {
                    this.list = res.data;
                    return;
                }
            }
        },
        created() {
            this.lastCity = this.city;
            this.getHomeInfo();

        },
        activated() {
            if(this.lastCity!=""&&this.lastCity!==this.city)
            {
                this.lastCity = this.city;
                this.getHomeInfo();

            }
        },
        computed:{
            ...mapState(['city'])
        },
    }
</script>
<style lang="less" scoped>

</style>