<template>
  <div>
    <!-- Ajouter un budget -->
    <Molecules-Section>
      <template v-slot:header>
        <h2>Ajouter un budget</h2>
      </template>
      <template v-slot:body>
        <form
          @submit="addBudget"
        >
          <label for="name">
            Nom
            <input type="text" name="name" v-model="name">
          </label>
          <button>Ajouter</button>
        </form>
      </template>
    </Molecules-Section>
    <button @click="ploup()">debug</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null
    }
  },
  methods: {
    addBudget() {
      const budget = {
        name: this.name
      };
      this.$store.dispatch('budgets/addBudget',{budget})
    },
    ploup() {
      console.log(this.budgets);
    }
  },
  computed: {
    budgets() {
      return this.$store.getters['budgets/getBudgets'];
    }
  }
}
</script>
