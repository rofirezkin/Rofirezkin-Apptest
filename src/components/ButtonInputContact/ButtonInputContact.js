import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ButtonInputContact = ({navigation}) => {
  return (
    <TouchableOpacity
      testID="myButton"
      style={styles.button}
      onPress={() => navigation.navigate('InputContact')}>
      <Text style={styles.icon}>+</Text>
    </TouchableOpacity>
  );
};

export default ButtonInputContact;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderRadius: 60 / 2,
    width: 60,
    height: 60,
  },
  icon: {
    color: 'white',
    flex: 1,
    fontSize: 35,
    fontWeight: '700',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
