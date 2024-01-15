<template>
    <div class="text-block">
        <img v-if="image" :src="image.src" :height="image.height" :width="image.width" :alt="image.alt">

        <MoleculesStripesOverlay v-if="stripes" :stripes="stripes"></MoleculesStripesOverlay>

        <MoleculesTextBlock :texts="textSection.texts" :stripes="stripes"></MoleculesTextBlock>
        
        <AtomsButton v-if="button" 
            :to="button.to" 
            :text="button.text" 
            :icon="button.icon"
            :type="button.type"
        ></AtomsButton>

        <AtomsLink v-if="link" 
            :to="link.to" 
            :text="link.text" 
        ></AtomsLink>
    </div>
</template>

<script setup>
    const props = defineProps(['textSection', 'stripes'])

    const image = props.textSection.image
    const button = props.textSection.button
    const link = props.textSection.link
</script>

<style lang="scss">
.page-section {

    .text-section {
        padding-bottom: 3rem;

    }

    a.button {
            z-index: 30;
            position: relative;
            margin-bottom: 2rem;
        }
}
</style>