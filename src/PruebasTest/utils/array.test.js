import { createStore } from './arrays';

describe('Haciedo pruebas de frutas', () => {
    test('Probando agregar nueva fruta', ()=>{ // validamos si exite la fruta en total
        const store = createStore();

        store.addFruit('fresa');
        expect(store.getFruits()).toStrictEqual(['fresa'])

    })

    test('Probando agregar nueva fruta', ()=>{ // validamos si existen las frutas en total
        const store = createStore();

        store.addFruit('fresa');
        store.addFruit('Melon');
        expect(store.getFruits()).toStrictEqual(['fresa', 'Melon'])

    })

    test('Probando si existe una fruta', ()=>{ // validamos si existen alguna de las frutas
        const store = createStore();

        store.addFruit('manzana');
        store.addFruit('melon');
        expect(store.getFruits()).toContain('manzana')

    })

    test('Probando si no existe', ()=>{ // validamos que no exista alguna de las frutas
        const store = createStore();

        store.addFruit('manzana');
        store.addFruit('melon');
        expect(store.getFruits()).not.toContain('banana')

    })

    test('Probando la longitud del array', ()=>{ // prueba la longitud de un array
        const store = createStore();

        store.addFruit('manzana');
        store.addFruit('melon');
        store.addFruit('coco');
        store.addFruit('zandia');
        expect(store.getFruits()).toHaveLength(4)

    })

    test('Probando agregar un objecto con info de frutas', ()=>{ // compra objectos
        const store = createStore();

        store.addFruit({
            name : 'fresa',
            price: 10
        });

        expect(store.getFruits()).toContainEqual({
            name : 'fresa',
            price: 10
        })

    })
})