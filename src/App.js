import React, { useState } from 'react';
import './App.css';

import Score from './components/Score';
import Card from './components/Card';
import images from './components/ImageData';
import GameWin from './components/GameWin';

function App() {
  const [ gameWin, setGameWin ] = useState(false);
  const [ score, setScore ] = useState(0);
  const [ highScore, setHighScore ] = useState(0);
  const [ cards, setCards ] = useState([]);


  const handleClick = (e) => {
    let cardID = e.target.name;
    // Win 
    console.log(images.length)
    if (score === (images.length - 1)) {
      setGameWin(true);
    }
    //Lose
      if (cards.includes(cardID)) {
        //reset score
        if (score > highScore) {
          setHighScore(score);
        }

        setScore(0);
        
        // empty clicked cards array
        setCards([]);

      } else {
        // score + 1 for diff card
        setScore(score + 1);

        // + 1 to card array
        setCards([...cards, cardID])
      }
  }

  const handleWin = () => {
    setGameWin(false);
    setScore(0);
    setHighScore(score);
    setCards([]);
  }

  if (gameWin) {
    return (
      <GameWin 
        onClick={handleWin}
      />
    )
  }

  return (
    <div className='App'>
      <header>Meme Card</header>
      <Score 
        score={score} 
        highScore={highScore}
      />
      <div className='game-cards'>
        <Card 
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default App;
