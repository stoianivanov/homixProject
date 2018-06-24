const teams = (state = { teams: [{ members: [] }], selectedTeamId: -1 }, action) => {
  switch (action.type) {
    case "RECEIVE_FREELANCERS": {
      return {
        ...state,
        freeDevs: action.payload
      };
    }
    case "RECEIVED_TEAM": {
      return {
        ...state,
        teams: action.payload,
        selectedTeamId: -1,
        freeDevs: []
      };
    }
    case "CHANGE_SELECTED_TEAM": {
      return {
        ...state,
        selectedTeamId: action.teamId
      };
    }
    case "ADD_DEVELOPER": {
      const copySelectedTeam = {
        ...state.teams.filter(team => team._id == state.selectedTeamId)[0]
      };
      copySelectedTeam.members.push(action.dev);

      return {
        ...state,
        teams: [
          ...state.teams.filter(team => team._id !== state.selectedTeamId),
          copySelectedTeam
        ],
        selectedTeamId: -1
      };
    }
    default:
      return state;
  }
};

export default teams;
