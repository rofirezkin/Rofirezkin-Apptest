import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {EditProfile, IcDelete} from '../../assets';
import {deleteContactAction} from '../../redux/action';

const ListContact = ({firstName, lastName, onPress, age, image, id}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const shortDesc = lastName;

  let fixedDesc = '';
  if (shortDesc.length > 23) {
    fixedDesc = shortDesc.substring(0, 23) + '...';
  } else {
    fixedDesc = shortDesc;
  }

  const handlerDelete = () => {
    //handler for Long Click
    Alert.alert(
      'Delete contact',
      'are you sure to delete this contact?',
      [
        {
          text: 'Yes',
          onPress: handlerClick,
          style: 'Cancel',
        },
      ],
      {
        cancelable: true,
        // onDismiss: () =>
        //   Alert.alert(
        //     'This alert was dismissed by tapping outside of the alert dialog.',
        //   ),
      },
    );
  };

  const handlerClick = () => {
    //handler for Long Click

    dispatch(deleteContactAction(id, navigation));
  };
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.sectionContact}>
      <Image source={{uri: image}} style={styles.avatar} />
      <View style={{marginLeft: 10}}>
        <Text style={styles.name}>
          {firstName} {fixedDesc}
        </Text>
        <Text style={styles.desc}>+62875646634 - {age} years old</Text>
        <Text style={styles.desc}>Ok Brother letst talk later, see you..</Text>
      </View>
      <TouchableOpacity
        onPress={handlerDelete}
        style={{
          alignItems: 'flex-end',
          justifyContent: 'center',
          flex: 1,
          paddingRight: 10,
        }}>
        <IcDelete />
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
    paddingHorizontal: 18,
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
