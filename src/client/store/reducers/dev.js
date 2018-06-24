const initialState = {
  developers: [
    {
      _id: {
        $oid: "5b2e255bfb6fc048e105b0b7"
      },
      firstName: "Stoianka",
      lastName: "Ivanova",
      email: "ivanka_ivanova@abv.bg",
      profilePicture:
        "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg",
      position: "Software Engineer",
      phone: "0889152636",
      startDate: "2000"
    },
    {
      _id: {
        $oid: "5b2e255bfb6fc048e105b0b7"
      },
      firstName: "Stoianka",
      lastName: "Ivanova",
      email: "ivanka_ivanova@abv.bg",
      profilePicture:
        "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg",
      position: "Software Engineer",
      phone: "0889152636",
      startDate: "2000"
    },
    {
      _id: {
        $oid: "5b2e255bfb6fc048e105b0b7"
      },
      firstName: "Stoianka",
      lastName: "Ivanova",
      email: "ivanka_ivanova@abv.bg",
      profilePicture:
        "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg",
      position: "Software Engineer",
      phone: "0889152636",
      startDate: "2000"
    }
  ]
};

const dev = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default dev;
