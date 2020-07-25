import React from 'react';
import './App.css';
import PorchCon from './containers/PorchCon';
import LivingRoomCon from './containers/LivingRoomCon'
import DiningRoomCon from './containers/DiningRoomCon'

function App() { 
  return (
    <div className="App">
      <PorchCon />
      <LivingRoomCon />
      <DiningRoomCon />
    </div>
  );
}

export default App;
