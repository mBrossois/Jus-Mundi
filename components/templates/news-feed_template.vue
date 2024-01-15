<template>
    <div class="news-feed">
        <div class="news-feed_title">
            <MoleculesTextBlock :text-section="titleSection"></MoleculesTextBlock>
        </div>

        <div class="news-feed_cards">
            <OrganismCards :cards="cards"></OrganismCards>
        </div>

        <div class="news-feed_link">
            <AtomsLink to="https://www.icc-cpi.int/news" text="Read all news"></AtomsLink>
        </div>
    </div>
</template>

<script setup>
defineProps(['titleSection', 'cards'])
</script>

<style lang="scss">
    .news-feed {
        padding: 2rem 0;
        background-color: $secondary-background;

        &_title {
            margin: 0 auto;
            text-align: center;

            .text-block_texts {
                padding-bottom: 1rem;
                h2.header-text {
                margin-top: .5rem;
            }
            }

        }

        &_link {
            @include flex-items-center;

            margin-top: 4rem;

            a {
                font-weight: 700;
                margin: 0 auto;
            }
        }

    }
</style>