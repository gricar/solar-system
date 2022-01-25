import React, { Component } from 'react';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props.mission;
    return (
      <div data-testid="mission-card" className="mission-card">
        <p data-testid="mission-name">{ name }</p>
        <div className="mission-details">
          <p data-testid="mission-year">{ year }</p>
          <p data-testid="mission-country">{ country }</p>
          <p data-testid="mission-destination">{ destination }</p>
        </div>
      </div>
    );
  }
}

export default MissionCard;
