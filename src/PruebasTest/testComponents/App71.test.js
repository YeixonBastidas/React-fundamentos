import React from 'react';
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App71, { Title }  from './App71.js'

// configuramos ezyme para cada archivo de test
Enzyme.configure({ adapter: new Adapter() });

describe('Probando componente <App/>', () => {
    test('Probando renderizado de componente', () => {
        const wrapper = shallow(<App71 />);
        const wrapperTitle = shallow(<Title />);

        // div > p, div ~ p
        console.log(wrapper.find('div p').html()) // selecciona el elemento css
        console.log(wrapper.find('[num="3"]').html()) // selecciona por props
        console.log(wrapper.find('[type="test"]').html()) // selecciona por campo
        console.log(wrapper.find(Title).html()) // selecciona por componente

        expect(wrapperTitle.find('h1')).toHaveLength(1);
        expect(wrapperTitle.find('h1').html()).toBe('<h1>Introduccion a Unit Testing</h1>');        

    })
})