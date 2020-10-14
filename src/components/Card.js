import React from 'react'
import shuffleCards from '../components/ShuffleCards';
import cardImages from '../components/ImageData';

const Card = (props) => {
    return shuffleCards(cardImages).map(card => (
        <div 
            className='card-div'
            key={card}
            onClick={props.handleClick}
        >
            <img 
                className='card-image'
                src={card} 
                alt=""
                name={card}
            />
        </div>
    ));
}

export default Card
