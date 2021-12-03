import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {IcCall, IcMessage, IcVideoCall, IcWhatsapp} from '../../assets';

const DetailProfile = ({detailData, id}) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.centerSection}>
        <Image source={{uri: detailData.photo}} style={styles.avatar} />
        <Text style={styles.name}>
          {detailData.firstName} {detailData.lastName}
        </Text>
        <Text style={styles.contact}>
          +628577483830 - {detailData.age} Years Old
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('EditContact', detailData)}
          style={{marginTop: 16, alignSelf: 'center'}}>
          <Text style={styles.edit}>Edit Contact</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.featuresSection}>
        <View>
          <View style={styles.cardFeatures}>
            <IcCall />
          </View>
          <Text style={styles.textFeatures}>Call</Text>
        </View>
        <View>
          <View style={styles.cardFeatures}>
            <IcMessage />
          </View>
          <Text style={styles.textFeatures}>Message</Text>
        </View>
        <View>
          <View style={styles.cardFeatures}>
            <IcVideoCall />
          </View>
          <Text style={styles.textFeatures}>Video</Text>
        </View>
      </View>
    </>
  );
};

export default DetailProfile;

const styles = StyleSheet.create({
  centerSection: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  name: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
  contact: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    color: 'white',
  },
  edit: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    color: 'white',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  featuresSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
  cardFeatures: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 50,
  },
  textFeatures: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    marginTop: 8,
  },
});
