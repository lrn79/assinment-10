import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = ({ services }) => {
    const { description, name, img, price } = services;
    const navigate = useNavigate()
    return (
        <div className='card_design  m-5'>
            <div className=''>
                <div >
                    <h3 className='m-3 fw-bolder'>Package: {name}</h3>
                    <img className='reviews_img ' src={img} alt="" srcset="" />

                </div>
                <h4 className='mt-2'>"{description}"</h4>
                <h2 className='mt-4 fw-bolder'>Price: ${price}</h2>
                <button onClick={() => navigate('/cheakout')} className='mt-3 d-block mx-auto btn_photos'>checkout service</button>


            </div>
        </div>
    );
};

export default ServiceCard;