const ADD_MISSION = 'spacetravelers-hub/missions/ADD_MISSION';
const JOIN_MISSION = 'spacetravelers-hub/missions/JOIN_MISSION';

const initialState = [];

export const addMission = (payload) => ({
  type: ADD_MISSION,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

const updateMissionJoinStatus = (state, id) => {
  const newState = state.map((mission) => {
    if (mission.id === id) {
      return { ...mission, reserved: true };
    }
    return mission;
  });

  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION:
      return [...state, action.payload];
    case JOIN_MISSION:
      return updateMissionJoinStatus(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
