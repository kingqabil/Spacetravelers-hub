import React from 'react';
import ReservedDragons from './dragons/ReservedDragons';
import ReservedMissions from './missions/Reserved';

const MyProfile = () => (
  <div className="profile-wrapper">
    <ReservedMissions />
    <ReservedDragons />
  </div>
);
export default MyProfile;
