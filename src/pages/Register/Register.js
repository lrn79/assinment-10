import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import GoogleLogin from '../SocicalMediea/GoogleLogin';

const Register = () => {

    const [userName, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()


    const [
        createUserWithEmailAndPassword,
        user,
        loading,

    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleUserName = e => {
        setUsername(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePass = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPass = e => {
        setConfirmPassword(e.target.value)
    }
    if (user) {
        navigate('/')
    }
    if (loading) {
        return <Loading></Loading>
    }

    const UserHandle = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('password did mot matched')
            return
        }

        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <div className='register_from'>
                <h2 className='text_header text-center fw-bolder mt-3 mb-5'> please register !!!</h2>
                <form onSubmit={UserHandle}>
                    <input onChange={handleUserName} type="text" name="name" placeholder='your name' required />
                    <input onChange={handleEmail} type="email" name="email" id="email" placeholder='enter your email' required />
                    <input onChange={handlePass} type="password" name="password" id="password" placeholder='enter your passWord' required />
                    <p className='fw-bold text-danger mx-5'>{error}</p>
                    <input onChange={handleConfirmPass} type="password" name="password confirm" id="confirmPassword" placeholder='enter your confirm passWord' required />
                    <p className='fw-bold text-danger mx-5'>{error}</p>
                    <input className='btn_register mt-3 bg_btn fw-bolder text-white' type="submit" value="Register" />

                </form>
                <p className='mt-2 mx-5'>ALready have an account ? <Link to='/login' className='h4 text-danger text-decoration-none'>login please! </Link></p>
                <GoogleLogin></GoogleLogin>
            </div >
        </div>
    );
};

export default Register;