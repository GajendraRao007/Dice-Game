import DiceImage from '../Images/dicesimg.png';

function GameArea(){
    return(
        <div className="game-area">
            <div>
                  <img src={DiceImage} alt="" srcset="" />  
            </div>
            <div>
                <h1 className='game-name'>DICE GAME</h1>
                <button className='play-btn'>Play Now</button>
            </div>
        </div>
    )
}

export default GameArea