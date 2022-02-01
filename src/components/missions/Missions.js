import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { addMission } from '../../redux/missions/missions';

const missionsAPI = 'https://api.spacexdata.com/v3/missions';

const populateReduxStore = (missions, dispatch) => {
  missions.forEach((mission) => {
    dispatch(addMission(mission));
  });
};

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) {
      axios
        .get(missionsAPI)
        .then((missions) => populateReduxStore(missions.data, dispatch));
    }
  }, []);

  return <h1>Missions</h1>;
};

export default Missions;
