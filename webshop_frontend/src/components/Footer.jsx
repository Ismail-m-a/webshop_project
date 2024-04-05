// Importerar nödvändiga beroenden.
import React from 'react'
import { Navbar, NavbarBrand } from 'react-bootstrap'
import '../css/Footer.css';

// Importerar FontAwesome-komponenten och specifika ikoner för sociala medier
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'

// Lägger till de importerade ikonerna till FontAwesome-biblioteket så att de kan användas genom hela applikationen.
library.add(faFacebook, faInstagram, faYoutube);

// Definierar och exporterar Footer-funktionen som returnerar JSX för footern.
export default function Footer() {
    return (
        <>
            <div className='footer'>
                    <Navbar bg="#f5f5f5" variant="light">
                        <NavbarBrand className="w-100 d-flex justify-content-between px-5">
                            <div className="footer-content">
                                <a href="/" className='footer-title '><h3>Nordic Classy</h3></a>
                                <p className='footer-text'>
                                    Contact us on nordic-classy@business.com or follow us on our social media
                                </p>
                                <div className="social-links">
                                    <ul className='list-unstyled'>
                                        <li>Instagram <a href="https://www.instagram.com"><FontAwesomeIcon icon={["brands", "instagram"]} /></a></li>
                                        <li>Facebook <a href="https://www.facebook.com"><FontAwesomeIcon icon={["brands", "facebook"]} /></a></li>
                                        <li>Youtube <a href="https://www.youtube.com"><FontAwesomeIcon icon={["brands", "youtube"]} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </NavbarBrand>
                    </Navbar> 
            </div>  
        </>
    );
}
