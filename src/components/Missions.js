import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <section className="mission-container">
          { missions.map((missionData) => (
            <MissionCard key={ missionData.name } mission={ missionData } />
          )) }
        </section>
      </div>
    );
  }
}

export default Missions;
