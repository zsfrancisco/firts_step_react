import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe('Pruebas sobre 11 - async, await y fetch', () => {
    test('Debe retornar el url de la imagen', async() => {
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);
    });

    test('Debe retornar mensaje "no existe" si entra al catch', async() => {
        const url = await getImagen()
            .catch( error => {
                expect(url).toBe("No existe");
            });
        
    });
    
})
