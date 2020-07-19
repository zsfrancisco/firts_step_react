import '@testing-library/jest-dom'
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas sobre funciones de héroes', () => {
    test('Debe retornar un héroe por Id ', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(hero => hero.id === id);
        expect(heroe).toEqual(heroeData);
    });
    test('Debe retornar undefined si el id no existe ', () => {
        const id = 10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
    });

    // Tarea:
    // Debe retornar un arreglo con los heroes de DC
    // toEqual al arreglo filtrado

    test('Debe retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC';
        const heroArr = getHeroesByOwner(owner);
        const heroTestArr = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ];
        const heroData = heroArr.filter(hero => hero.owner === owner);
        // console.log('Arreglo1: ', heroArr, 'arreglo 2: ', heroTestArr);
        expect(heroArr).toEqual(heroData);
    });

    // Debe retornar un arreglo con los héroes de Marvel
    // length = 2

    test('Debe retornar un arreglo con los héroes de Marvel y su longitud debe ser 2', () => {
        const owner = 'Marvel';
        const heroArr = getHeroesByOwner(owner);
        const heroData = heroArr.filter(hero => hero.owner === owner);
        // console.log('Arreglo1: ', heroArr, 'arreglo 2: ', heroTestArr);
        expect(heroArr).toEqual(heroData);
        expect(heroArr.length).toBe(2);
    });
});