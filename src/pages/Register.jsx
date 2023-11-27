import './register.css'

import Slider from '../helpers/Slider.class';
import { useRef } from 'react';
import AlertHelper from '../helpers/AlertHelper';

const slider = new Slider('form__box');
const Register = () => {
    const nameRef = useRef();
    const surnameRef = useRef();
    const emailRef = useRef();
    const codeRef = useRef();
    const telephoneRef = useRef();
    const passwordRef = useRef();
    const cpasswordRef = useRef();

    window.addEventListener('keydown', (e) => {
        if(e.key == 'Enter'){
            e.preventDefault();
        }
    });

    const nextHandle = (e) => {
        e.preventDefault();
        slider.moveRight();

        let step = document.getElementById(`register-step-${slider.actualSlider()}`);
        let $buttonPrev = document.getElementById('btn-prev');

        // console.log(step.textContent)
        if(slider.actualSlider() == 1){
            // Validar que el email es requerido
            
            var regex = /^\S+@\S+\.\S+$/;
            if(surnameRef.current.value == ''){
                AlertHelper('El apellido es requerido');
                slider.moveLeft()
            }else if(nameRef.current.value == ''){
                AlertHelper('El nombre es requerido');
                slider.moveLeft()
            }else if(emailRef.current.value == ''){
                AlertHelper('El email es requerido');
                slider.moveLeft()
            }else if(!regex.test(emailRef.current.value)){
                AlertHelper('El email es no tiene formato de email');
                slider.moveLeft()
            }
            
        }else if(slider.actualSlider() == 2){
            if(codeRef.current.value == ''){
                AlertHelper('El codigo es requerido');
                slider.moveLeft()
            }
        }else if(slider.actualSlider() == 3){
            // Validar que el email es requerido
            if(telephoneRef.current.value == ''){
                AlertHelper('El telefono es requerido');
                slider.moveLeft()
            }else if(passwordRef.current.value == ''){
                AlertHelper('La contraseña es requeridoa');
                slider.moveLeft()
            }else if(cpasswordRef.current.value == ''){
                AlertHelper('El confirmacion es requerida');
                slider.moveLeft()
            }else if(cpasswordRef.current.value != passwordRef.current.value){
                AlertHelper('El confirmacion de la contraseña no es igual a la contraseña');
                slider.moveLeft()
            }
            
        }
        step.classList.add('active')
        $buttonPrev.classList.remove('disabled')

        if (slider.actualSlider() == 2) {
            let $buttonNext = document.getElementById('btn-next');
            let $buttonRegister = document.getElementById('btn-register')

            $buttonNext.classList.add('disabled')
            $buttonRegister.classList.remove('d-none')
        }
    }

    const prevHandle = (e) => {
        e.preventDefault();
        slider.moveLeft();
        let $buttonNext = document.getElementById('btn-next');
        let step = document.getElementById(`register-step-${slider.actualSlider() + 1}`);
        let $buttonRegister = document.getElementById('btn-register')
        step.classList.remove('active')
        $buttonNext.classList.remove('disabled')
        $buttonRegister.classList.add('d-none')

        if (slider.actualSlider() == 0) {
            let $buttonPrev = document.getElementById('btn-prev');
            $buttonPrev.classList.add('disabled')
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(telephoneRef.current.value == ''){
            AlertHelper('El telefono es requerido');
        }else if(passwordRef.current.value == ''){
            AlertHelper('La contraseña es requeridoa');
        }else if(cpasswordRef.current.value == ''){
            AlertHelper('El confirmacion es requerida');
        }else if(cpasswordRef.current.value != passwordRef.current.value){
            AlertHelper('El confirmacion de la contraseña no es igual a la contraseña');
        }else{
            AlertHelper('Acabas de crearte una cuenta', 'Registro exitoso', 'success');

        }
    }
    return (
        <div className="register">
            <div className="container">
                <div className="register__container row">
                    <div className="col-md-6 register__container--present">
                        <div>
                            <a href="#">
                                <h2>Register</h2>
                            </a>
                            <h4>Bienvenido al Register</h4>
                            <p>A continuacion, debes crear una cuenta</p>
                        </div>
                    </div>
                    <div className="col-md-6 register__container--register">
                        <div className="register__steps">
                            <div className="register__steps--number" id='register-step-1'>
                                <p className='m-0'>Paso 1</p>
                            </div>

                            <div className="register__steps--number" id='register-step-2'>
                                <p className='m-0'>Paso 2</p>
                            </div>

                            <div className="register__steps--number" id='register-step-3'>
                                <p className='m-0'>Paso 3</p>
                            </div>


                        </div>

                        <form action="" onSubmit={ (e) => handleSubmit(e)}>
                            <div className="d-flex form">
                                <div className='form__box m-auto' id='form-box-1'>

                                    <label htmlFor="name">Nombre:</label>
                                    <input type="text" placeholder='Escribe un usuario' id='name' ref={ nameRef }/>
                                    <label htmlFor="surname">Apellido:</label>
                                    <input type="text" placeholder='Escribe tu apellido' id='surname' ref={ surnameRef }/>
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" placeholder='Escribe tu apellido' id='email' ref={ emailRef }/>
                                </div>

                                <div className='form__box m-auto' id='form-box-2'>
                                    <label htmlFor="code">Codigo de verificacion:</label>
                                    <input type="text" placeholder='Escribe el codigo que te enviamos' id='code' ref={ codeRef }/>
                                </div>

                                <div className='form__box m-auto' id='form-box-3'>

                                    <label htmlFor="telephone">Telefono:</label>
                                    <input type="number" placeholder='Escribe un telefono' id='telephone' ref={ telephoneRef }/>
                                    <label htmlFor="password">Contraseña:</label>
                                    <input type="password" placeholder='Escribe una contraseña' id='password' ref={ passwordRef }/>
                                    <label htmlFor="cpassword">Confirmar contraseña:</label>
                                    <input type="password" placeholder='Confirma tu contrseña' id='cpassword' ref={ cpasswordRef }/>
                                </div>
                                {/* <div className="d-flex align-items-center mt-3">
                                    <input type="checkbox" id='remember'/>
                                    <p className='m-0'>Recordar contraseña</p>
                                </div> */}
                            </div>
                            <div className="d-flex justify-content-between">
                                <button className='btn btn-down disabled' onClick={ (e) => prevHandle(e) } id='btn-prev'>Atras</button>
                                <button className='btn btn-up' onClick={ (e) => nextHandle(e) } id='btn-next'>Siguiente</button>

                            </div>
                            <button type='submit' className='btn d-none' id='btn-register'>Registrarse</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register
