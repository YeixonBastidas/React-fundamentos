export const createStore = () => {
    var fruits = [];

    return {
        addFruit : (fruit) => {
            fruits.push(fruit)
        },
        getFruits: () => {
            return fruits;
        }
    }
}


