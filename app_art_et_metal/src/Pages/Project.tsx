import '../Styles/FicheLogement.css';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import Data from '../datas/datas';
import Dropdown from '../Components/Dropdown';
import Tag from '../Components/Tag';
import Stars from '../Components/Stars';
import Slideshow from '../Components/Slideshow';
import Error404 from '../Pages/Error404';

export default function Project() {
   /////////////////////////////////////////////////////
   // on recupere l'id du logement
   const Id = () => {
      const { id } = useParams();
      return id;
   };

   const id = Id();

   ////////////////////////////////////////////////////////////////
   //CHARGEMENT DES DATAS
   // state (état, données)
   const [datas] = useState<any>(Data);
   // on recupere l'objet correspondant à notre logement dans data
   const data = datas.find((data: any) => id === data.id);

   console.log(data);

   //si id non trouvé dans les datas on affiche la page erreur

   if (data === undefined) {
      return <Error404 />;
   }

   //modification du title
   document.title = `Fiche logement / ${data.title}`;

   ///////////////////////////////////////////////////////////////////
   //ON CREE UN TBLEAU POUR LES DROPDOWN(descrition/equipement)
   const arrayDropdown = [
      {
         id: 6,
         title: 'Description',
         description: data.description,
      },
      {
         id: 7,
         title: 'Equipement',
         description: [
            // on boucle sur les equipements dans la data et on implemente les li dans la description
            <ul className="container-equipement" key={10}>
               {data.equipments.map((equipement: any, index: any) => {
                  return <li key={index}>{equipement}</li>;
               })}
            </ul>,
         ],
      },
   ];

   ///////////////////////////////////////////////////////////////////////////
   //////////////////////////////////AFFICHAGE////////////////////////////////////
   return (
      <div>
         {/* BANNER */}

         <Banner />
         <div className="page-ficheLogement">
            <header>
               {/* CARROUSEL */}

               <Slideshow data={data} />

               {/* TITLE + TAG */}
               <div className="container-title-tag-user">
                  <div className="container-title-tag">
                     <div className="container-title-location">
                        <h1>{data.title}</h1>
                        <p>{data.location}</p>
                     </div>

                     <div className="container-tag">
                        {data.tags.map((tag: any) => (
                           <Tag tag={tag} key={tag} />
                        ))}
                     </div>
                  </div>

                  {/* USER + STARS */}
                  <div className="container-user-stars">
                     <div className="container-name-photoUser">
                        <p>{data.host.name}</p>
                        <img src={data.host.picture} alt="user" />
                     </div>

                     <div className="container-stars">
                        {/* <Stars rating={data.rating} /> */}
                     </div>
                  </div>
               </div>
            </header>

            {/* DROPDOWN */}
            <div className="container-dropdown">
               {arrayDropdown.map((dropdown) => (
                  <div className="dropdown" key={dropdown.id}>
                     <Dropdown
                        title={dropdown.title}
                        description={dropdown.description}
                     />
                  </div>
               ))}
            </div>

            {/* FOOTER */}
         </div>

         <Footer />
      </div>
   );
}
