import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <section data-testid="planet-card" className="planets-cards">
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className={
            planetName.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') // https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
          }
        />
        <p data-testid="planet-name">{ planetName }</p>
      </section>
    );
  }
}

export default PlanetCard;

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
