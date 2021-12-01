import axios from 'axios';
import {API_HOST} from '../../API';

export const InputContactAction = (data, navigation) => () => {
  console.log('dataa', data);
  axios
    .post(`${API_HOST.url}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      console.log('res', res);
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
    })
    .catch(err => {
      console.log('err', err);
    });
};
