const receiveTeam = teams => ({
  type: "RECEIVED_TEAM",
  payload: teams.map(team => ({
    ...team,
    members: team.members.map(member => member[0])
  }))
});

const addDev = dev => ({
  type: "ADD_DEVELOPER",
  dev
});

const selectTeam = team => ({
  type: "CHANGE_SELECTED_TEAM",
  teamId: team._id
});

export { receiveTeam, addDev, selectTeam };
