import React, { Component } from "react";
import { View, SafeAreaView, Button, Image } from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  DrawerItems,
  NavigationActions
} from "react-navigation";
import CustomerHomeScreen from "../../../screens/Customer/CustomerHomeScreen/CustomerHomeScreen";
import CustomerSearchScreen from "../../../screens/Customer/CustomerSearchScreen/CustomerSearchScreen";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const customerBottomTabNavigator = createBottomTabNavigator({
  HomeScreen: CustomerHomeScreen,
  SearchScreen: CustomerSearchScreen
});

export default customerBottomTabNavigator;
