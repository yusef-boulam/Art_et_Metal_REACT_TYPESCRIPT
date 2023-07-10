import { useEffect, useState } from 'react';
import Card from './Card';
import Data from '../datas/datas.js';
import styled from 'styled-components';

const GaleryStyle = styled.section`
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
`;

// to be updated once the data is known
const Gallery = () => {
   interface Accommodation {
      id: string;
      title: string;
      cover: string;
      pictures: string[];
   }

   // state (état, données)
   const [datas, setDatas] = useState<any>([]);

   // use effect for data update
   useEffect(() => {
      setDatas(Data);
   }, []);

   // to be set once the DATAS are known
   interface DataType {
      id: string;
      cover: string;
      title: string;
   }

   return (
      // display
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
