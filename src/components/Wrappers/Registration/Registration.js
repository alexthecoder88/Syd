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

    //For Testing
    this.business = true;
  }

  render() {
    console.log("registration !!! !!!!!");
    console.log("props:" + this.props);
    console.log("is it business:" + this.business);
    return this.business == true ? (
      <BusinessRegistrationScreen data={this.props} />
    ) : (
      <CustomerRegistrationScreen />
    );
  }
}
