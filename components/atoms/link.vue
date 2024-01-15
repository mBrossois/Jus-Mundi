<template>
    <a class="link" :href="to" target="_blank">{{ text }}</a>
</template>

<script setup>
defineProps(['to', 'text'])
</script>

<style lang="scss">
a.link {
    @include lato;
    font-size: 12px;
    color: $darkest;
    text-decoration: none;
    border-bottom: 1px solid black;

}

</style>