import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  EditProfile,
  IcBlock,
  IcCalling,
  IcChat,
  IcRejected,
} from '../../assets';

const ListDetailContact = ({onPress, data}) => {
  const Icon = () => {
    if (data.icon === 'calling') {
      return <IcCalling />;
    } else if (data.icon === 'rejected') {
      return <IcRejected />;
    } else if (data.icon === 'blocked') {
      return <IcBlock />;
    } else if (data.icon === 'chatting') {
      return <IcChat />;
    } else {
      return <IcRejected />;
    }
  };
  return (
    <View style={styles.sectionContact}>
      <View style={{justifyContent: 'center'}}>
        <Icon />
      </View>
      <View style={{marginLeft: 20}}>
        <Text style={styles.name}>{data.date}</Text>
        <Text style={styles.desc}>{data.desc}</Text>
      </View>
    </View>
  );
};

export default ListDetailContact;

const styles = StyleSheet.create({
  sectionContact: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingVertical: 14,
  },

  name: {
    fontSize: 17,
    color: '#142756',
    fontWeight: '600',
  },
  desc: {
    fontSize: 15,
  },
});
