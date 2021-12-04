import React, {useEffect} from 'react';
import {LogBox, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {Provider, useDispatch, useSelector} from 'react-redux';
import store from './redux/store';
import FlashMessage from 'react-native-flash-message';
import {Loading} from './components';

const MainApp = () => {
  const {isLoading} = useSelector(state => state.globalReducer);
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
