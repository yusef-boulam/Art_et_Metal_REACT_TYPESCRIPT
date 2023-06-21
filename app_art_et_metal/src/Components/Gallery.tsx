import { useEffect, useState } from 'react';
import Card from './Card';
import Data from '../datas/datas.js';
import styled from 'styled-components';

const GaleryStyle = styled.section`
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
`;

const Gallery = () => {
   interface Accommodation {
      id: string;
      title: string;
      cover: string;
      pictures: string[];
   }

   // state (état, données)
   const [datas, setDatas] = useState<any>([]);

   // use effect pour la mise à jour des datas
   useEffect(() => {
      // Suppose que Data est importé d'ailleurs, et qu'il est du type DataType[]
      setDatas(Data);
   }, []);

   interface DataType {
      id: string;
      cover: string;
      title: string;
   }

   return (
      // affichage
      <GaleryStyle>
         {datas.map((data: any) => (
            <Card
               key={data.id}
               id={data.id}
               cover={data.cover}
               title={data.title}
            />
         ))}
      </GaleryStyle>
   );
};

export default Gallery;
