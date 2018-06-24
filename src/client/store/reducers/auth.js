const initialState = {
  loggedUser: "N/A",
  isAuthenticaded: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVED_AUTH": {
      return { loggedUser: action.payload, isAuthenticaded: true };
    }
    case "LOGOUT_USER": {
      return { loggedUser: "N/A", isAuthenticaded: false };
    }
    default:
      return state;
  }
};

export default auth;
