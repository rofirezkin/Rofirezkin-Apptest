import axios from 'axios';
import {API_HOST} from '../../API';

export const getContactAction = () => dispatch => {
  axios
    .get(`${API_HOST.url}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      console.log('rwes', res);
      dispatch({type: 'SET_CONTACT', value: res.data.data});
    })
    .catch(err => {
      console.log(err);
    });
};
