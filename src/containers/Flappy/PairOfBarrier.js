import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const PairOfBarrier = (props) => {

  const [up, down] = props.barrierHeight

  // useEffect(() => {
  //   const displacement = 3

  //   if(isPlaying){
  //     const newX = x - displacement
  //     const time = setInterval(() => {
  //       setX(newX)
  //     }, 20)
    
  //     return () => clearInterval(time);
  //   }
  // },[])

  return (
    <div className="pair-of-barrier" style={{left: props.gameX}}>
      <div className="barrier">
        <div className="body-barrier" style={{height: up}}></div>
        <div className="border-barrier" ></div>
      </div>
      <div className="barrier">
        <div className="border-barrier"></div>
        <div className="body-barrier" style={{height: down}}></div>
      </div>
    </div>
  )
}

export default PairOfBarrier;
