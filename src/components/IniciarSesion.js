import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';

const IniciarSesion = () => {

    return (
        <div id="main-is">
            <h1>MI RED SOCIAL :D</h1>
            <form id="iniciar-form">
                <h2>INICIAR SESION</h2>
                <input type="email" placeholder="Ingresa email" name="email" id="email"/>
                <input type="password" placeholder="Ingresa contraseña" name="password" id="password"/>
                <Button variant="contained" color="primary">INICIAR SESION</Button>
                <a href="#">Registrarse</a>
            </form>
        </div>
    )
}

export default IniciarSesion;
