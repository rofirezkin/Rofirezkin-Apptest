import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {API_HOST} from '../../API';
import {IcCall, IcMessage, IcWhatsapp} from '../../assets';
import {DetailProfile, Header, ListDetailContact} from '../../components';
import {dataJson} from '../../assets/dataJson';

const DetailContact = ({navigation, route}) => {
  const [detailData, setDetailData] = useState('');
  const idContact = route.params;

  useEffect(() => {
    axios
      .get(`${API_HOST.url}/${idContact}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        setDetailData(res.data.data);
      })
      .catch(err => {
        console.log('erors', err);
      });
  }, []);

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={styles.page}>
        <Header
          detail
          title="Detail Contact"
          onBack={() => navigation.goBack()}
          subTitle="disini anda bisa melihat riwayat contact"
        />
        <DetailProfile detailData={detailData} />
        <View style={styles.cardSection}>
          <Text style={styles.title}>History</Text>
          {dataJson.map(res => {
            return <ListDetailContact key={res.id} data={res} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailContact;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#AE7AFF',
    flex: 1,
  },
  cardSection: {
    height: 'auto',
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  title: {
    color: 'black',
    fontWeight: '600',
    fontSize: 20,
  },
});
