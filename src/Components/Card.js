import React from 'react';

import './styles/cardStyle.css';
import CardListItem from './CardListItem';
import Reece from '../assets/images/reece.jpeg';
import Werner from '../assets/images/werner.jpeg';

  
  const PlayerCard = (props) => {
     const data = [
         {  
             id: 1,
             name: 'Callum Hudson Odoi',
             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWRmi9BgjuxNemi_dU_uXYP6wMngvuo3gxtQ&usqp=CAU'
         },
          {
             id: 2,
             name: 'Timo Werner',
             image: Werner
         },
          {
             id: 3,
             name: 'Reece James',
             image: Reece
         }
        ]
    return (
        <div className='side'>
        {data.map(data => {
          return <CardListItem data={data} key={data.id} />;
        })}
      </div>
    );
  };
  
  export default PlayerCard;