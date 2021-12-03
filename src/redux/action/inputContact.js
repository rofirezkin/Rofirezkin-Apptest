const {default: Axios} = require('axios');
import {setLoading} from './global';
import {API_HOST} from '../../API';
import {showError, showSuccess} from '../../utils';

export const InputContactAction = (data, navigation) => dispatch => {
  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      dispatch(setLoading(false));

      navigation.reset({index: 0, routes: [{name: 'Home'}]});

      // showSuccess(res.data.message);
    })
    .catch(err => {
      console.log('err', err);
      dispatch(setLoading(false));

      showError(err?.response?.data?.message);
    });
};
