import React from 'react';
// import './Footer.css';
// import { Link } from 'react-router-dom';
import FooterData from './Footerdata.js';

const Footer = () => {
    return (
        <>
            <div className='main-footer'>

                <div className='footertop'>
                    <div className="citiesheadline"><h3>We are available in the cities &gt;</h3></div>
                    <div className="cities">
                        {FooterData.cities.map((city, index) => (
                            <span key={index}>
                                <a href={city.link}>{city.name}</a>
                                {index !== FooterData.cities.length - 1 && ', '}
                            </span>
                        ))}
                    </div>
                </div>


                <div className='footermiddle'>
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

                    <div className="Jobs and Career1">
                        <div className="Jobs and Career"><h2>Jobs and Career</h2></div>
                        <div className="FooterData.jobsAndCareerLinks">
                            {FooterData.jobsAndCareerLinks.map((city, index) => (
                                <span key={index}>
                                    <a href={city.link}>{city.name}</a>
                                    {index !== FooterData.jobsAndCareerLinks.length - 1 && ', '}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="Help and Support1">
                        <div className="Help and Support"><h2>Help and Support</h2></div>
                        <div className="FooterData.helpAndSupportLinks">
                            {FooterData.helpAndSupportLinks.map((city, index) => (
                                <span key={index}>
                                    <a href={city.link}>{city.name}</a>
                                    {index !== FooterData.helpAndSupportLinks.length - 1 && ', '}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="Company Culture1">
                        <div className="Company Culture"><h2>Company</h2></div>
                        <div className="FooterData.companyCultureLinks">
                            {FooterData.companyCultureLinks.map((city, index) => (
                                <span key={index}>
                                    <a href={city.link}>{city.name}</a>
                                    {index !== FooterData.companyCultureLinks.length - 1 && ', '}
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

                    <div className="Follow Us1">
                        <div className="Follow Us"> <h2>Follow Us</h2></div>
                        <div className="FooterData.followUsLinks">
                            {FooterData.followUsLinks.map((city, index) => (
                                <span key={index}>
                                    <a href={city.link}>{city.name}</a>
                                    {index !== FooterData.followUsLinks.length - 1 && ', '}
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
