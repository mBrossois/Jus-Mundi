<template>
    <div class="stripes-overlay">
        <AtomsGreenStripe v-for="(stripe, index) in stripes" :key="index" :stripe="stripe"></AtomsGreenStripe>
    </div>
</template>

<script setup>
defineProps(['stripes'])
</script>

<style lang="scss">
.stripes-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>