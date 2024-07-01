import React from 'react';
import './footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMobilePhone } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="box-container">
      <div class="box">
            <h3>quick links</h3>
            <a href="#"><FontAwesomeIcon icon="fa-solid fa-chevron-right" />home</a>
            <a href="#"><FontAwesomeIcon icon="fa-solid fa-chevron-right" />about</a>
            <a href="#"><FontAwesomeIcon icon="fa-solid fa-chevron-right" />doctors</a>
            <a href="#"><FontAwesomeIcon icon="fa-solid fa-chevron-right" />book</a>
            <a href="#"><FontAwesomeIcon icon="fa-solid fa-chevron-right" />blogs</a>
            <a href="#"><FontAwesomeIcon icon="fa-solid fa-chevron-right" />Chatbot</a>
         </div>

         <div class="box">
            <h3>contact info</h3>
            <a href="#"><FontAwesomeIcon icon={faMobilePhone}/>+91 8123418902 </a>
            <a href="#"><FontAwesomeIcon icon={faMobilePhone}/>+91 7975314326</a>
            <a href="#"><FontAwesomeIcon icon={faMobilePhone}/>+91 7483138643</a>
            <a href="#"><FontAwesomeIcon icon={faEnvelope} /> email </a>
            <a href="#"><FontAwesomeIcon icon={faEnvelope} /> email </a>
            <a href="#"><FontAwesomeIcon icon={faEnvelope} /> email </a>
            <a href="#"><i class="fas fa-map-marker-alt"></i> mysuru, india - 400104 </a>
         </div>

         <div class="box">
            <h3>follow us</h3>
            <a href="#"> <FontAwesomeIcon icon={faFacebook} />   facebook </a>
            <a href="#">    <FontAwesomeIcon icon={faTwitter} />    twitter </a>
            <a href="#"> <FontAwesomeIcon icon={faInstagram} />  instagram </a>
            <a href="#">   <FontAwesomeIcon icon={faLinkedinIn} /> linkedin </a>
         </div>
      </div>
    </footer>
  );
}

export default Footer;


