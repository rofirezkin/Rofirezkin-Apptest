const initContact = {
  contact: [],
};

export const contactReducer = (state = initContact, action) => {
  if (action.type === 'SET_CONTACT') {
    return {
      ...state,
      contact: action.value,
    };
  }
  return state;
};
