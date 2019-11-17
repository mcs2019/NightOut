import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const Welcome = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default Welcome;
