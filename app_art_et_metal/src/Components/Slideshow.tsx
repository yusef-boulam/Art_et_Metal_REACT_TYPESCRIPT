import '../Styles/Slideshow.css';
import React, { useState } from 'react';
import arrowBack from '../Assets/ficheLogement/arrowBack.png';
import arrowForward from '../Assets/ficheLogement/arrowForward.png';

interface IarrayBalls {
   picture: string;
   active: boolean;
}

function Slideshow(data: any) {
   // creating an empty array for BALLS////////////////////////////////////////////////////////////////////////
   const arrayBalls: IarrayBalls[] = [];

   // we add the url and the white color for each photo
   data.data.pictures.forEach((url: string) => {
      arrayBalls.push({ picture: url, active: false });
   });

   // CREATION OF THE STATE
   const [picture, setPictures] = useState(data.data.cover);

   // CREATION OF THE STATE PICTURE AND BALL
   const [balls, setBall] = useState(arrayBalls);

   //FUNCTION that modifies picture on CLICK (return to previous photo)//////////////////////////////////////////////////////////////////////////
   function handleClickBack(event: React.MouseEvent<HTMLImageElement>) {
      event.preventDefault();

      // we recover the index of the previous photo in the pictures table
      let newIndex = data.data.pictures.indexOf(picture) - 1;

      // if the new index is negative, we start again with the largest index of the array
      newIndex < 0 && (newIndex = data.data.pictures.length - 1);

      // make a copy of the table
      const copyBall = [...balls];

      // resetting the balls
      copyBall.map((ball) => (ball.active = false));

      // we modify active that we pass to true
      copyBall[newIndex].active = true;

      // we save in the state
      setBall(copyBall);

      // we save in the state
      setPictures(data.data.pictures[newIndex]);
   }

   // FUNCTION that modifies picture on CLICK (next picture)////////////////////////////////////////////////////////////////////////////////////////////////
   function handleClickForward(event: React.MouseEvent<HTMLImageElement>) {
      event.preventDefault();

      // we recover the index of the next photo in the pictures array
      let newIndex = data.data.pictures.indexOf(picture) + 1;
      // if the new index is greater than the size of the array, we restart at the beginning of the array

      newIndex === data.data.pictures.length && (newIndex = 0);

      // make a copy of the table
      const copyBall = [...balls];

      // resetting the balls
      copyBall.map((ball) => (ball.active = false));

      // we modify active that we pass to true
      copyBall[newIndex].active = true;

      // we save in the state
      setBall(copyBall);

      // we save in the STATE
      setPictures(data.data.pictures[newIndex]);
   }

   // we retrieve the id of the selected ball
   function handleClickBall(event: React.MouseEvent<HTMLImageElement>) {
      event.preventDefault();
      // make a copy of the table
      const copyBall: IarrayBalls[] = [...balls];
      // resetting the balls
      copyBall.map((ball) => (ball.active = false));

      // we check if ball exists and we modify active that we pass to true
      const foundBall = copyBall.find(
         (ball) => ball.picture === event.currentTarget.id
      );
      if (foundBall) {
         foundBall.active = true;
      }

      // we save in the state
      setBall(copyBall);

      // we save in the state
      setPictures(event.currentTarget.id);
   }

   return (
      <div className="carrousel">
         <img
            className="imgLogement"
            src={picture}
            alt="interieure du logement"
         />

         {/* display of arrows and balls only if several photos */}
         {data.data.pictures.length > 1 && (
            <div className="arrowBall">
               <div className="container-arrow">
                  {/* arrow back */}
                  <img
                     className="arrow"
                     onClick={handleClickBack}
                     src={arrowBack}
                     alt="arrow back"
                  />

                  {/* arrow forward */}
                  <img
                     className="arrow"
                     onClick={handleClickForward}
                     src={arrowForward}
                     alt="arrow forward"
                  />
               </div>

               {/* BALL */}

               <div className="container-ball">
                  {balls.map((picture) =>
                     picture.active ? (
                        <div
                           className="ball-black"
                           id={picture.picture}
                           key={picture.picture}
                           onClick={handleClickBall}
                        ></div>
                     ) : (
                        <div
                           className="ball-white"
                           id={picture.picture}
                           key={picture.picture}
                           onClick={handleClickBall}
                        ></div>
                     )
                  )}
               </div>
            </div>
         )}
      </div>
   );
}

export default Slideshow;
