import React from 'react';

import axios, {Axios} from 'axios';
import {Provider} from 'react-redux';

import store from '../src/redux/store';
import {create} from 'react-test-renderer';
import {ButtonInputContact} from '../src/components';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.useFakeTimers();

const navigation = {
  navigate: jest.fn(),
};

const tree = create(<ButtonInputContact navigation={navigation} />);

test('status stored properly', () => {
  expect(store.getState().globalReducer.isLoading).toEqual(false);
});

test('request', () => {
  axios.request.mockImplementation(() =>
    Promise.resolve({data: {status: 'request is called'}}),
  );
});

test('navigate to input contact', () => {
  const button = tree.root.findByProps({testID: 'myButton'}).props;
  button.onPress();
  expect(navigation.navigate).toBeCalledWith('InputContact');
});
