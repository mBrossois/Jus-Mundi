<template>
    <div class="cards-section">
        <MoleculesCardSquared v-for="text in cards" :text="text"></MoleculesCardSquared>
    </div>
</template>

<script setup>
defineProps(['cards'])
</script>

<style lang="scss">
.cards-section {
    @include flex-items-center;

    height: 13rem;

    gap: 1.5rem; 
    overflow: scroll;
    padding: 0 3rem;

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

     /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
        display: none;
    }

    .card {
        box-shadow: 0px 0px 2rem 0px $darkest_10_percent;
    }

}
</style>