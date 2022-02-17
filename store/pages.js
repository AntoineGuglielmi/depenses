export const state = () => ({
    // counter: 0
    pages: {
        index: {
          titre: 'Vue d\'ensemble',
          introduction: 'Ceci est le texte custom de l\'introduction de la page'
        },
        budgets: {
          titre: 'Budgets',
          introduction: null
        }
    }
})

export const actions = {
    // counterUp({ state, commit }){
    //     commit('setCounter', state.counter + 1);
    // }
}

export const mutations = {
    // setCounter(state, value){
    //     state.counter = value;
    // }
}

export const getters = {
    // myGetter(state){
    //     return state.counter + 1000;
    // }
    getPage: (state) => (routeName) => {
        return state.pages[routeName];
    }
}