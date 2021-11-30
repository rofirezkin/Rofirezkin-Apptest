const initInputContact = {
  firstName: '',
  lastName: '',
  age: '',
};

export const inputContactReducer = (state = initInputContact, action) => {
  if (action.type === 'SET_INPUT_CONTACT') {
    return {
      ...state,
      firstName: action.value.firstName,
      lastName: action.value.name,
      age: action.value.age,
    };
  }
  return state;
};

const initPhoto = {
  uri: '',
  type: '',
  name: '',
};

export const photoReducer = (state = initPhoto, action) => {
  if (action.type === 'SET_PHOTO') {
    return {
      ...state,
      uri: action.value.uri,
      type: action.value.type,
      name: action.value.name,
    };
  }

  return state;
};
