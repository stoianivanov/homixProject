import { CHANGE_ACTIVE_ITEM } from "../constants.js";

export const changeActiveItem = newItem => ({
  type: CHANGE_ACTIVE_ITEM,
  payload: newItem
});
