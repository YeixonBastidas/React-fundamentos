import React from 'react';
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import Counter from './Counter.js'


// configuramos ezyme para cada archivo de test
Enzyme.configure({ adapter: new Adapter() });

let wrapper;

// cada vez q se llame en los test crea una nueva instancia 
beforeEach(() => {
    wrapper = shallow(<Counter />)
})

describe('Probando componente con estados', () => {

    test('Valdiar que coincida con Snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    test('Valdiar funcionamiento de botones', () => {
        wrapper.find('button').first().simulate('click') // creamo click en el boton de incrementar 
        
        expect(wrapper.find('h1').text()).toBe('1') //

        wrapper.find('button').last().simulate('click') // creamo click en el boton de incrementar 
        wrapper.find('button').last().simulate('click')

        expect(wrapper.find('h1').text()).toBe('-1') 

    })    
})