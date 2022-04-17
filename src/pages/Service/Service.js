import React from 'react';
import useServices from '../../Hooks/useServices';
import ServiceCard from '../Home/Banner/ServiceHome/ServiceCard/ServiceCard';

const Service = () => {
    const [services] = useServices();
    return (
        <div>
            <h1 className='text-center mt-3 fw-bolder'>Total service : {services.length}</h1>
            <div className='container'>

                <div className='mt-2 card-layout'>
                    {services.map((service) => (
                        <ServiceCard key={service.id} services={service}></ServiceCard>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Service;