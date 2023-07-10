import '../Styles/Dropdown.css';
import React, { useState } from 'react';
import Arrow from '../Assets/Apropos/Arrow.png';

interface IDropdownProps {
   title: string;
   description: string;
}

function Dropdown({ title, description }: IDropdownProps) {
   //CREATION OF THE STATE
   const [isOpen, setIsOpen] = useState(false);

   //FUNCTION which modifies isOpen on CLICK
   function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
      event.preventDefault();

      //change of state of isOpen (open/close)
      let CopyisOpen = false;
      isOpen ? (CopyisOpen = false) : (CopyisOpen = true);

      //we save in the STATE
      setIsOpen(CopyisOpen);
   }

   //DISPLAY
   // if isOpen we display the description
   // otherwise we rotate the image arrow
   return (
      <div className="container-Dropdown">
         <button className="Dropdown" onClick={handleClick}>
            {title}
            {isOpen ? (
               <img
                  className="img-open"
                  src={Arrow}
                  alt="fleche pour fermer descriptifs"
               />
            ) : (
               <img
                  className="img-close"
                  src={Arrow}
                  alt="fleche pour ouvrir descriptifs"
               />
            )}
         </button>

         {isOpen && <div className="descriptif">{description}</div>}
      </div>
   );
}

export default Dropdown;
