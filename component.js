import React from "react";
import ReactDOM from "react-dom";
import "./conversor.css";

class ValueInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  changeInputValue = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <form className="card">
        <h1 className="title">Converter</h1>
        <div>
          <p className="inputhead">Celsius: </p>
          <input
            className="input"
            id="numberInput"
            type="number"
            onChange={this.changeInputValue}
            placeholder="0"
          />
          <p> Fahrenheit: {this.state.value * 1.8 + 32}</p>
          <p> Kelvin: {this.state.value * 1 + 273}</p>
        </div>
      </form>
    );
  }
}

export default ValueInput;
