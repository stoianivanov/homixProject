import { CHANGE_ACTIVE_ITEM } from "../constants.js";

const initialState = {
  activeItem: "general"
};

const header = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ACTIVE_ITEM:
      return {
        activeItem: action.payload
      };
    default:
      return state;
  }
};

export default header;
