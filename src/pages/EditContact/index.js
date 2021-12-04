import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {API_HOST} from '../../API';
import {IcRemovePhoto} from '../../assets';
import {Button, Gap, Header, TextInput} from '../../components';
import {editContactAction, setLoading} from '../../redux/action';
import {showError, showSuccess} from '../../utils';
import useForm from '../../utils/useForm';

const EditContact = ({route, navigation}) => {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(route.params.photo);
  const [photoForDB, setPhotoForDB] = useState(route.params.photo);
  const [detailData, setDetailData] = useState(route.params);
  const [dataAge, setDataAge] = useState(route.params.age);
  const {message} = useSelector(state => state.globalReducer);

  const getImage = () => {
    launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200, includeBase64: true},
      response => {
        if (response.didCancel || response.error) {
          showError('opps, sepertinya anda tidak memilih fotonya?');
        } else {
          const source = response.assets[0].uri;
          setPhotoForDB(
            `data:${response.assets[0].type};base64, ${response.assets[0].base64}`,
          );
          setPhoto(source);
        }
      },
    );
  };

  const changeText = (key, value) => {
    setDetailData({
      ...detailData,
      [key]: value,
    });
  };

  const onSubmit = () => {
    const age = parseInt(dataAge, 10);

    const dataInput = {
      firstName: detailData.firstName,
      lastName: detailData.lastName,
      age: age,
      photo: photoForDB,
    };

    dispatch(editContactAction(dataInput, detailData.id, message, navigation));
  };

  return (
    <View style={styles.page}>
      <ScrollView>
        <Header
          title="Edit Contact"
          subTitle="edit and save your contacts"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <View style={styles.photo}>
            <TouchableOpacity onPress={getImage}>
              <View style={styles.borderPhoto}>
                <Image source={{uri: photo}} style={styles.photoContainer} />
                <View style={styles.icAddPhoto}>
                  <IcRemovePhoto />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              label="First Name"
              value={detailData.firstName}
              onChangeText={value => changeText('firstName', value)}
            />
            <Gap height={13} />
            <TextInput
              value={detailData.lastName}
              onChangeText={value => changeText('lastName', value)}
              label="Last Name"
            />
            <Gap height={13} />
            <TextInput
              keyboardType="numeric"
              value={`${dataAge}`}
              onChangeText={value => setDataAge(value)}
              label="Age"
            />
          </View>
          <Gap height={13} />
          <Button onPress={onSubmit} label="Input Data Contact" />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditContact;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    padding: 20,
    marginTop: 20,

    flex: 1,
  },
  photo: {alignItems: 'center', marginTop: 26, marginBottom: 16},
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  icAddPhoto: {position: 'absolute', bottom: 8, right: 1},
});
