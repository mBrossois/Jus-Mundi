<template>
    <div class="header">
        <AtomsButton text="Try Jus Mundi" to="https://jusmundi.com/en" :icon="icon"></AtomsButton>
    </div>
</template>

<script setup>
import iconArrowUp from '~/assets/images/ico-arrow_up.svg';

const icon = {
    src: iconArrowUp,
    alt: 'Icon arrow up',
    height: 16,
    width: 16
}
</script>

<style lang="scss">
.header {
    @include page-width;
    height: 5rem;
    margin-top:1rem;

    @include flex-items-center;
    justify-content: flex-end;
}
</style>