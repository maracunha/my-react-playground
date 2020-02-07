import React from "react";

class List extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: ["foo", "bar"]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const items = this.state.items.slice();
    items.unshift("baz");

    this.setState({
      items
    });
  }

  render() {
    const Spread = () => <div foo="bar" />;
    return (
      <div>
        <Spread />
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>
              {item}
              <input type="text" />
            </li>
          ))}
        </ul>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default List;
