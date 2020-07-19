import '@testing-library/jest-dom';
// import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
    // test('Mostrar el mensaje "Hola, soy Francisco"', () => {
    //     const saludo = 'Hola, soy Francisco';
    //     const { getByText } = render( <PrimeraApp saludo='Hola, soy Francisco' /> );
    //     expect(getByText(saludo)).toBeInTheDocument();
    // });

    test('Debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, Francisco';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el subtítulo envíado por los props', () => {
        const saludo = 'Hola, Francisco';
        const subtitulo = 'Hola, Jennifer';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } subtitulo={ subtitulo } /> );
        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);
        expect(subtitulo).toBe(textoParrafo);
    });
    
    
})
