import React from 'react';
import useServices from '../../../../Hooks/useServices';
import ServiceCard from './ServiceCard/ServiceCard';
import './ServiceHome.css'

const ServiceHome = () => {
    const [services] = useServices();
    const sliceService = services.slice(0, 3)
    return (
        <div className='container'>
            <h1 className='text-center mt-5 mb-4 fw-bolder'>Services</h1>
            <div className='mt-2 card-layout'>
                {sliceService.map((service) => (
                    <ServiceCard key={service.id} services={service}></ServiceCard>
                ))}
            </div>
        </div>
    );
};

export default ServiceHome;