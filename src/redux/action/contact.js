const {default: Axios} = require('axios');
import {useSelector} from 'react-redux';
import {setLoading} from './global';
import {API_HOST} from '../../API';
import {showError, showSuccess} from '../../utils';

export const getContactAction = () => dispatch => {
  Axios.get(`${API_HOST.url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      dispatch({type: 'SET_CONTACT', value: res.data.data});
    })
    .catch(err => {
      console.log('getdata', err.message);
    });
};

export const editContactAction =
  (data, id, message, navigation) => dispatch => {
    dispatch(setLoading(true));

    Axios.put(`${API_HOST.url}/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        dispatch(setLoading(false));

        navigation.reset({index: 0, routes: [{name: 'Home'}]});
      })
      .catch(err => {
        dispatch(setLoading(false));
        showError(err.response.data.message);
      });
  };

export const deleteContactAction = (id, navigation) => dispatch => {
  Axios.delete(`${API_HOST.url}/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
    })
    .catch(err => {
      showError(err.response.data.message);
    });
};
