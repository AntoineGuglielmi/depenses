<template>
    <section class="page__section">

        <header v-if="$slots.header" class="section__header">
            <slot name="header"><h2>Titre par défaut de la section</h2></slot>
        </header>

        <div v-if="$slots.body" class="section__body">
            <slot name="body"><p>Contenu par défaut de la section</p></slot>
        </div>

        <footer v-if="$slots.footer" class="section__footer">
            <slot name="footer"><p><strong>Pied par défaut de la section</strong></p></slot>
        </footer>
        
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
.page__section
    margin: 5rem 0
    // font-size: 1.25rem
</style>