const initialState = {
  personalInformation: 
      {
          nativeName: "Pesho",
          gender: "male",
          birthday: "03/05/1994",
          govermentalid: "N/A",
          driverLicense: "B Category",
          tShtirtSize: "XXXXXXL",
          remoteWork:"N/A"
      }
  
};

const personal = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default personal;