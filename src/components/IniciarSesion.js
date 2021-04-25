import React, {useState, useEffect} from 'react';

const IniciarSesion = () => {

    return (
        <form id="iniciar-form">
            <input type="email" placeholder="Ingresa email" name="email" id="email"/>
            <input type="password" placeholder="Ingresa contraseña" name="password" id="password"/>
            <button>INICIAR SESION</button>
        </form>
    )
}

export default IniciarSesion;
