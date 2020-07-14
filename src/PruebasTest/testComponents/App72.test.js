import React from 'react';
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import App72 from './App72.js'


// configuramos ezyme para cada archivo de test
Enzyme.configure({ adapter: new Adapter() });

const fruits = [
    {
        name: 'freza', id : 1
    },
    {
        name: 'Manzana', id : 2
    },
    {
        name: 'Naranja', id : 3
    },
    {
        name: 'Mango', id : 4
    }
]

let wrapper;

// cada vez q se llame en los test crea una nueva instancia 
beforeEach(() => {
    wrapper = shallow(<App72 title='Frutas' list={fruits} />)
})

describe('Probando componente list', ()=>{
    test('Validar nodos', () => {        

        // valido que exista titulo
        expect(wrapper.find('h1').exists()).toBeTruthy();
        // valida si tiene clase css
        expect(wrapper.find('h1').hasClass('big')).toBeTruthy();
        
        // validar la cantidad de hijo 
        expect(wrapper.find('ul').children().length).toBe(4);

        
        console.log(wrapper.find('li').first().html());

        // validar si existe un texto en la posicion indicado
        expect(wrapper.find('ul').childAt(2).text()).toBe('Naranja');

        // validar el tipo de nodo / elemento
        expect(wrapper.find('ul').childAt(2).type()).toBe('li');
        

    })

    test('Validar actualziacion en props', () => {        

        // validar cantidad de elementos li 
        expect(wrapper.find('li').length).toBe(4);
        
        wrapper.setProps({
            list : [
                ...fruits,
                {name : 'Kiwi', id : 5}
            ]
        })
        // validamos de nuevo para identificar que si se logro cambiar las props
        expect(wrapper.find('li').length).toBe(5);

        wrapper.setProps({
            title : 'Super Frutas'
        })

        expect(wrapper.find('.big').text()).toBe('Super Frutas')

    })

    // valida que el html no tenga muchos cambios, haciendo una copia con snapshot
    test('Validar que coincida con snapShot', () => { 
       
        // primero creo el snapshot
        // expect(wrapper.html()).toMatchSnapshot();
        // despues hago las comparaciones
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})