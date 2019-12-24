<template>
<div>
    <transition name="gallery">
        <slot></slot>
    </transition>
</div>
</template>
<script>

</script>
<style lang="less" scoped>
    .gallery-enter,
    .gallery-leave-to {
        opacity: 0;
    }
    .gallery-enter-active,
    .gallery-leave-active
    {
        transition: all 500ms linear;
    }
</style>