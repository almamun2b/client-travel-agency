import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-left col-md-4 col-sm-6">
                    <p className="about">
                        <span> About Our Travel Agency</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
                        ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
                    </p>

                </div>
                <div className="footer-center col-md-4 col-sm-6">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span> 420, Bhooter Goli</span> Dhaka, Bangladesh</p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p> 01710-000000</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><Link to="/home">office@company.com</Link></p>
                    </div>
                </div>
                <div className="footer-right col-md-4 col-sm-6">
                    <h2><span> Travel Agency</span></h2>
                    <p className="menu">
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/home">Services</Link>
                        <Link to="/home">Contact</Link>
                    </p>
                    <p className="name"> Travel Agency &copy; 2021</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

