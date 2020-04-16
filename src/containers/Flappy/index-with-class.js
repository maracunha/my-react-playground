import React from 'react';
import './styles.css';
import bird from './img/bird.png';

class Flappy extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      height: 0,
      isFlying: false,
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    this.bird()
    this.flyingId = setInterval(
      () => this.play(), 
      20
    );
  }

  componentWillUnmount() {
    clearInterval(this.flyingId);
  }
  handleKeyDown() { 
    this.setState({isFlying: true});
  }
  handleKeyUp() {
    this.setState({isFlying: false});
  }
  bird() {
    const element = document.getElementsByClassName('flappy')
    const gameHeight = element[0].offsetHeight
    this.setState({height: gameHeight/2})
  }
  play() {
    const novoY = this.state.height + (this.state.isFlying ? 8 : -5)

    if (this.state.height > 0 ) {
      this.setState({
        height: novoY
      })
    }
  }


  render() {
    return (
      <div 
        className="body" 
        tabIndex="0"
        onKeyDown={this.handleKeyDown} 
        onKeyUp={this.handleKeyUp} 
      >
        <div className="content">
          <h1>Flappy Bird</h1>
          <div className="flappy">
            <img 
              className="bird" 
              src={bird} 
              alt="bird"
              style={{
                bottom: `${this.state.height}px`
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Flappy;
