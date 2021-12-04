import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IcLogo} from '../../assets';
import {Gap} from '../../components';
import {getData} from '../../utils/localstorage';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.page}>
      <IcLogo />
      <Gap height={20} />
      <Text style={styles.text}>MyContact</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 23,
    fontFamily: 'Poppins-Medium',
  },
  logo: {
    width: 215,
    height: 86,
  },
});
