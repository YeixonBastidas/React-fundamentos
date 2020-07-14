
const getValue = (exp) => {
    switch (exp) {
        case 'definido' :
            return {}
        
        case 'indefinido':
            return undefined
        
        case 'verdadero':
            return true
        
        case 'falso':
            return false
        
        default:
            return null
    }
}

describe('Testear null, undefine y boleanos', () => {
    test('Validar si existe o esta denifino un valor', () => {
        expect(getValue('definido')).toBeDefined(); // valida que este definido
    })

    test('Validar si el valor es nulo', () => {
        expect(getValue()).toBeNull(); // valida que este null
    })

    test('Validar si el valor es verdadero', () => {
        expect(getValue('verdadero')).toBeTruthy(); // valida que es valor sea verdadero
    })

    test('Validar si el valor es falso', () => {
        expect(getValue('falsos')).toBeFalsy(); // valida que es valor sea falso
    })

    test('Validar si el valor es NanN', () => {
        expect(NaN).toBeNaN(); // valida que es valor NaN
    })
})