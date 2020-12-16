const initialState = [];

const team = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_JOB":
      return [
        ...state,
        {
          id: action.id,
          eventName: action.eventName,
          description: action.description,
          venue: action.venue,
          discount: action.discount,
          discountNumber: action.discountNumber,
          price: action.price,
          dateReceived: action.dateReceived,
        },
      ];
    default:
      return state;
  }
};

export default team;
