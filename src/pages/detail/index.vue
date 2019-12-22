<template>
    <div class="detail">
        <detail-banner></detail-banner>
    </div>
</template>
<script>
    import detailBanner from './components/detail-banner/index.vue';
    export default {
        name:'detail',
        components:{
            detailBanner
        }
    }
</script>
<style lang="less" scoped>
.detail {
    height: 800px;
}

</style>