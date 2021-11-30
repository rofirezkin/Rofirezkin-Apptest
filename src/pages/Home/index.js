import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {API_HOST} from '../../API';
import {Profile} from '../../assets';
import {ListContact} from '../../components';
import {getContactAction} from '../../redux/action';

const Home = () => {
  const dispatch = useDispatch();
  const [dataContact, setDataContact] = useState([]);
  const {contact} = useSelector(state => state.contactReducer);
  useEffect(() => {
    dispatch(getContactAction());
  }, []);

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
            <ListContact
              firstName={item.firstName}
              lastName={item.lastName}
              age={item.age}
              image={item.photo}
            />
          );
        }}
      />
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
});
