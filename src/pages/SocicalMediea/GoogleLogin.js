import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../Images/google_1.png'
import './Google.css'

const GoogleLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div>
                <h3 className='text-center mt-2 mb-3 fw-lighter'>------Social login-----</h3>
            </div>
            <div>
                <button onClick={() => signInWithGoogle()} className='text-white fw-bolder btn btn-color d-block mx-auto w-50 my-2 rounded-pill  '>
                    <img style={{ width: '32px ' }} className="" src={google} alt="" />
                    <span className='px-2'>Google sign in</span>
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;