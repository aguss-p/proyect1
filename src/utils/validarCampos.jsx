
const validarCamposRegistro = ({usuario},{setError}) => {
    if(usuario.nombre === ''){
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





export default validarCampos;