<template>
    <li>
        <NuxtLink :to="link"><span class="material-icons-round">{{ icon }}</span></NuxtLink>
    </li>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'home'
        },
        link: {
            type: String | Object,
            default: '/'
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