<template>
    <div class="green-stripe" :class="[ stripe.position, stripe.orientation, stripe.size ]"></div>
</template>

<script setup>
defineProps(['stripe'])
</script>

<style lang="scss">

.green-stripe {
    --distance-side: 5.5rem;

    @media screen and (min-width: $xs-screen-min) and (max-width: $m-screen-max) {
        --distance-side: 2.5rem;
    }

    width: 1.5rem;
    height: 0.125rem;
    background-color: $secondary;
    position: absolute;
    z-index: 1000;

    &.left { 
        left: var(--distance-side);
    }

    &.right {
        right: var(--distance-side);
    }

    &.top {
        top: var(--distance-side);
    }

    &.bottom {
        bottom: var(--distance-side);
    }

    &.vertical-center {
        top: 50%;
        transform: translateY(-50%);
    }

    &.vertical {
        transform: rotate(90deg);
    }

    &.quarter-after-vertical {
        transform: rotate(45deg);
    }

    &.big {
        width: 2.5rem;
    }


}
</style>