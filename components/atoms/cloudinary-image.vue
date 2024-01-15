<template>
    <img v-if="src" :src="cloudinaryLink + src" :width="width" :height="height" :alt="alt">
</template>

<script setup>
const props = defineProps(['src', 'width', 'height', 'alt'])

const cloudinaryLink = 'https://res.cloudinary.com/dt7uhy7jv/image/upload/v1/Jus%20mundi';
</script>