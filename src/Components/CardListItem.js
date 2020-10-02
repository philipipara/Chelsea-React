import React, { useState } from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import './styles/cardStyle.css'
import ReactCardFlip from 'react-card-flip';

const CardListItem = props => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

    return (
        <div>
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        <Card className='card'>
          <CardImg onClick={handleClick} className='img'style={{width: '100%'}} src={props.data.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{props.data.name}</CardTitle>
          </CardBody>
        </Card>
        <Card className='back' onClick={handleClick}>
          <CardTitle>{props.data.name}</CardTitle>
          <div className='backBox'>
          <p>Age: {props.data.age}</p>
          <p>Country: {props.data.country}</p>
          <p>Plays for National Team: {props.data.team}</p>
          </div>
        </Card>
        </ReactCardFlip>
      </div>
   
    );
  };

export default CardListItem;

