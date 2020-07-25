import React, { Component } from 'react';

export class KitchenCon extends Component {
  state = {
    fridge: '🎛',
    stove: '🔥',
    microwave: '🎚',
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
      </div>
    );
  }
}

export default KitchenCon;
