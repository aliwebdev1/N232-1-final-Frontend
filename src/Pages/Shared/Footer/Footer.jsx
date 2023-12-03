import React from 'react';
import footer from '../../../assets/images/footer-bg.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer
                style={{
                    background: `url(${footer})`,
                    backgroundSize: 'cover'
                }}
                className="p-10 container mx-auto">
                <div className="footer">
                    <div>
                        <header className="footer-title">Services</header>
                        <Link to='/' className="link link-hover">Emergency Checkup</Link>
                        <a className="link link-hover">Monthly Checkup</a>
                        <a className="link link-hover">Weekly Checkup</a>
                        <a className="link link-hover">Deep Checkup</a>
                    </div>
                    <div>
                        <header className="footer-title">ORAL HEALTH</header>
                        <a className="link link-hover">Fluoride Treatment</a>
                        <a className="link link-hover">Cavity Filling</a>
                        <a className="link link-hover">Teath Whitening</a>
                    </div>
                    <div>
                        <header className="footer-title">OUR ADDRESS</header>
                        <a className="link link-hover">New York - 101010 Hudson</a>
                    </div>
                </div>

                <div className='text-center mt-32'>
                    <p>Copyright 2022 All Rights Reserved</p>
                </div>
            </footer>

        </>
    );
};

export default Footer;