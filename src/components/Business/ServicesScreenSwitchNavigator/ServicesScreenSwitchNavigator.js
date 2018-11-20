import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createSwitchNavigator } from "react-navigation";
import ServicesScreen from "../../../screens/Business/ServicesScreen/ServicesScreen";
import ServiceRegistrationFormScreen from "../../../screens/Business/ServicesScreen/ServiceRegistrationFormScreen/ServiceRegistrationFormScreen";
const ServicesScreenwitchNavigator = createSwitchNavigator(
  {
    Services: ServicesScreen,
    ServiceRegistrationForm: ServiceRegistrationFormScreen
  },
  {
    initialRouteName: "Services"
  }
);

export default ServicesScreenwitchNavigator;
