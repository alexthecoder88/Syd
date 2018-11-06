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
export default class ProfileScreen extends Component {

  static navigationOptions = {
    drawerLabel: 'Profile',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../../../assets/profile-icon-32.png')}
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
    console.log("rendering ProfileScreen")
    return(
      <View style={styles.container}>
        <Text>Welcome to the ProfileScreen!!!!!!!!!!!!!!!!!!!!!!
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
        backgroundColor:'orange'
    }
});


