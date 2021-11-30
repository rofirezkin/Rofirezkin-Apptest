import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {getData} from '../../utils/localstorage';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.page}>
      <Text>Halooo Splash</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F05A61',
  },
  text: {
    color: 'white',
    fontSize: 23,
    fontFamily: 'Poppins-Medium',
  },
  logo: {
    width: 215,
    height: 86,
  },
});
