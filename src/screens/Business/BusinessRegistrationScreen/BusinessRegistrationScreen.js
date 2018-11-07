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
import BusinessRegistrationScreenStyles from "./BusinessRegistrationScreenStyles";
export default class BusinessRegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.styles = new BusinessRegistrationScreenStyles(
      this._getScreenDimensions()
    );
  }

  //Retrieve phone dimensions(width and height)
  _getScreenDimensions = () => Dimensions.get("window");

  render() {
    return (
      <View style={this.styles.getStyles().container}>
        <Text>
          Welcome to the RegistrationScreen!!!!!!!!!!!!!!!!!!!!!!
          !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        </Text>
      </View>
    );
  }
}
