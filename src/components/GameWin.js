import React from 'react'
import winImage from '../images/winImage.jpeg';

const GameWin = (props) => {
    return (
        <div 
            className="congrats"
            onClick={props.onClick}
        >
            <img 
                src={winImage} 
                alt="Leonardo Happy"
            />
            <div>
                Congrats you Won!
            </div>
        </div>
    )
}

export default GameWin;
