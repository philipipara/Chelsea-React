import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle
  } from 'reactstrap';
import './styles/cardStyle.css'

const CardListItem = props => {
    return (
        <div>
        <Card className='card'>
          <CardImg className='img'style={{width: '100%'}} src={props.data.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{props.data.name}</CardTitle>
          </CardBody>
        </Card>
      </div>
   
    );
  };

export default CardListItem;

