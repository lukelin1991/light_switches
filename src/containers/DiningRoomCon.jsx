import React, { Component } from 'react'

export class DiningRoomCon extends Component {
    state = {
        chandelier: "💡",
        tableLight: "💡" 
    }
    render() {
        return (
            <div>
               <p>Make sure that all the lights are off in the dining room.</p>
               <p>Your chandelier is currently {this.state.chandelier} and your table light is {this.state.tableLight} </p> 
            </div>
        )
    } 
} 

export default DiningRoomCon