import React from 'react';
import './styles/contentStyle.css';
import PlayerCard from './Card';
import './styles/cardStyle.css';
import Stats from './Stats';
import Pulsici from '../assets/images/pulisic.jpg';


import Brands from '../assets/images/footer.jpeg';


const Content = () => {
    return(
        <div>
            <img id='brand' src={Brands}/>
            <div className='container'>
              <div>
                <img className='puli'src={Pulsici} />
                <Stats/>
            </div>
            </div>
            <div className='side'>
              <PlayerCard /> 
            </div>
        </div>
    )
}

export default Content;