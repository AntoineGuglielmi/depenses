export const state = () => ({
    budgets: []
})

export const getters = {
    getBudgets(state) {
        return state.budgets;
    }
}

export const mutations = {
    setBudgets(state, payload){
        state.budgets = payload.budgets;
    }
}

export const actions = {
    async initBudgets({ commit}){
        const budgets = await this.$axios.$get('/api/budgets');
        commit('setBudgets',{budgets});
    },
    async addBudget({ commit, dispatch }, payload)
    {
        const newBudget = this.$misc.makeData(payload);
        await this.$axios.$post('/api/add-budget',newBudget);
        dispatch('initBudgets');
    }
}