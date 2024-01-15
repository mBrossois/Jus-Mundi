<template>
    <div :class="{'flex secondary-font': text.type === 'quote'}">
        <img v-if="text.type === 'quote'" class="opening-quote" :src="openingQuote" width="28" height="19" alt="Opening quote"/>
        <p :class="[
            text.size, 
            text.font,
            {
                'italic': text.type === 'quote', 
                'pre': text.hasNewline, 
                'text-centered': text.isCentered,
                'bold': text.isBold
            }]">{{ text.text }}</p>
        <img v-if="text.type === 'quote'" class="closing-quote" :src="closingQuote" width="28" height="19" alt="Closing quote"/>
    </div>
</template>

<script setup>
import openingQuote from '~/assets/images/quote_2.svg'
import closingQuote from '~/assets/images/quote_1.svg'

defineProps(['text'])
</script>

<style lang="scss">
p {
    font-family: 'IBM Plex Sans';
    font-weight: 400;
    line-height: 2rem;

    &.pre {
        white-space: pre;

        @media screen and (min-width: $xs-screen-min) and (max-width: $s-screen-max) {
            white-space: unset;
        }
    }

    &.big {
        font-size: 1.125rem;
    }

    &.italic {
        font-style: italic;
    }

    &.text-centered {
        text-align: center;
    }

    &.bold {
        font-weight: 700;
    }

    &.lato {
        @include lato;
        font-size: 0.875rem;
    }

}

.flex {
    display: flex;
}

.secondary-font p {
    font-family: 'Larken';
    font-weight: lighter;
}

.opening-quote {
    padding-right: 2rem;
}

.closing-quote {
    padding-left: 2rem;
    align-self: flex-end;
}
</style>