import axios from 'axios';
import {API_HOST} from '../../API';

export const InputContactAction = (data, photoReducer, navigation) => {
  axios
    .post(`${API_HOST.url}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      console.log('res');
    });
};
