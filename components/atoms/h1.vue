<template>
    <h1>{{ titre }}</h1>
</template>

<script>
export default {
    props: {
        titre: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="sass" scoped>
h1
    font-weight: 200
    color: #ccc
    font-size: 3rem
    margin: 5rem 0
    color: $bleu
</style>