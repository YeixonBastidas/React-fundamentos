import React from 'react'
import Enzyme from 'enzyme'
import {shallow, mount, render} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App70  from './App70.js'

// configuramos ezyme para cada archivo de test
Enzyme.configure({ adapter: new Adapter() });


describe('Probando componente App70', ()=>{
    test('Probando renderizado de componente', ()=>{
        const wrapper = shallow(<App70/>);
        //console.log(wrapper.html())
        // expect(wrapper.html()).toBe('<div><h1>Introduccion a Unit Testing</h1></div>') // esta forma es para hacer validaciones sobre testo estatico
       // expect(wrapper.find('h1').html()).toBe('<h1>Introduccion a Unit Testing</h1>') valida si existe un nodo H1
        expect(wrapper.find('h1')).toHaveLength(1); // valida que solo existe un elemento de este tipo
    })
})


