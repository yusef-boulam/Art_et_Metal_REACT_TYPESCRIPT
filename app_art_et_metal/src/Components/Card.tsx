import { Link } from 'react-router-dom';
import React from 'react';
import '../Styles/Card.css';

interface CardProps {
   id: string;
   cover: string;
   title: string;
}

function Card({ id, cover, title }: CardProps) {
   return (
      <Link to={`/Project/${id}`} className="card">
         <div className="imgCard">
            <img src={cover} alt="appartement" />
            <div className="linearGradient"></div>
         </div>
         <h2>{title}</h2>
      </Link>
   );
}

export default Card;
