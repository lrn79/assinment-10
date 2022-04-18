import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutMe.css'

const AboutMe = () => {
    const navigate = useNavigate()
    return (
        <div className='container'>
            <h3 className=' mt-3 mb-1 fw-bolder About_me_title'>About me</h3>
            <div className='About_me_text'>
                <h4><span className='text-primary fw-bolder h1'>HEY!</span> hello this is Lutfor Rahman Nayeem .... I am a professional Photographer with 4 years experience.. my skilled is -Experienced in all different kinds of photography -Strong aesthetic sense -Technical knowledge of multiple camera technologies -Extensive communication, cooperation, and service skills -Critical thinking, analysis, and strong attention to small detail.Work Experience
                    Photographer2018 to present  Capture images as directed, taking all aspects into consideration, including outside lighting, shadows, and lens requirements.
                    Edit and pre-edit images to ensure they are high quality and properly color corrected. I done My work With My passion ...and i can satisfied my clint as well..</h4>
                <button onClick={() => navigate('/about')} className='btn_photos p-2  d-block mx-auto'>See more about me!</button>
            </div>
        </div>
    );
};

export default AboutMe;