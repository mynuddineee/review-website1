import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import'./Footer.css';

const Footer = () => {
    return (
        <footer>
               <div className="container-fluid bg-dark text-white">
            <div className="row">
                <div className="col">
                    <div className="footer-container">
                        <div >
                            <img src="./logo512.png" className="logo" alt=""/>
                        </div>
                        <div>
                            <h3 className="text-white fw-bold text-center">Pathshala of Engineers</h3>
                            <p className="text-white text-center fw-bold">Best Online Learning Platform for Engineers </p>
                        </div> 
                    </div>
                </div>
                <div className="col">
                <Container className="">
                    <ul className="nav d-block">
                        <li className="nav-item ">
                            <NavLink to="/home" className="nav-link active text-white" aria-current="page" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/courses" className="nav-link active text-white " aria-current="page">Courses</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/aboutus" className="nav-link active text-white" aria-current="page">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contactus" className="nav-link active text-white" aria-current="page">Contact Us</NavLink>
                        </li>
                        
                    </ul>
                
                </Container>
                </div>
                <div className="col">
                    <div>
                    <Container className="">
                    <ul className="nav d-block">
                        <li className="nav-item ">
                            <NavLink to="#" className="nav-link active text-white" aria-current="page" >Facebook</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="#" className="nav-link active text-white " aria-current="page">Instagram</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="#" className="nav-link active text-white" aria-current="page">Twitter</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="#" className="nav-link active text-white" aria-current="page">WhatsApp</NavLink>
                        </li>
                        
                    </ul>
                
                </Container>
                        
                    </div>
                </div>
            </div>
            <div>
                <p>Copyright@2021 Pathshala of Engineers </p>
            </div>
        </div> 

        
        </footer>
        
    );
};

export default Footer;