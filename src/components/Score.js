import React from 'react'

const Score = (props) => {

    return (
        <div className="score">
            <div>Score: {props.score}</div>
            <div>High Score: {props.highScore}</div>
        </div>
    )
}

export default Score
