import DiceImage from '../Images/dicesimg.png';
import Dice1 from '../Images/dice_1.png';
import Dice2 from '../Images/dice_2.png';
import Dice3 from '../Images/dice_3.png';
import Dice4 from '../Images/dice_4.png';
import Dice5 from '../Images/dice_5.png';
import Dice6 from '../Images/dice_6.png';

import { useState } from 'react';


function GameArea(){

    let [showGameArea,setGameArea] = useState(true);
    let [showRules, setShowRules] = useState(true);
    let [hidePlayArea, setHidePlayArea] = useState(false);
    let [currentDice, setCurrentDice] = useState(Dice1)
    let [selectedNumber, setSelectedNumber] = useState(0);
    let [score, setScore] = useState(0);


    let allDice = [Dice1,Dice2,Dice3,Dice4,Dice5,Dice6];

     let showDice = ()=>{
      let randomDice = Math.floor(Math.random() * allDice.length);
      setCurrentDice(allDice[randomDice])
       console.log('clicked');

       if (selectedNumber === randomDice + 1) {
        setScore(score + 1);
    } else {
        setScore(Math.max(0, score - 2));
    }
     }    



    let showRulesbox = ()=>{
       setShowRules(!showRules)
    }

    let playGame = ()=>{
        setGameArea(false)
        setHidePlayArea(true)
    }

    let PickNumber = (number) => {
        setSelectedNumber(number === selectedNumber ? 0 : number);
    };

    let resetScore = () => {
        setScore(0); // Reset the score to 0
    };
   

    return(
        <>
        {showGameArea && (  //wrapped the entire game area JSX game area is only rendered if showGameArea is true

            <div className="game-area">
            <div>
                  <img src={DiceImage} alt="" srcset="" />  
            </div>
            <div>
                <h1 className='game-name'>DICE GAME</h1>
                <button className='play-btn' onClick={playGame}>Play Now</button>
            </div>
            </div>

        )}

        {hidePlayArea && (
            <>
            
            <div className='play-area'>
            <div className='scores-box'>
               <div className='scores'>{score}</div> 
               <div className='scores-title'>Total Score</div>
            </div>

             <div> 
            {selectedNumber === 0 && <span className='NotSelected'>You have not selected any number</span>}<br />
            <button onClick={() => PickNumber(1)} id='btn-one' alt="1" className={`number ${selectedNumber === 1 ? 'selected' : ''}`}>1</button>
                            <button onClick={() => PickNumber(2)} id='btn-two' alt="2" className={`number ${selectedNumber === 2 ? 'selected' : ''}`}>2</button>
                            <button onClick={() => PickNumber(3)} id='btn-three' alt="3" className={`number ${selectedNumber === 3 ? 'selected' : ''}`}>3</button>
                            <button onClick={() => PickNumber(4)} id='btn-four' alt="4" className={`number ${selectedNumber === 4 ? 'selected' : ''}`}>4</button>
                            <button onClick={() => PickNumber(5)} id='btn-five' alt="5" className={`number ${selectedNumber === 5 ? 'selected' : ''}`}>5</button>
                            <button onClick={() => PickNumber(6)} id='btn-six' alt="6" className={`number ${selectedNumber === 6 ? 'selected' : ''}`}>6</button>
            <div>
                <span className='select-num'>Select Number</span>
                </div>
            </div>
        </div>

        <div className='dice'>
            <img src={currentDice} onClick={showDice} alt="" />
            <h1>Click on Dice to roll</h1>
            <button className='reset-btn' onClick={resetScore}>Reset Score</button>
            <button className='show-rules-btn' onClick={showRulesbox}>Show Rules</button>
        </div>

        {showRules && (
            
            <div className='rules'>
            <h1 className='rules-title'>How to play dice game</h1>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>
            </div>
            
        )}
        </>
    )}
        </>
    )
}

export default GameArea