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
export default class SettingsScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Settings',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../../../assets/setting-icon-32.png')}
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
    console.log("rendering homeScreen")
    return(
      <View style={styles.container}>
        <Text>Welcome to the SettingsScreen!!!!!!!!!!!!!!!!!!!!!!
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
        backgroundColor:'red'
    }
});


