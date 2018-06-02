const initialState = {
  pastProjects: [{
      name: "project 1",
      duration: "17 May - 01 August 2017",
      projectRoles: "Front-end Developer",
      customer: "Some Customer name",
      projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus varius lorem sed laoreet. Aenean elementum ultrices nibh, tincidunt varius risus posuere vel. Integer nisl risus, fermentum sed dapibus et, gravida vel lacus. Aenean sodales efficitur leo eget rutrum. Fusce ut euismod turpis, a blandit neque. Praesent id lacus ornare felis feugiat cursus id vitae tortor. Curabitur sit amet tristique ligula.Vestibulum molestie vel magna at viverra. Nulla sed erat dui. Donec et tempus lorem. Maecenas cursus finibus mollis. Phasellus blandit quam in nisi tristique, in cursus diam aliquam",
      participation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus varius lorem sed " +
        "laoreet. Aenean elementum ultrices nibh, tincidunt varius risus posuere vel. " +
        "Integer nisl risus, fermentum sed dapibus et, gravida vel lacus. Aenean" +
        "sodales efficitur leo eget rutrum. Fusce ut euismod turpis, a blandit neque.",
      team: "2 backend developers " +
        "2 frontend developers " +
        "1 manual QA",
      toolsAndTechnologies: "React " +
        "React Native " +
        "ES6" +
        "Webpack" +
        "Google maps API" +
        "Redux" +
        "Jest" +
        "Enzyme",
    },
    {
      name: "project 2",
      duration: "17 May - 01 August 2017",
      projectRoles: "Front-end Developer",
      customer: "Some Customer name",
      projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus varius lorem sed laoreet. Aenean elementum ultrices nibh, tincidunt varius risus posuere vel. Integer nisl risus, fermentum sed dapibus et, gravida vel lacus. Aenean sodales efficitur leo eget rutrum. Fusce ut euismod turpis, a blandit neque. Praesent id lacus ornare felis feugiat cursus id vitae tortor. Curabitur sit amet tristique ligula.Vestibulum molestie vel magna at viverra. Nulla sed erat dui. Donec et tempus lorem. Maecenas cursus finibus mollis. Phasellus blandit quam in nisi tristique, in cursus diam aliquam",
      participation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus varius lorem sed " +
        "laoreet. Aenean elementum ultrices nibh, tincidunt varius risus posuere vel. " +
        "Integer nisl risus, fermentum sed dapibus et, gravida vel lacus. Aenean" +
        "sodales efficitur leo eget rutrum. Fusce ut euismod turpis, a blandit neque.",
      team: "2 backend developers " +
        "2 frontend developers " +
        "1 manual QA",
      toolsAndTechnologies: "React " +
        "React Native " +
        "ES6" +
        "Webpack" +
        "Google maps API" +
        "Redux" +
        "Jest" +
        "Enzyme",
    },
    {
      name: "project 3",
      duration: "17 May - 01 August 2017",
      projectRoles: "Front-end Developer",
      customer: "Some Customer name",
      projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus varius lorem sed laoreet. Aenean elementum ultrices nibh, tincidunt varius risus posuere vel. Integer nisl risus, fermentum sed dapibus et, gravida vel lacus. Aenean sodales efficitur leo eget rutrum. Fusce ut euismod turpis, a blandit neque. Praesent id lacus ornare felis feugiat cursus id vitae tortor. Curabitur sit amet tristique ligula.Vestibulum molestie vel magna at viverra. Nulla sed erat dui. Donec et tempus lorem. Maecenas cursus finibus mollis. Phasellus blandit quam in nisi tristique, in cursus diam aliquam",
      participation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus varius lorem sed " +
        "laoreet. Aenean elementum ultrices nibh, tincidunt varius risus posuere vel. " +
        "Integer nisl risus, fermentum sed dapibus et, gravida vel lacus. Aenean" +
        "sodales efficitur leo eget rutrum. Fusce ut euismod turpis, a blandit neque.",
      team: "2 backend developers " +
        "2 frontend developers " +
        "1 manual QA",
      toolsAndTechnologies: "React " +
        "React Native " +
        "ES6" +
        "Webpack" +
        "Google maps API" +
        "Redux" +
        "Jest" +
        "Enzyme",
    }
  ]
};

const pastProjects = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
};

export default pastProjects;
