import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import App from '../App';

class DashboardScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Under Construction</Text>
        <Button
          title="Back"
          onPress={() => this.props.navigation.navigate('Welcome')}
        />
      </View>
    );
  }
}

export default DashboardScreen;
