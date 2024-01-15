<template>
    <AtomsCard type="round" :level="level" :has-shadow="hasShadow" is-centered="true" :size="size" :has-opactiy="hasOpacity">
        <template #main>
            <img :src="imageProps.src" :height="imageProps.height" :width="imageProps.width" :alt="imageProps.alt" />
        </template>
    </AtomsCard>
</template>

<script setup>
defineProps(['hasShadow', 'level', 'size', 'imageProps', 'hasOpacity'])

</script>