import React from 'react';
import ReservedDragons from './dragons/ReservedDragons';
import ReservedMissions from './missions/Reserved';
import RocketsProfile from './rockets/ReservedRockets';

const MyProfile = () => (
  <div className="profile-wrapper">
    <ReservedMissions />
    <ReservedDragons />
    <RocketsProfile />
  </div>
);
export default MyProfile;
