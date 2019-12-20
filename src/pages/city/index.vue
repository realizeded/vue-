<template>
    <div class="city">
        <city-head></city-head>
        <city-search :cities="cities" @handleClickCity="handleClickCity"></city-search>
        <city-list :hotCities="hotCities" :cities="cities" :Scrollindex="index" @handleClickCity="handleClickCity"></city-list>
        <city-side :citiesKey="Object.keys(cities)" @handleChange="handleChange"></city-side>
    </div>
</template>
<script>
    import cityHead from './components/head/index.vue';
    import citySearch from './components/citySearch/index.vue';
    import cityList from './components/cityList/index.vue';
    import citySide from './components/citySide/index.vue';
    import {mapActions} from 'Vuex';
    export default {
        name:'city',
        data(){
            return {
                hotCities:[],
                cities:{},
                index:""
            };
        },
        components:{
            cityHead,
            citySearch,
            cityList,
            citySide
        },
        methods:{
            ...mapActions(['changeCity']),
            async getCitysInfo() {
                const {data:res} = await this.$axios.get('mock/city.json');
                console.log(res);
                if(!res.ret)
                {
                    return;
                }
                this.hotCities = res.data.hotCities;
                this.cities = res.data.cities;
            },
            handleChange(item) {
                this.index = item;
            },
            handleClickCity(city) {
                this.changeCity(city);

                this.$router.push({path:'/',params:{}});
            }
        },
        created() {
            this.getCitysInfo();
        }
    }
</script>
<style lang="less" scoped>

</style>