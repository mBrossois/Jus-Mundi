<template>
    <div class="grid">
        <slot name="grid-content"></slot>
    </div>
</template>

<style lang="scss">
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(165px, auto));
        grid-gap: 4rem;

        justify-items: center;

        @media screen and (min-width: $xs-screen-min) and (max-width: $s-screen-max) {
            grid-gap: 0;
        }

    }
</style>