<template>
    <div class="budget">
        {{ budget }}
        <!-- <div class="budget__name">{{ budget.name }}</div>
        <div class="budget__actions">
            <div class="budget__up"></div>
            <div class="budget__down"></div>
            <div class="budget__delete"></div>
        </div> -->
    </div>
</template>

<script>
export default {
    props: {
        budget: {
            type: Object
        }
    }
}
</script>

<style lang="sass" scoped>

</style>