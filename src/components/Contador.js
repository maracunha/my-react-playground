import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import './contador.css'

class Contador extends React.Component {
  state = {
    number: this.props.numeroInicial
  };

  maisUm = (e) => {
    this.setState({number: this.state.number + 1})
    const span = e.target.nextSibling
    // span.classList.add("deleted");
    span.style="display: none;"
  }

  menusUm = () => {
    this.setState({number: this.state.number - 1})
  }

  alteraNumero = diferenca => {
    this.setState({number: this.state.number + diferenca})
  }

  render() {
    const disabled = true;

    return (
      <div>
        <br/><br/>
        <div>Number: {this.state.number}</div>
        <button onClick={this.maisUm}>Inc</button>
        <span>Teste solto aqui</span>
        <div title="This is my tooltip"></div>
        <button onClick={this.menusUm}>Dec</button>
        <button onClick={() => this.alteraNumero(+10)}>Inc 10</button>
        <Tooltip  title={ disabled ? "Diminui em 10" : ""}>
          <span>
            <button disabled={disabled} style={disabled ? { pointerEvents: "none" } : {}} onClick={() => this.alteraNumero(-10)}>Dec 10</button>
          </span>
        </Tooltip>
      </div>
    )
  }
};

export default Contador;