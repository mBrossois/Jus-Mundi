<template>
    <div class="partner-section">
        <div class="partner-section_quote flex-centered">
            <MoleculesTextBlock :text-section="quoteSection"></MoleculesTextBlock>
        </div>

        <div class="partner-section_description flex-centered pageWidth">
            <MoleculesTextBlock :text-section="titleSection" :stripes="stripes"></MoleculesTextBlock>
        </div>
        
        <div class="partner-section_benefits pageWidth">
            <MoleculesTextBlock v-for="(benefit, index) in benefitsSection" :key="index" :text-section="benefit"></MoleculesTextBlock>
        </div>
    </div>
</template>

<script setup>
defineProps(['quoteSection', 'titleSection', 'benefitsSection'])

const stripes = [
    { position: 'left vertical-center', orientation: 'horizontal' },
    { position: 'right vertical-center', orientation: 'horizontal' },
]
</script>

<style lang="scss">
.partner-section {
    text-align: center;

    .flex-centered {
        flex-direction: column;  
        padding-bottom: 2rem;

        .text-block {
            position: relative;

            max-width: 53.875rem;
            height: 21rem;


            @media screen and (min-width: $xs-screen-min) and (max-width: $xs-screen-max) {
                height: 36rem;
            }

            padding: 2rem;

            @include flex-items-center;
            justify-content: center;
            flex-direction: column;

            .stripes-overlay {
                height: 4rem;
                top: 3rem;
                width: 100svw;
            }

            .text-block_texts {
                padding-bottom: 0;

                h1 {
                    margin-top: 0;
                }

                .flex {
                    justify-content: center;

                    p {
                        max-width: 38rem;
                        text-align: justify;
                        margin: 0;
                    }
                } 
            }
        }

    } 

    .partner-section_benefits {
        display: flex;
        justify-content: space-around;

        @media screen and (min-width: $xs-screen-min) and (max-width: $s-screen-max) {
            flex-direction: column;
             align-items: center;
        }

        margin: 0 auto;

        .text-block {
            width: 26rem;
            height: auto;

            @media screen and (min-width: $xl-screen-min) and (max-width: $xl-screen-max) {
                width: 20rem;
            }

            @media screen and (min-width: $l-screen-min) and (max-width: $l-screen-max) {
                width: 15rem;
            }


            @media screen and (min-width: $m-screen-min) and (max-width: $m-screen-max) {
                width: 12rem;
            }


            @media screen and (min-width: $xs-screen-min) and (max-width: $xs-screen-max) {
                width: 18rem;
            }
        }
    }
}

</style>