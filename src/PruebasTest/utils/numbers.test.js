import {sum, multiplicacion, division, resta, getRamdomNum} from './numbers.js';

describe('primer grupo de opereaciones', () => {
    test('probando Suma', () => {
        expect(sum(5, 5)).toBe(10)
    })

    test('probando Resta', () => {
        expect(resta(5, 5)).toBe(0)
    })

    test('probando Multiplicacion', () => {
        expect(multiplicacion(5, 5)).toBe(25)
    })

   test('probando Division', () => {
        expect(division(5, 5)).toBe(1)
    })

    test('prabando ramdon', () => {
        // toBeGreaterThan = el resultado esperado sea mayor al numero declarado
        // toBeGreaterThanOrEqual = si el numero si es mayor o igual
        // toBeLessThan() => si es menor
        // toBeLessThanThanOrEqual() = menos o igual
        expect(getRamdomNum(5, 10)).toBeGreaterThanOrEqual(5)
    })
})



