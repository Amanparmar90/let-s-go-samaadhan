import React from 'react';
// import './Footer.css';
// import { Link } from 'react-router-dom';
import FooterData from './Footerdata.js';

const Footer = () => {
    return (
        <>
            <div className='main-footer'>
                <div className='footermiddle'>
                    <div className="Description1">
                        <div className="Description"><h2>Samaadhaan</h2><p>The complete Kitchen Solution</p></div>
                        <div className="FooterData.Description">
                            {FooterData.Description.map((Description, index) => (
                                <span key={index}>
                                    <span>{Description.name}</span>
                                    {index !== FooterData.Description.length - 1 && ', '}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="Company1">
                        <div className="Company"><h2>Company</h2></div>
                        <div className="FooterData.companyLinks">
                            {FooterData.companyLinks.map((city, index) => (
                                <span key={index}>
                                    <a href={city.link}>{city.name}</a>
                                    {index !== FooterData.companyLinks.length - 1 && ', '}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="Our App1">
                        <div className="Our App"> <h2>Our App</h2></div>
                        <div className="FooterData.ourAppLinks">
                            {FooterData.ourAppLinks.map((city, index) => (
                                <span key={index}>
                                    <a href={city.link}>{city.name}</a>
                                    {index !== FooterData.ourAppLinks.length - 1 && ', '}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="Contact1">
                        <div className="FooterData.Contact">
                            {FooterData.Contact.map((Contact, index) => (
                                <span key={index}>
                                    <a href={Contact.link}>{Contact.name}</a>
                                    {index !== FooterData.ourAppLinks.length - 1 && ', '}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='footerend'>
                    <div className="copyright1">
                        <div className="copyright"><p>&copy; All copyrights reserved by Samadhaan</p></div>
                        <div className="footer-links">
                            {FooterData.footerBelowLinks.map((city, index) => (
                                <span key={index}>
                                    <a href={city.link}>{city.name}</a>
                                    {index !== FooterData.footerBelowLinks.length - 1 && ', '}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;
