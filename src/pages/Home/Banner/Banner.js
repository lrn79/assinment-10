import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import banner1 from '../../../Images/banner_1.webp'
import banner2 from '../../../Images/banner_2.jpg'

import './Banner.css'

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className='
         row'>
            <div className=' col col-sm-12 col-lg-12 d-block '>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className=" w-100 banner_size "
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption className=' text-height'>

                            <p className='text_title' >Photography is an art if it is My  phonography its just gonna  insane...you can buy my photo with a good price </p>
                            <button onClick={() => navigate('/service')} className='btn_photos'>See all Services</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 banner_size"
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption className=' text-height'>

                            <p className='text_title' >Photography is an art if it is wild phonography its just gonna  insane...you can buy my photo with a good price </p>
                            <button className='btn_photos'>See all photos</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div >
        </div>

    );
};

export default Banner;