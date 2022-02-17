<template>
    <nav id="nav__main">
        <div class="container maxw">
            <div id="nav__content">
                <ul id="nav__links">
                    <Atoms-NavLink
                        v-for="(link,key) in links"
                        :key="key"
                        v-bind="link"
                    />
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    link: '/',
                    icon: 'home'
                },
                {
                    link: '/budgets',
                    icon: 'account_balance_wallet'
                }
            ]
        }
    }
}
</script>

<style lang="sass" scoped>
#nav__main
    position: fixed
    bottom: 0
    left: 0
    right: 0
    background-color: $noir
    color: white

    #nav__content
        padding: 0.5rem 0

        #nav__links
            display: flex
            gap: 1.5rem
            justify-content: center
</style>