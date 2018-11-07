import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  NavigationActions
} from "react-navigation";
import BusinessRegistrationScreen from "../../screens/BusinessRegistrationScreen/BusinessRegistrationScreen";
import CustomerRegistrationScreen from "../../../screens/CustomerRegistrationScreen/CustomerRegistrationScreen";
export default class Registration extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("rending app !!!!!");
    return <BusinessRegistrationScreen />;
  }
}
