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
import CustomerRegistrationScreenStyles from "./CustomerRegistrationScreenStyles";
export default class CustomerRegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.styles = new CustomerRegistrationScreenStyles(
      this._getScreenDimensions()
    );
  }

  //Retrieve phone dimensions(width and height)
  _getScreenDimensions = () => Dimensions.get("window");

  render() {
    return (
      <View style={this.styles.getStyles().container}>
        <Text>
          Welcome to the CustomerRegistrationScreen!!!!!!!!!!!!!!!!!!!!!!
          !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        </Text>
      </View>
    );
  }
}
