<template>
    <AtomsCard type="squared" is-centered="true">
        <template #main>
            <div class="card_text">
                <AtomsTextStandard :text="text.texts"></AtomsTextStandard>
                <AtomsLink to="https://google.com" text="Read more"></AtomsLink>
            </div>
        </template>
    </AtomsCard>
</template>

<script setup>
defineProps(['text'])

</script>

<style lang="scss">
.card_text {
    width: 18rem;
    height: 7rem;
    
    p {
        margin-top: 0;
        line-height: 1.5rem;
        margin-bottom: .5rem;
        color: $blue-main;
    }
}
</style>