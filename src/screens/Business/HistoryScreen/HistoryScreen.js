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
export default class HistoryScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'History',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../../../assets/history-icon-32.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };


  constructor(props) {
    super(props)
  }

  componentDidMount(){
  }

  render() {
    console.log("rendering historyScreen")
    return(
      <View style={styles.container}>
        <Text>Welcome to the HistoryScreen!!!!!!!!!!!!!!!!!!!!!!
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'yellow'
    }
});