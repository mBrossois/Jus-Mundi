
<template>
    <div class="hero-view full-height">
        <TemplatesHeroTemplate :cards="heroCards" :gif="heroCaseGif" :text-section="heroTextBlock" :stripes="heroStripesOverlay"></TemplatesHeroTemplate>

        <div class="linear-gradient divider"></div>
    </div>
    <TemplatesPartnershipTemplate :quote-section="partnerQuoteSection" :title-section="partnerTitleSection" :benefits-section="benefitsSection"></TemplatesPartnershipTemplate>

    <TemplatesNewsFeedTemplate :title-section="newsFeedTitle" :cards="newsCards"></TemplatesNewsFeedTemplate>

    <TemplatesArbitrationTeamsTemplate :title-section="arbitrationTeamsTitle" :images="arbitrationLogos"></TemplatesArbitrationTeamsTemplate>
</template>

<script setup>
import { 
    heroCards, 
    heroCaseGif, 
    heroTextBlock, 
    heroStripesOverlay, 
    partnerQuoteSection, 
    partnerTitleSection,
    benefitsSection,
    newsFeedTitle,
    newsCards,
    arbitrationLogos,
    arbitrationTeamsTitle
} from '~/constants/index'

</script>

<style lang="scss">
.hero-view.full-height {
    position: relative;
    min-height: 100svh;
    width: 100svw;
}

.divider {
    width: 100%;
}

.hero-view .linear-gradient.divider {
    position: absolute;
    bottom: 0;
    height: 7.5rem;
    background: linear-gradient(180deg, $lightest 0%, $linear-gradient-dark-color 69.79%);
}
</style>