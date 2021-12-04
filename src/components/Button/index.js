import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({label, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#AE7AFF',
    padding: 15,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderColor: '#ED212B',
    alignSelfL: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    textAlign: 'center',
  },
});
