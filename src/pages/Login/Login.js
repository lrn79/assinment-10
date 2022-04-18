import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='login_from'>
            <h2 className='text-color text-center mt-3 mb-5 fw-bolder'> please Login !!!</h2>
            <form >

                <input type="email" name="email" id="" placeholder='enter your email' required />
                <input type="password" name="password" id="" placeholder='enter your password' required />
                <input className='btn_login mt-3 bg_btn text-white fw-bolder' type="submit" value="Log in" />

            </form>
            <p className='mt-2 mx-5'>New here ?  ? <Link to='/register' className='h4 text-danger text-decoration-none' >Register please! </Link></p>

        </div >
    );
};

export default Login;