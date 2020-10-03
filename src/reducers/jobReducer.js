const initialState = [];

const team = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_JOB":
      return [
        ...state,
        {
          id: action.id,
          franchise: action.franchise,
          address: action.address,
          customerName: action.customerName,
          lossType: action.lossType,
          jobStatus: action.jobStatus,
          dateReceived: action.dateReceived,
        },
      ];
    default:
      return state;
  }
};

export default team;
