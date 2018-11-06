import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  Dimensions
} from 'react-native';
import { Header } from 'react-native-elements';
import { Icon } from 'native-base';
import { Calendar, CalendarList, Agenda , LocaleConfig } from 'react-native-calendars';

export default class ServicesScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Services',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../../../assets/services-icon-32.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>HI PAPI!!!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'red'
    }
});