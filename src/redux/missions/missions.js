const ADD_MISSION = 'spacetravelers-hub/missions/ADD_MISSION';

const initialState = [];

export const addMission = (payload) => ({
  type: ADD_MISSION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
