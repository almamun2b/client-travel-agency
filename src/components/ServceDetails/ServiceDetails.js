import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://aqueous-eyrie-03916.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);


    return (
        <div>
            <h1>Details of: {service.name}</h1>
            <p><small>Id: {serviceId}</small></p>
            <img src={service.image} alt="" />
            <h4>Price: {service.price}</h4>
            <p>Description: {service.description}</p>
        </div>
    );
};

export default ServceDetails;