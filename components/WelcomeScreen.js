import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import App from '../App';
import Header from './Header';

class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>WelcomeScreen</Text>
        <Header title="NightOut" />
        <Button
          title="Log in"
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
        <Button title="Sign Up" onPress={() => alert('Signed in')} />
        <Button
          title="Clubs"
          onPress={() => this.props.navigation.navigate('NightClubs')}
        />
      </View>
    );
  }
}

export default WelcomeScreen;
