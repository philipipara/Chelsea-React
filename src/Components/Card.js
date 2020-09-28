import React from 'react';

import './styles/cardStyle.css';
import CardListItem from './CardListItem';

  
  const PlayerCard = (props) => {
     const data = [
         {  
             id: 1,
             name: 'Callum Hudson Odio',
             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWRmi9BgjuxNemi_dU_uXYP6wMngvuo3gxtQ&usqp=CAU'
         },
          {
             id: 2,
             name: 'Chirstian Pulisic',
             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWRmi9BgjuxNemi_dU_uXYP6wMngvuo3gxtQ&usqp=CAU'
         },
          {
             id: 3,
             name: 'Reece James',
             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWRmi9BgjuxNemi_dU_uXYP6wMngvuo3gxtQ&usqp=CAU'
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