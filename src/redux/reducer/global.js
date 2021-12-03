const initGlobalState = {
  isLoading: false,
  isSuccess: false,
  message: '',
};

export const globalReducer = (state = initGlobalState, action) => {
  if (action.type === 'SET_SUCCESS') {
    console.log('dasda', action.value);
    return {
      ...state,
      isSuccess: action.value.isSuccess,
      message: action.value.message,
    };
  }

  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      isLoading: action.value,
    };
  }
  return state;
};
