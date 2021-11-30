import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ListContact = ({firstName, lastName, age, image}) => {
  return (
    <View style={styles.sectionContact}>
      <Image source={{uri: image}} style={styles.avatar} />
      <View style={{marginLeft: 10}}>
        <Text style={styles.name}>
          {firstName} {lastName}
        </Text>
        <Text style={styles.age}>{age}</Text>
      </View>
    </View>
  );
};

export default ListContact;

const styles = StyleSheet.create({
  sectionContact: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  avatar: {width: 50, height: 50, borderRadius: 50 / 2},
  name: {
    fontSize: 16,
    color: '#142756',
    fontWeight: '600',
  },
});
