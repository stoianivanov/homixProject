import { bindActionCreators } from "../../../../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux";

const teams = (state = { teams: [{ members: [] }] }, action) => {
  switch (action.type) {
    case "RECEIVED_TEAM": {
      return { teams: action.payload, selectedTeamId: -1 };
    }
    case "CHANGE_SELECTED_TEAM": {
      return {
        ...state,
        selectedTeamId: action.teamId
      };
    }
    case "ADD_DEVELOPER": {
      const copySelectedTeam = {...state.teams.filter(team => team._id == state.selectedTeamId)[0]};
      copySelectedTeam.members.push(action.dev);

      return {
        ...state,
        teams: [...state.teams.filter(team => team._id !== state.selectedTeamId), copySelectedTeam],
        selectedTeamId: -1,
      };
    }
    default:
      return state;
  }
};

export default teams;
