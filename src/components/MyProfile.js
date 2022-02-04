import React from 'react';
import ReservedDragons from './dragons/ReservedDragons';
import ReservedMissions from './missions/Reserved';
import ReservedRockets from './rockets/ReservedRockets';

const MyProfile = () => (
  <div className="profile-wrapper">
    <ReservedMissions />
    <ReservedDragons />
    <ReservedRockets />
  </div>
);
export default MyProfile;
