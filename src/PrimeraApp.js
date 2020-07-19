import React from 'react';
import PropTypes from "prop-types";

// Functional components

const PrimeraApp = ( {saludo,subtitulo='Soy un subtítulo'} ) => {
    return (
        <>
            <h1>{ saludo }</h1>
            <p>{ subtitulo }</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

export default PrimeraApp;