import React from 'react';
import { useSelector } from 'react-redux';

const ReservedMissions = () => {
  const selectedMissins = useSelector((state) => state.missions);
  const reservedMissions = selectedMissins.filter(
    (mission) => mission.reserved === true,
  );
  return (
    <div className="profile-container">
      <h4>My missions</h4>
      {reservedMissions.map((mission) => (
        <div key={mission.id}>
          <p>{mission.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ReservedMissions;
