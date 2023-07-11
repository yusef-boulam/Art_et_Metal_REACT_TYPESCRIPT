import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faHouse,
   faList,
   faCircleInfo,
   faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
   return (
      <footer className="global-footer">
         <nav className="nav-footer">
            <ul className="nav-footer">
               <li>
                  <Link to="/" className="nav-accueil">
                     <FontAwesomeIcon
                        icon={faHouse}
                        style={{ color: '#ffffff' }}
                     />
                  </Link>
               </li>
               <li>
                  <Link to="/Project" className="nav-projets">
                     <FontAwesomeIcon
                        icon={faList}
                        style={{ color: '#ffffff' }}
                     />
                  </Link>
               </li>
               <li>
                  <Link to="/Contact" className="nav-contact">
                     <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ color: '#ffffff' }}
                     />
                  </Link>
               </li>
               <li>
                  <Link to="/APropos" className="nav-shop">
                     <FontAwesomeIcon
                        icon={faCircleInfo}
                        style={{ color: '#ffffff' }}
                     />
                  </Link>
               </li>
            </ul>
         </nav>
      </footer>
   );
}
