import React, { Component } from 'react'

export class LivingRoomCon extends Component {

    state = {
        livingRoomLight: "💡",
        TV: "📺",
        tallLampLight: "💡"
    }

    render() {
        return (
            <div>
                <p>You walk to the living room to make sure that you've turned everything off. </p>
                <p>the TV is currently: {this.state.TV}</p>
                <p>The living room light is: {this.state.livingRoomLight}</p>
                <p>The tall lamp light currently is: {this.state.tallLampLight}</p>
            </div>
        )
    }
}

export default LivingRoomCon
