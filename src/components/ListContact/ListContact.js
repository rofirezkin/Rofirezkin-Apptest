import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {EditProfile} from '../../assets';

const ListContact = ({firstName, lastName, onPress, age, image}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.sectionContact}>
      <Image source={{uri: image}} style={styles.avatar} />
      <View style={{marginLeft: 10}}>
        <Text style={styles.name}>
          {firstName} {lastName}
        </Text>
        <Text style={styles.desc}>+62875646634 - {age} years old</Text>
        <Text style={styles.desc}>Ok Brother letst talk later, see you..</Text>
      </View>
      <TouchableOpacity
        style={{
          alignItems: 'flex-end',
          justifyContent: 'center',
          flex: 1,
          paddingRight: 10,
        }}>
        <EditProfile />
      </TouchableOpacity>
    </TouchableOpacity>
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
  avatar: {width: 60, height: 60, borderRadius: 60 / 2},
  name: {
    fontSize: 17,
    color: '#142756',
    fontWeight: '600',
  },
  desc: {
    fontSize: 15,
  },
});
