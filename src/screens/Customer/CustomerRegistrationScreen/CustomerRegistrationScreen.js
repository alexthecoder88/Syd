import React, { Component } from "react";
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
} from "react-native";
import CustomerScreenStyles from "./CustomerScreenStyles";
export default class CustomerRegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.styles = new CustomerScreenStyles(this._getScreenDimensions());
  }

  //Retrieve phone dimensions(width and height)
  _getScreenDimensions = () => Dimensions.get("window");

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome to the CustomerRegistrationScreen!!!!!!!!!!!!!!!!!!!!!!
          !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        </Text>
      </View>
    );
  }
}
