import React, { Component } from 'react';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="planetContainer">
        <img src={ planetImage } alt={ `Planeta ${planetName}` }></img>
        <p data-testid="planet-name">{ planetName }</p>
      </div>
    );
  }
}

export default PlanetCard;
