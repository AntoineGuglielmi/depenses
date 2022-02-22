<template>
    <label class="form-group" :class="{checkbox,checked}" :for="name">
        <div class="label__header" @click="toggleClass">{{ label }}</div>
        <slot name="body"></slot>
    </label>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: 'Penser à injecter le label dans les props !'
        },
        name: {
            type: String,
            default: 'Penser à injecter le name dans les props !'
        },
        checkbox: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggleClass() {
            console.log('ploup')
            if(!this.checkbox) return;
            if(this.checked)
            {
                this.checked = false;
            }
            else
            {
                this.checked = true;
            }
        }
    },
    data() {
        return {
            checked: false
        }
    }
}
</script>

<style lang="sass" scoped>

</style>