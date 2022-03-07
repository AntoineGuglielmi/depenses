<template>
  <div class="page__main" id="budgets">

    <!-- Tous les budgets -->
    <Molecules-Section>
      <template v-slot:header>
        <h2>Tous tes budgets</h2>
      </template>
      <template v-slot:body>
        <div id="budgets__all">
          <Atoms-Budget-Up-Down-Delete
            v-for="budget in budgets"
            :key="budget.id"
            :budget="budget"
          />
        </div>
      </template>
    </Molecules-Section>

    <!-- Formulaire ajouter un budget -->
    <Molecules-Section>

      <template v-slot:header>
        <h2>Ajouter un budget</h2>
      </template><!-- slot:header -->

      <template v-slot:body>
        <form
          @submit.prevent="addBudget"
        >

          <Molecules-Form-Group
            :label="'Nom'"
            :name="'name'"
          >
            <template
              v-slot:body
            >
              <input type="text" name="name" v-model="name" id="name">
            </template>
          </Molecules-Form-Group>

          <Molecules-Form-Group
            :label="'Épargne'"
            :name="'saving'"
            :checkbox="true"
          >
            <template
              v-slot:body
            >
              <input type="checkbox" name="saving" v-model="saving" id="saving">
            </template>
          </Molecules-Form-Group>

          <Molecules-Form-Group
            :label="'Limite'"
            :name="'limit'"
          >
            <template
              v-slot:body
            >
              <span>
                <input type="number" step="0.01" name="limit" v-model="limit" id="limit">
                <span class="material-icons-round">euro_symbol</span>
              </span>
            </template>
          </Molecules-Form-Group>

          <button>Ajouter</button>
        </form>
      </template><!-- slot:body -->

    </Molecules-Section>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      saving: false,
      limit: 0
    }
  },
  methods: {
    addBudget() {
      if(this.name === null) {
        return;
      }
      const newBudget = {
        name: this.name,
        saving: this.saving,
        limit: this.limit
      };
      this.$store.dispatch('budgets/addBudget',newBudget);
      this.name = null;
      this.saving = false;
      this.limit = 0;
    }
  },
  computed: {
    budgets() {
      return this.$store.getters['budgets/getBudgets'].data;
    }
  }
}
</script>

<style lang="sass" scoped>

</style>