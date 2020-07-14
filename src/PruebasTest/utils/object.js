export const createStore = () => {
    var store = [];

    return {
        addItem : (item) => {
            store = [...store, item]
        },
        getStore: () => {
            return store;
        },
        getById: (id) => {
            return store.filter(x => x.id === id)[0]
        }
    }
}


