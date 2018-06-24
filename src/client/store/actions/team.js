const receiveTeam = user => ({
  type: "RECEIVED_TEAM",
  payload: user
});

const addDev = dev => ({
  type: "ADD_DEVELOPER",
  dev,
});

const selectTeam = team => ({
  type: "CHANGE_SELECTED_TEAM",
  teamId: team._id,
});
 
export { receiveTeam, addDev, selectTeam };
