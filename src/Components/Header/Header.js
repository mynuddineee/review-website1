import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="logo-container">
                <div >
                    <img src="./logo512.png" className="logo" alt=""/>
                </div>
                <div>
                    <h1 className="text-primary fw-bold text-center">Pathshala of Engineers</h1>
                    <h5 className="text-success text-center fw-bold">Best Online Learning Platform for Engineers </h5>
                </div> 
            </div>
        
            <Navbar bg="primary" variant="dark">
                <Container>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-link text-white" aria-current="page" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/courses" className="nav-link text-white " aria-current="page">Courses</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/aboutus" className="nav-link text-white" aria-current="page">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contactus" className="nav-link text-white" aria-current="page">Contact Us</NavLink>
                        </li>
                        
                        </ul>
                
                </Container>
            </Navbar>

            <br />
            
            
        </div>
    );
};

export default Header;