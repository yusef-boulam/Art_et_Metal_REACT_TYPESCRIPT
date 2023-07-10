import '../Styles/FicheLogement.css';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import Data from '../datas/datas';
import Dropdown from '../Components/Dropdown';
import Tag from '../Components/Tag';
import Slideshow from '../Components/Slideshow';
import Error404 from '../Pages/Error404';

export default function Project() {
   /////////////////////////////////////////////////////
   // we retrieve the id of the accommodation
   const Id = () => {
      const { id } = useParams();
      return id;
   };

   const id = Id();

   ////////////////////////////////////////////////////////////////
   //LOADING DATA
   // state (état, données)
   const [datas] = useState<any>(Data);
   // we retrieve the object corresponding to our accommodation in data
   const data = datas.find((data: any) => id === data.id);

   console.log(data);

   // if id not found in the data, the error page is displayed

   if (data === undefined) {
      return <Error404 />;
   }

   // change of title
   document.title = `Fiche logement / ${data.title}`;

   ///////////////////////////////////////////////////////////////////
   // WE CREATE A DROPDOWN BOARD (description/equipment)
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
            // we loop on the equipment in the data and we implement the li in the description
            <ul className="container-equipement" key={10}>
               {data.equipments.map((equipement: any, index: any) => {
                  return <li key={index}>{equipement}</li>;
               })}
            </ul>,
         ],
      },
   ];

   ///////////////////////////////////////////////////////////////////////////
   //////////////////////////////////DISPLAY////////////////////////////////////
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
