import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import MissionsTable from './MissionsTable';
import { ADD_MISSION, createAction } from '../../redux/missions/missions';

const missionsAPI = 'https://api.spacexdata.com/v3/missions';

const populateReduxStore = (missions, dispatch) => {
  missions.forEach((mission) => {
    dispatch(createAction(ADD_MISSION, mission));
  });
};

const moveAPIDataToMissionsArray = (data, dispatch) => {
  const missionsArray = [];

  data.forEach((item) => {
    missionsArray.push({
      id: item.mission_id,
      name: item.mission_name,
      description: item.description,
      reserved: false,
    });
  });

  populateReduxStore(missionsArray, dispatch);
};

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) {
      axios
        .get(missionsAPI)
        .then((missions) => moveAPIDataToMissionsArray(missions.data, dispatch));
    }
  }, []);

  return <MissionsTable />;
};

export default Missions;
