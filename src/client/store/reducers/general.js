const initialState = {
  user: {
    firstName: "Ivanka",
    lastName: "Ivanova",
    email: "ivanka_ivanova@abv.bg",
    profilePicture:
      "https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg",
    position: "Software Engineer",
    phone: "0889152636",
    startDate: "2000"
  },
  characteristics: {
    status: "Full Time",
    job: "DEV",
    level: "level 1",
    keySkill: "N/A",
    skill: "JS",
    lang: "English B2",
    mentor: "Pesho peshev"
  },
  projectRoles: [
    {
      header: "Project Report - April",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      meta: "ROI: 30%"
    },
    {
      header: "Project Report - May",
      description:
        "Bring to the table win-win survival strategies to ensure proactive domination.",
      meta: "ROI: 34%"
    },
    {
      header: "Project Report - June",
      description:
        "Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.",
      meta: "ROI: 27%"
    }
  ]
};

const general = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default general;
