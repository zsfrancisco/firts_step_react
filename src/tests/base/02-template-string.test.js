import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string";


describe('Pruebas en el 02-template-string', () => {
    
    test('getSaludo debe retornar hola fernando', () => {
        
        const nombre = 'Fernando';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe( 'Hola ' + nombre );
        console.log(saludo);

    })

    // Si no hay ningún nombre dado, el saludo debe ser Hola Francisco

    test('getSaludo debe retornar hola Francisco', () => {
        const saludo = getSaludo();

        expect(saludo).toBe( 'Hola Francisco' );
        console.log(saludo);
    })
    
    

})
