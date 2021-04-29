import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import MiError from './MiError';

const IniciarSesion = () => {

    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState({
        isError: false,
        msj: '',
        typeError: {
            email: false,
            password: false
        }
    });

    const handleChangeEmail = (e)=>{

        setUsuario({
            ...usuario,
            email: e.target.value
        });

        console.log(e.target.value);
    }

    const handleChangePassword = (e)=>{

        setUsuario({
            ...usuario,
            password: e.target.value
        });

        console.log(e.target.value);
    }

    const validarCampos = () => {
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
        
        setError({
                isError: false,
                msj: '',
                typeError: {
                    email: false,
                    password: false
                }
        });
        
        console.log('Iniciar SESIOOOOOOOOOOOOOOOOOOOOON');
        /*Validar tel: return /(?=^.{8,}$)((?=.\d)|(?=.\W+))(?![.\n])(?=.[A-Z])(?=.[a-z]).*$/.test(phone.value)*/
        
    }

    return (
        <div id="main-is">
            <h1>MI RED SOCIAL :D</h1>
            <form id="iniciar-form">

                <h2>INICIAR SESION</h2>

                <input 
                    type="email" 
                    placeholder="Ingresa email" 
                    name="email" 
                    id="email"
                    value = {usuario.email}
                    onChange={(e)=>handleChangeEmail(e)}
                />
                {error.typeError.email ? <MiError  msj={error.msj}/> : ''}
                <input 
                    type="password" 
                    placeholder="Ingresa contraseña"
                    name="password" 
                    id="password"
                    value = {usuario.password}
                    onChange={(e)=>handleChangePassword(e)}
                />
                {error.typeError.password ? <MiError msj={error.msj}/> : ''}
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={()=>validarCampos()}
                >INICIAR SESION</Button>

                <a href="#">Registrarse</a>
            </form>
        </div>
    )
}

export default IniciarSesion;
