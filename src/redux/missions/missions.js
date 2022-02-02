export const ADD_MISSION = 'spacetravelers-hub/missions/ADD_MISSION';
export const JOIN_MISSION = 'spacetravelers-hub/missions/JOIN_MISSION';
export const LEAVE_MISSION = 'spacetravelers-hub/missions/LEAVE_MISSION';

const initialState = [];

export const createAction = (actionType, payload) => ({ type: actionType, payload });

const updateMissionReservedStatus = (state, id, reservation = 'reserved') => {
  let newState;

  if (reservation === 'cancel') {
    newState = state.map((mission) => {
      if (mission.id === id) {
        return { ...mission, reserved: false };
      }
      return mission;
    });
  } else {
    newState = state.map((mission) => {
      if (mission.id === id) {
        return { ...mission, reserved: true };
      }
      return mission;
    });
  }

  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION:
      return [...state, action.payload];
    case JOIN_MISSION:
      return updateMissionReservedStatus(state, action.payload);
    case LEAVE_MISSION:
      return updateMissionReservedStatus(state, action.payload, 'cancel');
    default:
      return state;
  }
};

export default reducer;
