export const setLoading = value => {
  return {type: 'SET_LOADING', value};
};

export const setSuccess = value => {
  console.log('valuem', value);
  return {type: 'SET_SUCCESS', value};
};
