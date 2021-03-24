import React from 'react';
import { useSelector} from 'react-redux'
import Tournament from './tournament'


const TournamentsList = () => {
  const tournaments = useSelector((state) => state.tournaments);
  
  return (
    <div className="tournaments-list">
      {tournaments.map(tournament =>
        <Tournament tournament={tournament} key={tournament.id} />
      )}
    </div>
  );
};

export default TournamentsList
