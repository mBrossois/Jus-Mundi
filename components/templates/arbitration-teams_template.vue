<template>
    <div class="arbitration-teams page-width">
        <AtomsTextStandard :text="titleSection"></AtomsTextStandard>

        <OrganismGridLogo :images="images"></OrganismGridLogo>
    </div>
</template>

<script setup>
defineProps(['titleSection', 'images'])
</script>

<style lang="scss">
.arbitration-teams {
    padding: 2rem 4rem;

    @media screen and (min-width: $xs-screen-min) and (max-width: $xs-screen-max) {
        padding: 2rem 1rem;
    }
    p {
        color: $grey;
    }

    .logo-grid {
        padding: 4rem 0;
    }
}

</style>