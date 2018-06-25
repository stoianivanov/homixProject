const initialState = {
  courses: [
    {
      name: "Hack Bulgaria",
      organization: "Hack Soft",
      description: "Rado Rado"
    },
    {
      name: "IT tallents",
      organization: "Hack Soft",
      description: "Rado Rado"
    },
    {
      name: "Hack Bulgaria",
      organization: "Hack Soft",
      description: "Rado Rado"
    },
    {
      name: "Hack Bulgaria",
      organization: "Hack Soft",
      description: "Rado Rado"
    }
  ]
};

const courses = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default courses;
