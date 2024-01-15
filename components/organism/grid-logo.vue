<template>
    <div class="logo-grid">
        <MoleculesGridLayout>
            <template #grid-content>
                <AtomsCloudinaryImage v-for="image in images" :src="image.src" width="165" height="82" :alt="image.alt"></AtomsCloudinaryImage>
            </template>
        </MoleculesGridLayout>
    </div>
</template>

<script setup>
defineProps(['images'])
</script>