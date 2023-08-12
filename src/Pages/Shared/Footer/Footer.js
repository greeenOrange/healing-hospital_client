import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseMedical, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <section className='footer-section px-10 py-6'>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4">
                <div className="footer-contract">
                    <div className="contract-now">
                        <h5 className='my-1.5'>Get in touch</h5>
                        <h2 className='my-3'>Contact us now</h2>
                        <p className='my-1.5'>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from React.</p>
                    </div>
                    <h5 className="text-left my-2">EMERGENCY CONTACT</h5>
                    <div className="emergency-contract grid lg:grid-cols-2 gap-4">
                        <div className="emergency-home">
                            <FontAwesomeIcon icon={faHouseMedical} />
                            <div className="emergency-details emergency-home-details">
                                <p>Free call 24/7</p>
                                <p>+1555 6761 020</p>
                            </div>
                        </div>
                        <div className="emergency-home">
                            <FontAwesomeIcon icon={faUserDoctor} />
                            <div className="home-details emergency-home-details">
                                <h5>HOME VISIT</h5>
                                <p>Chargeable call 24/7</p>
                                <p>+1777 6761 050</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social-media">
                    <div className="social-heading grid lg:grid-cols-2 gap-2">
                        <div className="tooth-whiting mt-3">
                            <div className="tooth-white">
                                <div className="tooth-link">
                                    <h2>Teeth <span className='block'>whitening</span></h2>
                                    <ul>
                                        <li className='mb-2 bg-sky-400'>Laser treatment include</li>
                                        <li className='mb-2 bg-sky-400'>Free teeth cleaning</li>
                                        <li className='mb-2 bg-sky-400'>Additional 10% for next visit</li>
                                    </ul>
                                </div>
                                <img src="https://i.ibb.co/s5vqHQ4/footer-img.png" alt="" />
                            </div>
                        </div>
                        <div className="action">
                            <h5 className='my-1'>Follow us</h5>
                            <h2 className='my-3'>Our Activity</h2>
                            <p className='my-1'>Organically grow the holistic world view of innovation empowerment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;