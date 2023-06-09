import React, { useEffect } from 'react';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import '../Styles/APropos.css';
import pictureApropos from '../Assets/Apropos/pictureAPropos.png';
import Dropdown from '../Components/Dropdown';

export default function APropos() {
   useEffect(() => {
      document.title = 'a propos';
   }, []);

   //state

   const arrayDropdown = [
      {
         id: 1,
         title: 'Fiabilité',
         description:
            'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
      },
      {
         id: 2,
         title: 'Respect',
         description:
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
      },
      {
         id: 3,
         title: 'Service',
         description:
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
      },
      {
         id: 4,
         title: 'Responsabilité',
         description:
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      },
   ];

   // affichage

   return (
      <div>
         <Banner />
         <div className="APropos">
            <header>
               <img
                  src={pictureApropos}
                  alt="montagnes"
                  className="img-Principale"
               />
            </header>
            <section className="section-apropos">
               {arrayDropdown.map((dropdown) => (
                  <Dropdown
                     key={dropdown.id}
                     title={dropdown.title}
                     description={dropdown.description}
                  />
               ))}
            </section>
         </div>
         <Footer />
      </div>
   );
}
