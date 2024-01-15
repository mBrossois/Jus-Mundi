<template>
    <div class="text-block">
        <img v-if="image" :src="image.src" :height="image.height" :width="image.width" :alt="image.alt">

        <MoleculesStripesOverlay v-if="stripes" :stripes="stripes"></MoleculesStripesOverlay>

        <!-- The text block will add a header or paragrapgh based on the type  -->
        <div class="text-block_texts">
            <component v-for="(text, index) in textSection.texts" 
                :index="index" 
                :is="isParagraph(text) ? paragraphs : headers"
                :text="text"
                >
            </component>
        </div>
        
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

const paragraphs = resolveComponent('AtomsTextStandard')
const headers = resolveComponent('AtomsTextHeader')

const image = props.textSection.image
const button = props.textSection.button
const link = props.textSection.link

function isParagraph(text) {
   return text.type === 'paragraph' || text.type === 'quote'
} 
</script>


<style lang="scss">
.text-block {

    .text-block_texts {
        padding-bottom: 3rem;

    }

    a.button {
            z-index: 30;
            position: relative;
            margin-bottom: 2rem;
        }
}
</style>