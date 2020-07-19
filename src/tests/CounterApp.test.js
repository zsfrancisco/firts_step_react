import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import React from 'react';
import CounterApp from '../CounterApp';

describe('Pruebas sobre el counter app', () => {
    const value = 10;
    let wrapper = shallow( <CounterApp value={ value } /> );;

    // Función que se ejecuta antes de cada prueba, en este caso, se la usa para
    // reiciar el contador.
    beforeEach(() => {
        wrapper = shallow( <CounterApp value={ value } /> );
    });

    test('Debe mostrar <CounterApp /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el valor por defecto de 100', () => {
        const defaultValue = wrapper.find('p').text();
        // console.log('defaultValue: ', defaultValue);
        expect(defaultValue).toBe(value.toString());
    });
    
    test('Debe aumentar el contador en +1', () => {
        // Primer botón
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('p').text();
        expect(counterText).toBe('11');
    });
    
    test('Debe resetear el contador en reset', () => {
        // Primer botón
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('p').text();
        expect(counterText).toBe('10');
    });
    
    test('Debe decrementar el contador en -1', () => {
        // Primer botón
        const buton = wrapper.find('button').at(2).simulate('click');
        // console.log('botón: ', buton.html());
        const counterText = wrapper.find('p').text();
        expect(counterText).toBe('9');
    });
    

})
