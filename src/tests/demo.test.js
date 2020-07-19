// Prmera prueba:

describe('Pruebas realizadas sobre el archivo demo.test.js', () => {
    test('Deben ser iguales los string ', () => {
    
        // 1. Inicialización
        const mensaje = 'Hola mundo';
    
        // 2. Estímulo
        const mensaje2 = "Hola mundo";
    
        // Observar el comportamiento
        expect( mensaje2 ).toBe( mensaje );
    
    })
})


