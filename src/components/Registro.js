import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import MiError from './MiError';




const Registro = () => {

    const [usuario, setUsuario] = useState({
        nombre:'',
        apellido:'',
        email: '',
        password: '',
        confirm: '',
        fechaNac: '',
        genero:''
    });
    const [error, setError] = useState({
        isError: false,
        msj: '',
        typeError: {
            nombre: false,
            apellido: false,
            email: false,
            password: false,
            confirm: false,
            fechaNac: false,
            genero: false
        }
    });
    const obtenerDatos = (e) =>{
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }
// validacion de los campos
const validarCampos = () => {
    if(usuario.nombre === ''){
        setError({
            isError: true,
            msj: 'Oopss, se te olvidó algo',
            typeError: {
                nombre: true
            }
        });
        console.log('Oopss, se te olvidó algo');
        return;
    }
    if(usuario.apellido === ''){
        setError({
            isError: true,
            msj: 'Oopss, se te olvidó algo',
            typeError: {
                apellido: true
            }
        });
        console.log('Oopss, se te olvidó algo');
        return;
    }
    if(usuario.email === ''){
        setError({
            isError: true,
            msj: 'Oopss, se te olvidó algo',
            typeError: {
                email: true
            }
        });
        console.log('Oopss, se te olvidó algo');
        return;
    }
    const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!reEmail.test(String(usuario.email).toLowerCase())){
        setError({
            isError: true,
            msj: 'Email no válido',
            typeError: {
                email: true
            }
        });
        console.log('ta mal el email che');
        return;
    };
    if(usuario.password === ''){
        setError({
            isError: true,
            msj: 'Oopss, se te olvidó algo',
            typeError: {
                password: true
            }
        });
        console.log('Oopss, se te olvidó algo');
        return;
    }
    const rePw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if(!rePw.test(usuario.password)){
        setError({
            isError: true,
            msj:             
`*La contraseña debe tener: 1 letra MAYÚSCULA, 1 letra minúscula, al menos 1 número, y mínimo 8 caracteres `,
            typeError: {
                password: true
            }
        });
        console.log('ta mal el email che');
        return;
    };
    if(usuario.confirm === ''){
        setError({
            isError: true,
            msj: 'Oopss, se te olvidó algo',
            typeError: {
                confirm: true
            }
        });
        console.log('Oopss, se te olvidó algo');
        return;
    }
    if(usuario.confirm !== usuario.password){
        setError({
            isError: true,
            msj: 'Oopss, no coincide con la contraseña',
            typeError: {
                confirm: true
            }
        });
        console.log('Oopss, se te olvidó algo');
        return;
    }
    if(usuario.fechaNac === ''){
        setError({
            isError: true,
            msj: 'Oopss, se te olvidó algo',
            typeError: {
                fechaNac: true
            }
        });
        console.log('Oopss, se te olvidó algo');
        return;
    }
    if(usuario.genero === ''){
        setError({
            isError: true,
            msj: 'Oopss, se te olvidó algo',
            typeError: {
                genero: true
            }
        });
        console.log('Oopss, se te olvidó algo');
        return;
    }
    




    setError({
            isError: false,
            msj: '',
            typeError: {
                nombre: false,
                apellido: false,
                email: false,
                password: false,
                confirm: false,
                fechaNac: false,
                genero: false
            }
    });
    
    console.log('Iniciar SESIOOOOOOOOOOOOOOOOOOOOON');
    /*Validar tel: return /(?=^.{8,}$)((?=.\d)|(?=.\W+))(?![.\n])(?=.[A-Z])(?=.[a-z]).*$/.test(phone.value)*/
    
}





    return (
        <div>
            <form id="reg-form">
            
                <h2>Registro</h2>
                <input 
                    type="text" 
                    placeholder="Ingresa nombre" 
                    name="nombre" 
                    id="nombre"
                    value = {usuario.nombre}
                    onChange={obtenerDatos}
                />
                {error.typeError.nombre ? <MiError  msj={error.msj}/> : ''}
                <input 
                    type="text" 
                    placeholder="Ingresa apellido" 
                    name="apellido" 
                    id="apellido"
                    value = {usuario.apellido}
                    onChange={obtenerDatos}
                />
                {error.typeError.apellido ? <MiError  msj={error.msj}/> : ''}
                <input 
                    type="email" 
                    placeholder="Ingresa email" 
                    name="email" 
                    id="email"
                    value = {usuario.email}
                    onChange={obtenerDatos}
                />
                {error.typeError.email ? <MiError  msj={error.msj}/> : ''}
                <input 
                    type="password" 
                    placeholder="Ingresa contraseña"
                    name="password" 
                    id="password"
                    value = {usuario.password}
                    onChange={obtenerDatos}
                />
                {error.typeError.password ? <MiError  msj={error.msj}/> : ''}
                <input 
                    type="password" 
                    placeholder="Repite tu Contraseña"
                    name="confirm" 
                    id="confirm"
                    value = {usuario.confirm}
                    onChange={obtenerDatos}
                />
                {error.typeError.confirm ? <MiError  msj={error.msj}/> : ''}
                <input 
                type="date" 
                placeholder="Fecha de nacimiento" 
                name="fechaNac" 
                id="fechaNac"
                value = {usuario.fechaNac}
                onChange={obtenerDatos}
                />
                {error.typeError.fechaNac ? <MiError  msj={error.msj}/> : ''}
                <div id="container-selector">
                    <div id="selector">
                        <label  for="hombre">Hombre</label>
                            <input 
                            type="radio" 
                            placeholder="Ingresa email" 
                            name="genero" 
                            id="hombre"
                            value = 'h'
                            checked= { usuario.genero==='h'}
                            onChange={obtenerDatos}
                            />
                    </div>
                    <div id="selector">
                        <label  for="mujer">Mujer</label>
                            <input 
                            type="radio" 
                            name="genero" 
                            id="mujer"
                            value = 'm'
                            checked= { usuario.genero==='m'}
                            onChange={obtenerDatos}
                            />
                    </div>
                    <div id="selector">
                        <label  for="otros">Otros</label>
                            <input 
                            type="radio" 
                            name="genero" 
                            id="otros"
                            value = 'o'
                            checked= { usuario.genero==='o'}
                            onChange={obtenerDatos}
                            />
                        </div>
                </div>
                {error.typeError.genero ? <MiError  msj={error.msj}/> : ''}
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={()=>validarCampos()}
                >REGISTRARSE</Button>
                
                <div>¿ Ya tienes una cuenta ? <a href="#"> Inicia sesión </a></div>
                </form>
        </div>
    )
}

export default Registro
