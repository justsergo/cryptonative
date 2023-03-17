import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Registration = (): JSX.Element => (
  <View style={styles.screen}>
    <Text>Registration</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Registration;
