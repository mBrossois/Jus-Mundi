<template>
    <OrganismHeader></OrganismHeader>

    <MoleculesStripesOverlay :stripes="stripes"></MoleculesStripesOverlay>

    <div class="main-content">
        <OrganismHeroImages :cards="cards">
            <template #gif>
                <img :src="gif.src" width="496" height="480" :alt="gif.alt"/>
            </template>

        </OrganismHeroImages>

        <MoleculesTextBlock :text-section="textSection"></MoleculesTextBlock>
    </div>

</template>

<script setup>
defineProps(['cards', 'gif', 'textSection', 'stripes'])
</script>

<style lang="scss">
.hero-images-container {
    position: relative;
}

.header {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
}

.main-content {
    @media screen and (min-width: $xxl-screen-min) {
        margin: 0 auto;
    }
    
    position: relative;

    @include page-width;
    // max-width: $pageWidth;
    top: 1.5rem;
    left: 5.875rem;
    padding-bottom: 8rem;
    
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: $xs-screen-min) and (max-width: $m-screen-max) {
        flex-direction: column;
        top: 6.5rem;
    }

    @media screen and (min-width: $s-screen-min) and (max-width: $s-screen-max) {
        left: 2.5rem;
    }

    @media screen and (min-width: $xs-screen-min) and (max-width: $xs-screen-max) {
        left: 1rem;
    }


    .card.primary {
        transform-origin: center;
        animation: grow $first_animation, appear $first_animation;

        img {
            opacity: 0;
            animation: appear $second_animation;

        }
    }

    .card.secondary {
        --from: -4.5rem, 0;
        opacity: 0;
        animation: appear $fourth_animation, slide-in $fourth_animation;
    }

    .hero-images-container_gif {
        opacity: 0;
        animation: appear $fourth_animation;

    }

    .text-block {
        opacity: 0;
        width: 36.375rem;
        animation: appear $third_animation;

        @media screen and (min-width: $xl-screen-min) and (max-width: $xl-screen-max) {
            width: 32rem;
        }

        @media screen and (min-width: $l-screen-min) and (max-width: $l-screen-max) {
            width: 18rem;
        }

        @media screen and (min-width: $xs-screen-min) and (max-width: $m-screen-max) {
            margin-bottom: 6rem;
        }

        @media screen and (min-width: $s-screen-min) and (max-width: $s-screen-max) {
            width: 25rem;
        }

        @media screen and (min-width: $xs-screen-min) and (max-width: $xs-screen-max) {
            width: 18rem;
        }

    
        .text-block_texts {
            padding-top: 6rem;

            @media screen and (min-width: $xs-screen-min) and (max-width: $m-screen-max) {
                padding-top: 12rem;
            }

            h1 {
                --from: 0, 2rem;
                animation: slide-in $third_animation;
            }
        }

        a.button {
            opacity: 0;
            animation: appear $fifth_animation;

        }
    }
}

@keyframes grow {
    from {
        transform: scale(0);
    } to {
        transform: scale(1);
    }
}

@keyframes appear {
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
}

@keyframes slide-in {
    from {
        transform: translate(var(--from));
    } to {
        transform: translate(0, 0);
    }
}

</style>