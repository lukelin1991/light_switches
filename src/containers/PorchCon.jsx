import React, { Component } from 'react'

export default class PorchCon extends Component {
    state = {
        porchLight: "💡",
        hallwayLight: "💡"
    }

    render(){
        return(
            <div>
                <p>You walk in the house, because you forgot your keys.. you look and..</p>
                <p>The porch light is currently: {this.state.porchLight}</p>
                <p>The hallway light is currently: {this.state.hallwayLight}</p>
                <p>You should probably check the whole house, and turn off all the lights before you leave.</p>
            </div>
        )
    }
}
