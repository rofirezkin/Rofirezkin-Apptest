import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcBack, IcbackWhite} from '../../assets';

const Header = ({title, subTitle, onBack, detail}) => {
  if (detail) {
    return (
      <View style={styles.container(detail)}>
        {onBack && (
          <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
            <View style={styles.back}>
              <IcbackWhite />
            </View>
          </TouchableOpacity>
        )}
        <View>
          <Text style={styles.title(detail)}>{title}</Text>
          <Text style={styles.subTitle(detail)}>{subTitle}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container(detail)}>
      {onBack && (
        <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
          <View style={styles.back}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title(detail)}>{title}</Text>
        <Text style={styles.subTitle(detail)}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: detail => ({
    backgroundColor: detail ? '#AE7AFF' : 'white',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  }),
  title: detail => ({
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: detail ? 'white' : '#020202',
  }),
  subTitle: detail => ({
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: detail ? 'white' : '#8D92A3',
  }),
  back: {
    padding: 16,
    marginRight: 16,
    marginLeft: -10,
  },
});
