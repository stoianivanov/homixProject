const initialState = {
  user: {
    firstName: "Ivanka",
    lastName: "Ivanova",
    email: "ivanka_ivanova@abv.bg",
    profilePicture:
      "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg",
    position: "Software Engineer",
    phone: "0889152636"
  }
};

const general = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default general;
