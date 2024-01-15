<template>
    <div 
        class="card" 
        :class="[type, level, size, {'shadow': hasShadow, 'flex-centered': isCentered, 'opacity-ten': hasOpactiy}]">
        <slot name="main"></slot>
    </div>
</template>

<script setup>
defineProps(['type', 'level', 'size', 'hasShadow', 'isCentered', 'hasOpactiy'])
</script>

<style lang="scss">
.card {
    width: 12.5rem;
    height: 12.5rem;
    background-color: $lightest;

    &.squared {
        border-radius: .5rem;
        width: 21rem;
        height: 9rem;

    }
}

.card.shadow {
    box-shadow: 0px 0px 192px 0px $darkest_10_percent;
}

.card.flex-centered {
    display: flex;
    flex-shrink: 0;
}

.card.opacity-ten {
    background-color: $lightest_10_percent;
}

.card.big {
    width: 30rem;
    height: 30rem;

    &.shadow {
        box-shadow: 0px 0px 128px 0px $darkest_10_percent;
    }
}

@media screen and (min-width: $s-screen-min) and (max-width: $s-screen-max) {
    .card.big {
        width: 25rem;
        height: 25rem;
    }
    .card {
        width: 10rem;
        height: 10rem;
    }

}

@media screen and (min-width: $xs-screen-min) and (max-width: $xs-screen-max) {
    .card.big {
        width: 18rem;
        height: 18rem;
    }
    .card {
        width: 7rem;
        height: 7rem;
    }

}

</style>