import React, { useState } from 'react';
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);


    const handleAdd = (e) => {
        setCounter(counter + 1);
        // Tabmbién se puede de la siguiente forma:
        // setCounter( (c) => c + 1 );
    }
    const handleSub = (e) => {
        setCounter(counter - 1);
        // Tabmbién se puede de la siguiente forma:
        // setCounter( (c) => c + 1 );
    }
    const handleReset = (e) => {
        setCounter(value);
        // Tabmbién se puede de la siguiente forma:
        // setCounter( (c) => c + 1 );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <p>{ counter}</p>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSub}>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

export default CounterApp;