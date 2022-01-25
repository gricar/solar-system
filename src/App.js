import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

class App extends React.Component {
  render() {
    const text = 'planetsExemplo';
    return (
      <>
        <Header />
        <SolarSystem />
        <Title headline={ text } />
      </>
    );
  }
}

export default App;
