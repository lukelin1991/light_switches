import React, { Component } from 'react';

export class KitchenCon extends Component {
  state = {
    fridge: '🎛',
    stove: '🔥',
    microwave: '🎚',
  };

  handleClick = (event) => {
    this.setState({
      //   fridge: '🌚',
      //   stove: '🌚',
      //   microwave: '🌚',
      [event.target.name]: '🌚',
    });
  };

  render() {
    return (
      <div>
        <p>Are you sure that all the things in the kitchen are off?</p>
        <p>Please check the fridge. It is currently: {this.state.fridge}.</p>
        <p>How about the stove? It is {this.state.stove}.</p>
        <p>
          Did you look at the microwave? Look again. It is{' '}
          {this.state.microwave}.
        </p>
        <p>Double check everything and make sure all these things are OFF.</p>

        {/* Button will change each state but needs to go back to original state when clicked again */}
        <button
          name='fridge'
          onClick={this.handleClick}
          value={this.state.fridge}>
          Fridge Button
        </button>
        <button
          name='stove'
          onClick={this.handleClick}
          value={this.state.stove}>
          Stove Button
        </button>
        <button
          name='microwave'
          onClick={this.handleClick}
          value={this.state.microwave}>
          microwave Button
        </button>
      </div>
    );
  }
}

export default KitchenCon;
