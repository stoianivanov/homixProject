const teams = (state = {teams: [{members:[]}]}, action) => {
    switch (action.type) {
      case "RECEIVED_TEAM": {
        return { teams: action.payload };
      }
      default:
        return state;
    }
  };
  
  export default teams;
  