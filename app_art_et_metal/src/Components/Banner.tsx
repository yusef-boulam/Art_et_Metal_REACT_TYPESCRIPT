import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Banner.css';
import logo from '../Assets/Banner/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Banner() {
   return (
      <div className="global-banner">
         <div className="container-logo-title">
            <Link to="/" className="logo">
               <img src={logo} alt="logo" />
            </Link>
            <h1>Art et Metal</h1>
         </div>
         <Link to="/" className="user">
            <FontAwesomeIcon icon={faUser} style={{ color: '#ffffff' }} />
         </Link>
      </div>
   );
}
