import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Profile} from '../../assets';
import {ButtonInputContact, ListContact} from '../../components';
import {getContactAction} from '../../redux/action';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import {skeletonHome} from '../../components/skeleton/skeletonHome';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [dataContact, setDataContact] = useState([]);
  const {contact} = useSelector(state => state.contactReducer);
  const [loading, setLoading] = useState(true);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  useEffect(() => {
    wait(2000).then(() => setLoading(false));
    navigation.addListener('focus', () => {
      dispatch(getContactAction());
    });
  }, [navigation]);

  return (
    <View style={styles.page}>
      <View style={styles.profileSection}>
        <Text style={styles.text}>Hello Admin ID Star,</Text>
        <Image source={Profile} style={{width: 50, height: 50}} />
      </View>
      <FlatList
        data={contact}
        renderItem={({item}) => {
          return (
            <>
              <SkeletonContent
                containerStyle={{flex: 1}}
                isLoading={loading}
                layout={skeletonHome}>
                <ListContact
                  onPress={() => navigation.navigate('DetailContact', item.id)}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  age={item.age}
                  id={item.id}
                  image={item.photo}
                />
              </SkeletonContent>
            </>
          );
        }}
      />
      <View style={styles.buttonInput}>
        <ButtonInputContact navigation={navigation} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  text: {
    color: '#142756',
    fontSize: 25,
  },
  buttonInput: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
});
