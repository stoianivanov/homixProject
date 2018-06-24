const receivedAuth = data => ({
  type: "RECEIVED_AUTH",
  payload: data
});

const logoutUser = () => ({
  type: "LOGOUT_USER"
});

export { receivedAuth, logoutUser };
