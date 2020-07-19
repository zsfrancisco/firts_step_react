import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';


describe('Pruebas en desestructuración', () => {
    test('Debe retornar un string y un número', () => {
        const [letras, numeros] = retornaArreglo();

        expect(letras).toBe( 'ABC' );
        expect(numeros).toBe( 123 );
        expect(typeof(letras)).toBe( 'string' );
        expect(typeof(numeros)).toBe( 'number' );
    })
    
})
