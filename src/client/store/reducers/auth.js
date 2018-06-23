const initialState = {
  username: "N/A"
}

const auth = (state = initialState, action) => {
    switch (action.type) {
      case "RECEIVED_AUTH": {
        return { username: action.payload.username };
      }
      default:
        return state;
    }
  };
  
  export default auth;