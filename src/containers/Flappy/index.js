import React from "react";

import './styles.css'

function novoElemento() {

};

function Bird(alturaJogo) {
  let flying = false

  this.elemento = novoElemento('img', 'bird')
  this.elemento.src = 'imgs/bird.png'

  this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
  this.setY = y => this.elemento.style.bottom = `${y}px`

  window.onkeydown = e => flying = true
  window.onkeyup = e => flying = false

  this.animar = () => {
    const novoY = this.getY() + (flying ? 8 : -5)
    const alturaMaxima = alturaJogo - this.elemento.clientHeight

    if (novoY <= 0) {
      this.setY(0)
    } else if (novoY >= alturaMaxima) {
      this.setY(alturaMaxima)
    } else {
      this.setY(novoY)
    }
  }
  
  this.setY(alturaJogo / 2)
}

function Flappy() {

  return (
    <div className='body'>
      <div className="content">
        <h1>Flappy Bird</h1>
        <div className='flappy'></div>
      </div>
    </div>
  )
};

export default Flappy;
