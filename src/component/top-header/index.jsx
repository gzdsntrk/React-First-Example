import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF ,faTwitter,  faPinterest, faGoogle, faBehance, faDribbble,} from '@fortawesome/free-brands-svg-icons';




const TopHeader = () => {
return(
    <div className="navbar">
    <div className="container">
        <div className="navbar-box">

            <div className="connect">
                <div className="mail"><i className="fa-regular fa-envelope"></i> info@reen.com</div>
                <div className="phone"><i className="fa-solid fa-mobile-screen-button"></i> +00 (123) 456 78 90</div>
            </div>
            <div className="social">
                <div className="facebook"><FontAwesomeIcon icon={faFacebookF} /></div>
                <div className="google"><FontAwesomeIcon icon={faGoogle} /></div>
                <div className="twitter"><FontAwesomeIcon icon={faTwitter} /></div> 
                <div className="pinterest"><FontAwesomeIcon icon={faPinterest} /></div>
                <div className="behance"><FontAwesomeIcon icon={faBehance} /></div>
                <div className="dribbble"><FontAwesomeIcon icon={faDribbble} /></div>
                
            </div>
        </div>
    </div>
</div>

)
}


export default TopHeader