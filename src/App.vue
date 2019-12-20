<template>
    <div id="app">
    <keep-alive include="city,home">
        <router-view></router-view>
    </keep-alive>
    </div>
</template>
<script>
    export default {
        name:'app',
        data(){
            return {};
        }
    }
</script>
<style lang="less" scoped>

</style>