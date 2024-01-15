<template>
    <div class="hero-images-container">
        <div v-for="card in cards" class="hero-cards">
            <MoleculesCardLogo :has-shadow="card.hasShadow" :level="card.level" :size="card.size" :has-opacity="card.hasOpacity" :imageProps="card.imageProps"/>
        </div>
        <div class="hero-images-container_gif">
            <slot name="gif"></slot>
        </div>
    </div>

</template>

<script setup>
defineProps(['cards'])
</script>

<style lang="scss">
.hero-images-container .hero-cards:nth-child(1) {
    position: relative;
    z-index: 100;
}

.hero-images-container .hero-cards:nth-child(2) {
    position: absolute;
    top: 28rem;
    left: 3.375rem;
    z-index: 150;
}

.hero-images-container_gif {
    position: absolute;
    left: 4rem;
    top: 14rem;
    z-index: 0;
}

@media screen and (min-width: $s-screen-min) and (max-width: $s-screen-max) {

    .hero-images-container .hero-cards:nth-child(1) img {
        height: 8rem;
        width: 16rem;
    }

    .hero-images-container .hero-cards:nth-child(2) {
        top: 23rem;

        img {
            height: 2rem;
            width: 5.4rem;
        }
    }

    .hero-images-container_gif img{
        width: 23rem;
        height: 22rem;
    }
}

@media screen and (min-width: $xs-screen-min) and (max-width: $xs-screen-max) {
    .hero-images-container .hero-cards:nth-child(1) img {
        height: 4rem;
        width: 8rem;
    }

    .hero-images-container .hero-cards:nth-child(2) {
        top: 17rem;

        img {
            height: 1.7rem;
            width: 4.5rem;
        }
    }

    .hero-images-container_gif img{
        width: 14rem;
        height: 13.4rem;
    }
}
</style>