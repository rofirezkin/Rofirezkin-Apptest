import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {launchImageLibrary} from 'react-native-image-picker';
import useForm from '../../utils/useForm';
import {showError} from '../../utils/showMessages';
import {IcAddPhoto, IcRemovePhoto} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {InputContactAction, setLoading} from '../../redux/action';

const InputContact = ({navigation}) => {
  const dispatch = useDispatch();

  const [photo, setPhoto] = useState();
  const [hasPhoto, setHasPhoto] = useState(false);
  const [dataAge, setDataAge] = useState('');
  const [form, setForm] = useForm({
    firstName: '',
    lastName: '',
    photo: '',
  });

  const getImage = () => {
    launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200, includeBase64: true},
      response => {
        if (response.didCancel || response.error) {
          showError('opps, sepertinya anda tidak memilih fotonya?');
        } else {
          console.log('response', response);
          const source = {uri: response.assets[0].uri};
          setForm(
            'photo',
            `data:${response.assets[0].type};base64, ${response.assets[0].base64}`,
          );
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };

  const onSubmit = () => {
    const age = parseInt(dataAge, 10);
    const data = {
      ...form,
      age,
    };

    dispatch(InputContactAction(data, navigation));
  };

  return (
    <View style={styles.page}>
      <ScrollView>
        <Header
          title="Tambah Kontak"
          subTitle="buat kontak untuk kerabat anda"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <View style={styles.photo}>
            <TouchableOpacity onPress={getImage}>
              {photo ? (
                <View style={styles.borderPhoto}>
                  <Image source={photo} style={styles.photoContainer} />
                  <View style={styles.icAddPhoto}>
                    <IcRemovePhoto />
                  </View>
                </View>
              ) : (
                <View style={styles.borderPhoto}>
                  <View style={styles.photoContainer}>
                    <Text style={styles.addPhoto}>Add Photo</Text>
                  </View>
                  <View style={styles.icAddPhoto}>
                    <IcAddPhoto />
                  </View>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <View>
            <TextInput
              label="First Name"
              value={form.firstName}
              onChangeText={value => setForm('firstName', value)}
            />
            <Gap height={13} />
            <TextInput
              value={form.lastName}
              onChangeText={value => setForm('lastName', value)}
              label="Last Name"
            />
            <Gap height={13} />
            <TextInput
              keyboardType="numeric"
              value={dataAge}
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

export default InputContact;

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
