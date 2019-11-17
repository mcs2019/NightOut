import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

export default class NightClubs extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const nightClubs = this.props.nightClubs;
    //console.log(nightClubs);
    return (
      <TouchableOpacity
        style={styles.nightClubs}
        style={styles.clubButton}
        // onPress={props.addNewTodo}
      >
        {/* // onPress={() => this.props.toggleDone()} */}
        <Text style={styles.clubButtonText}>Clubs/Bars</Text>

        <Text
        //   style={ }
        >
          {nightClubs.name}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  nightClubs: {
    width: '100%',
    height: 40,
    borderBottomColor: '#DDDD',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  clubButton: {
    width: 100,
    backgroundColor: '#FFCE00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clubButtonText: {
    color: '#171717',
    fontSize: 18,
    fontWeight: '700',
  },
});
