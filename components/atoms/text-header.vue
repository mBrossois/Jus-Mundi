<template>
    <component :is="text.type" class="header-text">{{ text.text }}</component>
</template>

<script setup>
defineProps(['text'])
</script>

<style lang="scss">
.header-text {
    font-family: 'Larken';
    font-weight: bold;
    font-size: 3.5rem;
    line-height: 4rem;

    @media screen and (min-width: $l-screen-min) and (max-width: $l-screen-max) {
        font-size: 2.5rem;
        line-height: 3.1rem;
    }

    @media screen and (min-width: $s-screen-min) and (max-width: $s-screen-max) {
        font-size: 2.5rem;
        line-height: 3rem;
    }

    @media screen and (min-width: $xs-screen-min) and (max-width: $xs-screen-max) {
        font-size: 2rem;
        line-height: 2rem;
    }

}

h2.header-text {
    font-size: 2rem;
    font-weight: normal;
}
</style>