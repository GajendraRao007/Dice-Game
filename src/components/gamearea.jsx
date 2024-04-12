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

    let playGame = ()=>{
        setGameArea(false)
    }

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
        <div className='play-area'>
            <div className='scores-box'>
               <div className='scores'>0</div> 
               <div className='scores-title'>Total Score</div>
            </div>

            <div>
                <span className='NotSelected'>You have not selected any number</span> <br />
                <button id='btn-one' className='number'>1</button>
                <button id='btn-two'  className='number'>2</button>
                <button id='btn-three'  className='number'>3</button>
                <button id='btn-four'  className='number'>4</button>
                <button id='btn-five'  className='number'>5</button>
                <button id='btn-six'  className='number'>6</button>
                <div>
                <span className='select-num'>Select Number</span>
                </div>
            </div>
        </div>

        <div className='dice'>
            <img src={Dice1} alt="" />
            <h1>Click on Dice to roll</h1>
            <button className='reset-btn'>Reset Score</button>
            <button className='show-rules-btn'>Show Rules</button>
        </div>

        <div className='rules'>
            <h1 className='rules-title'>How to play dice game</h1>
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>
        </div>

        </>
    )
}

export default GameArea