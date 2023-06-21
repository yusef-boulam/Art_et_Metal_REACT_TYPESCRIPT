import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Components/Banner';
import '../Styles/404.css';
import Footer from '../Components/Footer';

export default function Error404() {
   useEffect(() => {
      document.title = 'Error404';
   }, []);

   return (
      <div>
         <Banner />
         <h1>404</h1>
         <p>Oups! La page que vous demandez n'existe pas.</p>
         <Link to="/" className="link404">
            Retourner sur la page d’accueil
         </Link>
         <Footer />
      </div>
   );
}
