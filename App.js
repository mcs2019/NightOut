import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import NightClub from './components/NightClub';
import { createStackNavigator } from 'react-navigation-stack';
import NightClubs from './components/NightClub';
import Welcome from './components/Welcome';
import Clubs from './components/Clubs';
import Profile from './components/Profile';
import LogIn from './components/Login';
import SignUp from './components/Profile';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD5OGGEKRFuKX9T-B3HUb9t1bo4HzWLyeI',
  authDomain: 'nightout-bbfa7.firebaseapp.com',
  databaseURL: 'https://nightout-bbfa7.firebaseio.com',
  projectId: 'nightout-bbfa7',
  storageBucket: 'nightout-bbfa7.appspot.com',
  messagingSenderId: '360243177444',
  appId: '1:360243177444:web:caf0c2c4976f145298c9f1',
  measurementId: 'G-XRMTED077L',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          userId: 0,
          name: 'Marcio',
          email: 'marcio123@gmail.com',
          musicOfChoice: ['techno', 'trance'],
          preferedBudget: ['$$', '$$$', '$$$$'],
        },
        {
          userId: 1,
          name: 'David',
          email: 'david123@gmail.com',
          musicOfChoice: ['rock', 'samba', 'bossa-nova'],
          preferedBudget: ['$$', '$$$'],
        },
        {
          userId: 2,
          name: 'Maria',
          email: 'maria123@gmail.com',
          musicOfChoice: ['latin', 'salsa'],
          preferedBudget: ['$$', '$$$'],
        },
        {
          userId: 3,
          name: 'Linda',
          email: 'linda123@gmail.com',
          musicOfChoice: ['alternative', 'heavy-metal'],
          preferedBudget: ['$', '$$'],
        },
      ],
      clubs: [
        {
          clubId: 0,
          name: 'Webster Hall',
          location: '125 E 11th St, New York, NY 10003',
          description: 'Great club, for people into electronic music',
          images: [],
          musicType: ['techno', 'trance'],
          price: ['$$$'],
        },
        {
          clubId: 1,
          name: 'Salsa Club',
          location: '123 23rd and Lex, New York, NY 10004',
          description: 'Great latin rithyms playing all night long',
          images: [],
          musicType: ['Salsa', 'Bachata'],
          price: ['$$'],
        },
        {
          clubId: 2,
          name: 'Hell Angels',
          location: '145 8th St, New York, NY 10002',
          description: 'Heavy metal and bikes heaven',
          images: [],
          musicType: ['Heavy-metal'],
          price: ['$'],
        },
        {
          clubId: 3,
          name: 'Chilled Vibes',
          location: '345 57th and 10th ave, New York, NY 10010',
          description: 'International crowed, laid back enviroment',
          images: ['$$$'],
          musicType: ['international', 'alternative', 'samba', 'rock'],
          price: ['$$$$'],
        },
        {
          clubId: 4,
          name: 'Brazilian Vibes',
          location: '476 82nd and Lexington, New York, NY 10120',
          description: 'Brazilian spot with great music and exotic drinks',
          images: [],
          musicType: ['samba', 'bossa-nova'],
          price: ['$$'],
        },
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusbar}></View>

        <Header title={'NightOut NYC'} />
        <FlatList
          data={this.state.clubs}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            //console.log(item.name);
            return (
              <NightClub
                nightClubs={item}
                // toggleDone={() => this.toggleDone(item)}
                // removeTodo={() => this.removeTodo(item)}
              />
            );
          }}
        />
      </View>
    );
  }
}

// const BigNavigator = createStackNavigator({
//   Welcome: { screen: Welcome },
//   Home: { screen: Home },
//   Profile: { screen: Profile },
//   LogIn: { screen: LogIn },
//   SignUp: { screen: SignUpi },
//   Clubs: { screen: Clubs },
//   NightClubs: { screen: NightClubs },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
