import { saluda, getId, despide } from './strings';

describe('Prueba de strings', ()=> {
    test('Probando el saludo', () => {
        // toMatch = evalua si existe el texto dentro del string
        expect(saluda('Yeixon')).toMatch('Yeixon');
        
    })

    test('Probando el despide', () => {
        // not = negacion
        expect(despide()).not.toMatch('hye');
        
    })

    test('Probando el getId', () => {
        expect(getId()).toMatch(/\d{2}-\d{3}/)
    })
})