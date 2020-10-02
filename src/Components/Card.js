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
             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWRmi9BgjuxNemi_dU_uXYP6wMngvuo3gxtQ&usqp=CAU',
             country: 'England',
             age: 19,
             team: 'No'
         },
          {
             id: 2,
             name: 'Timo Werner',
             image: Werner,
             country: 'Germany',
             age: 22,
             team: 'Yes'
         },
          {
             id: 3,
             name: 'Reece James',
             image: Reece,
             country: 'England',
             age: 20,
             team: 'No'
         }
        ]
    return (
        <div>
        {data.map(data => {
          return <CardListItem data={data} key={data.id} />;
        })}
      </div>
    );
  };
  
  export default PlayerCard;