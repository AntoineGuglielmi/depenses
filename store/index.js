export const state = () => ({
  
})

export const getters = {
  
}

export const mutations = {
  
}

export const actions = {
  async nuxtServerInit ({ commit, dispatch }) {
    await dispatch('budgets/initBudgets');
  }
}