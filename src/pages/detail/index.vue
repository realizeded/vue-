<template>
    <div class="detail">
        <detail-banner></detail-banner>
        <detail-list :categoryList="categoryList"></detail-list>
    </div>
</template>
<script>
    import detailBanner from './components/detail-banner/index.vue';
    import detailList from './components/list/index.vue';
    export default {
        name:'detail',
        components:{
            detailBanner,
            detailList
        },
        data() {
            return {     categoryList: [{
                    "title": "成人票",
                    "children": [{
                        "title": "成人三馆联票",
                        "children": [{
                            "title": "成人三馆联票 - 某一连锁店销售"
                        }]
                    },{
                        "title": "成人五馆联票"
                    }]
                }, {
                    "title": "学生票"
                }, {
                    "title": "儿童票"
                }, {
                    "title": "特惠票"
                }]
            };
        }
    }
</script>
<style lang="less" scoped>
.detail {
    height: 800px;
}

</style>