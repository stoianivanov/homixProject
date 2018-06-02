const initialState = {
  user: {
    firstName: "Ivanka",
    lastName: "Ivanova",
    email: "ivanka_ivanova@abv.bg",
    profilePicture:
      "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg",
    position: "Software Engineer",
    phone: "0889152636",
    startDate: '2000',
  },
  characteristics: {
    status: "Full Time",
    job: "DEV",
    level: "level 1",
    keySkill: "N/A",
    skill: "JS",
    lang: "English B2",
    mentor:"Pesho peshev"
  }
};

const general = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default general;
