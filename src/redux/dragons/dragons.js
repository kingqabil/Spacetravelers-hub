import { type } from "@testing-library/user-event/dist/type";

const ADD_DRAGON = 'spacetravelers-hub/redux/dragons/ADD_DRAGON';
const RESERVE_DRAGON = 'spacetravelers-hub/redux/dragons/RESERVE_DRAGON';

const dragonURL = 'https://api.spacexdata.com/v3/dragons';

const initialState = [];

const addDragon = (dragons) => ({
  type: ADD_DRAGON,
  dragons,
});

export const reserveDragon = (dragonId) => ({
  type: RESERVE_DRAGON,
	dragonId
})

const dragonBooking = (state, id) => {
	const newState = state.map(dragon => {
		if(dragon.dragon_id !== id) {
			return dragon;
		}
		return {...dragon, reserved: true}
	})
  return newState;
}

export const getDragonsFromAPI = () => (async (dispatch) => {
  const response = await fetch(dragonURL);
  const data = await response.json();
  const dragonsArr = [];
  data.forEach((d) => {
    const dragon = {
      dragon_id: d.id,
      dragon_name: d.name,
      dragon_description: d.description,
      dragon_img: d.flickr_images[0],
    };
    dragonsArr.push(dragon);
  });
  dispatch(addDragon(dragonsArr));
});

const dragonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DRAGON:
      return [...state, ...action.dragons];
		case RESERVE_DRAGON:
			return dragonBooking(state, action.dragonId)
    default:
      return state;
  }
};
export default dragonReducer;
