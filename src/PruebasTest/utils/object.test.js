import { createStore } from './object'

describe('Test a Objects', () => { 
    test('Agregar Item en Store', () => { // validamos que el objeto sea igual al buscado setean una posicion
        
        var store = createStore();

        store.addItem({
            name: 'Yeixon',
            id: 1,
            country: 'Colombia'
        })

        expect(store.getStore()[0]).toEqual({
            name: 'Yeixon',
            id: 1,
            country: 'Colombia'
        })

    })


    test('Buscamos item por Id', () => { // validamos que el objeto sea igual al buscado por Id
        
        var store = createStore();

        store.addItem({
            name: 'Yeixon',
            id: 1,
            country: 'Colombia'
        },
        {
            name: 'Arley',
            id: 2,
            country: 'Mexico'
        })

        // validamos si el objeto es igual
        expect(store.getById(1)).toEqual({
            name: 'Yeixon',
            id: 1,
            country: 'Colombia'
        })
        
        //valida si alguna propiedad existe en el objeto 
        expect(store.getById(1)).toMatchObject({
            name: 'Yeixon'
        })

        // validamos que exista el objecto
        expect(store.getById(1)).toHaveProperty('name' , 'Yeixon')

    })


})
