import React, { useEffect } from 'react';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import Soudeur from '../Assets/Home/soud3.jpg';
import Gallery from '../Components/Gallery';
import '../Styles/Home.css';

export default function Home() {
   useEffect(() => {
      document.title = 'Home';
   }, []);

   return (
      <div>
         <body>
            <header>
               <div className="container-img-h1">
                  <img src={Soudeur} alt="personne en train de souder" />
                  <h1>Pour donner vie à vos projets</h1>
               </div>
               <Banner />
            </header>

            <Gallery />
            <div className="fin-de-page"></div>
            <Footer />
         </body>
      </div>
   );
}
