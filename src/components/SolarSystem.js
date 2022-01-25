import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="container">
        <Title headline="Planetas" />
        { Planets.map(({ name, image }) => (
          <PlanetCard key={ name } planetName={ name } planetImage={ image } />)) }
      </div>
    );
  }
}

export default SolarSystem;
