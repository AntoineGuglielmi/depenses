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
        // const budgets = this.$axios.$get('http://localhost:8081/budgets').then(r => {
        //     state.budgets = r.data;
        // });
        state.budgets = payload.budgets;
    }
}

export const actions = {
    async initBudgets({ commit }){
        const budgets = await this.$axios.$get('/api/budgets');
        commit('setBudgets',{budgets});
    },
    async addBudget({ commit}, payload)
    {
        console.log(await this.$axios.$post('/api/add-budget',payload));
        // console.log(payload);
    }
}