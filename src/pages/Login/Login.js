import { async } from '@firebase/util';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
import GoogleLogin from '../SocicalMediea/GoogleLogin';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';


    if (user) {
        navigate(from, { replace: true })
    }
    const handleEmail = e => {

        setEmail(e.target.value)
    }
    const handlePassword = e => {

        setPassword(e.target.value)
    }
    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    const handleResetPassword = async (e) => {
        await sendPasswordResetEmail(email);
        toast('Email sent');

    }


    return (
        <div className='login_from'>
            <h2 className='text-color text-center mt-3 mb-5 fw-bolder'> please Login !!!</h2>
            <form onSubmit={handleLogin} >

                <input onChange={handleEmail} type="email" name="email" id="" placeholder='enter your email' required />
                <input onChange={handlePassword} type="password" name="password" id="" placeholder='enter your password' required />
                <input className='btn_login mt-3 bg_btn text-white fw-bolder' type="submit" value="Log in" />

            </form>
            <p className='mt-2 mx-5'>New here ?  ? <Link to='/register' className='h4 text-danger text-decoration-none' >Register please! </Link></p>
            <p className='mt-2 mx-5 text-Dark fw-bolder'>Forgot password? ?
                <button className='btn btn-link text-primary fw-bolder text-decoration-none h4' onClick={handleResetPassword} >
                    Reset password
                </button></p>
            <GoogleLogin></GoogleLogin>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default Login;