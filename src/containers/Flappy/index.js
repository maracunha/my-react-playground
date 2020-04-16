import React, { useState, useEffect } from 'react';
import './styles.css';
import bird from './img/bird.png';

import PairOfBarrier from './PairOfBarrier'

function Flappy() {

  const [flying, setFlying] = useState(false);
  const [height, setHeight] = useState(Number);
  const [width, setWidth] = useState(Number);

  const [pipes, setPipes] = useState([]);

  const [widthOfTheGame, setWidthOfTheGame] = useState(0);
  const [gameHeight, setGameHeight] = useState(Number);

  const spaces = [0, 300, 600, 900, 1200, 1500]

  const handleKeyDown = () => {
    setFlying(true)
  }

  const handleKeyUp = () => {
    setFlying(false)
  }

  const start = (event) => {
    event.target.blur()

    const element = event.target.parentNode
    element.focus()
    
    setWidthOfTheGame(element.offsetWidth)

    setGameHeight(element.offsetHeight)
    setWidth(element.offsetWidth)
    setHeight(gameHeight/2 )

    barreiras( 0, 0, 300)
  }
    
  useEffect(() => {
    //bird screem crashed up or down
    if (height < -10 || height > 600 ) return 
    const newHeight = height + (flying ? 8 : -5)

    // pipe was hit
    
    const timer = setInterval(() => {
      setHeight(newHeight)
    }, 20)
      
    return () => clearInterval(timer)
  }, [height, flying, pipes]);

  const randomBarrierY = (gh) => {
    const up = Math.random() * (gh - 300)
    const down = gh - 300 - up
    
    return ([up, down])
  }

  const barreiras = (up, down, x) => {
    
    setPipes([
      <PairOfBarrier barrierHeight={[400, 100]} pipeX={400} />,
      <PairOfBarrier barrierHeight={[100, 400]} pipeX={400 + 300} />,
      <PairOfBarrier barrierHeight={[100, 400]} pipeX={400 + 600} />
    ])
  }

  return (

    <div className="body">
      <div className="content">
        <h1>Flappy Bird</h1>
        <div 
          className="flappy" 
          tabIndex="0"
          onKeyDown={handleKeyDown} 
          onKeyUp={handleKeyUp}
        >
        <button className="button" onClick={start}>Start</button>
            <img 
              className="bird" 
              src={bird} 
              alt="bird"
              style={{
                bottom: `${height}px`
              }}
            />
         {pipes}
        </div>
      </div>
    </div> 
  );
}

export default Flappy;
