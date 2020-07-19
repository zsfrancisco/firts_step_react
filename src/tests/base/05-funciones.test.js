import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas de funciones', () => {

    test('Debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(userTest).toEqual(user);
        console.log('UserTest: ', userTest);

    });

    test('Debe de retornar un objeto', () => {

        const nombre = 'Francisco';

        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);

        expect(userTest).toEqual(user);
        console.log('UserTest: ', userTest);

    });


})
