import React from "react";
import { createSwitchNavigator } from "react-navigation";
import CustomerHomeScreen from "../../../screens/Customer/CustomerHomeScreen/CustomerHomeScreen";
import AvailableServicesScreen from "../../../screens/Customer/AvailableServicesScreen/AvailableServicesScreen";
import AppointmentsScreen from "../../../screens/Customer/AppointmentsScreen/AppointmentsScreen";
const customerHomeScreenSwitchNavigator = createSwitchNavigator(
  {
    CustomerHomeScreen: CustomerHomeScreen,
    AvailableServicesScreen: AvailableServicesScreen,
    AppointmentsScreen: AppointmentsScreen
  },
  {
    initialRouteName: "CustomerHomeScreen"
  }
);

export default customerHomeScreenSwitchNavigator;

//To deactivate the bottom bar when on screens AvailableServicesScreen or AppointmentsScreen
customerHomeScreenSwitchNavigator.navigationOptions = ({ navigation }) => {
  let navigationOptions = {};
  let { routeName } = navigation.state.routes[navigation.state.index];
  if (
    routeName == "AvailableServicesScreen" ||
    routeName == "AppointmentsScreen"
  )
    navigationOptions.tabBarVisible = false;
  else navigationOptions.tabBarVisible = true;
  return navigationOptions;
};
