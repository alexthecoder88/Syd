import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  NavigationActions
} from "react-navigation";
import BusinessRegistrationScreen from "../../../screens/Business/BusinessRegistrationScreen/BusinessRegistrationScreen";
import CustomerRegistrationScreen from "../../../screens/Customer/CustomerRegistrationScreen/CustomerRegistrationScreen";
export default class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.clientType = null;
  }

  render() {
    this.clientType = this.props.navigation.state.params.clientType;
    return this.clientType == "Business" ? (
      <BusinessRegistrationScreen data={this.props} />
    ) : (
      <CustomerRegistrationScreen />
    );
  }
}
