import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import'./Home.css';

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);

    return (
        <div className="container-fluid">
            <Banner></Banner>
        
            <div className="card-container">
                
                
                {
                    services.slice(0, 4).map( service => <Services
                    key = {service.id}
                    service = {service}
                    >

                    </Services>)
                }
            
            </div>
    </div>
    );
};

export default Home;