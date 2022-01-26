import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <article data-testid="missions">
        <Title headline="Missões" />
        <article className="mission-container">
          { missions.map(({ name, year, country, destination }) => (
            <MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          )) }
        </article>
      </article>
    );
  }
}

export default Missions;
