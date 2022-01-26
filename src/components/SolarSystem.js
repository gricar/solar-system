import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <article data-testid="solar-system" className="planets-container">
        <Title headline="Planetas" />
        <section className="planets">
          { Planets.map(({ name, image }) => (
            <PlanetCard key={ name } planetName={ name } planetImage={ image } />)) }
        </section>
      </article>
    );
  }
}

export default SolarSystem;
