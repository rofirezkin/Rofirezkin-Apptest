import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';

const TextInput = ({label, placeholder, ...restProps}) => {
  const [border, setBorder] = useState('#C4C4C4');
  const [focused, setFocused] = useState(false);

  const onFocusForm = () => {
    setBorder('#AE7AFF');
  };
  const onBLurForm = () => {
    setBorder('#C4C4C4');
  };

  const getBorderColor = () => {
    if (focused) {
      return colors.send;
    } else {
      return '#F3F3F3';
    }
  };

  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <TextInputRN
        onFocus={onFocusForm}
        onBlur={onBLurForm}
        style={styles.input(border)}
        placeholder={placeholder}
        {...restProps}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: border => ({
    borderRadius: 8,
    borderBottomColor: border,
    borderBottomWidth: 2,
    padding: 10,
  }),
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },
});
