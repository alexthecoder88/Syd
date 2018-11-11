import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator
} from "react-navigation";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import BusinessHomeScreen from "./src/screens/Business/BusinessHomeScreen/BusinessHomeScreen";
import SettingsScreen from "./src/screens/Business/SettingsScreen/SettingsScreen";
import BusinessHomeScreenDrawerNavigator from "./src/components/Business/BusinessHomeScreenDrawerNavigator/BusinessHomeScreenDrawerNavigator";
import BusinessRegistrationScreen from "./src/screens/Business/BusinessRegistrationScreen/BusinessRegistrationScreen";
import Registration from "./src/components/Wrappers/Registration/Registration";
export default class App extends React.Component {
  render() {
    console.log("rending app !!!!!");
    return <RootSwitchNavigator />;
  }
}

const RootSwitchNavigator = createSwitchNavigator(
  {
    Login: LoginScreen,
    Registration: Registration,
    BusinessHomeScreen: BusinessHomeScreenDrawerNavigator
  },
  {
    initialRouteName: "Login"
  }
);
