<template>
    <a class="button" :class="[type]" :href="to" target="_blank">
        <img v-if="icon" :src="icon.src" :height="icon.height" :width="icon.width" :alt="icon.alt">
        {{ text }}
    </a>
</template>

<script setup>
defineProps(['to', 'text', 'icon', 'type'])
</script>

<style lang="scss">
.button {
    @include lato;
    @include button-layout;
    @include flex-items-center;
    
    font-size: 0.875rem;
    text-decoration: none;

    width: fit-content;

}

.button > img {
    margin-right: 1rem;
}

a.button.primary {
    background-color: $primary;
    color: $lightest;
    padding: 1.25rem 2rem;
}
</style>