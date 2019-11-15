import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import NightClubs from './NightClub';

export default function Clubs(props) {
  return (
    <View>
      <FlatList
        data={this.state.clubs}
        extraData={this.state}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          //console.log(item.name);
          return (
            <NightClubs
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
