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
import AppointmentsScreen from "../../../screens/Customer/AppointmentsScreen/AppointmentsScreen";
import FavoritesScreen from "../../../screens/Customer/FavoritesScreen/FavoritesScreen";
import ProfileScreen from "../../../screens/Customer/ProfileScreen/ProfileScreen";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Icon } from "native-base";

const customerBottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: CustomerHomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" style={{ color: tintColor }} />
        )
      }
    },
    Search: {
      screen: CustomerSearchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="search" style={{ color: tintColor }} />
        )
      }
    },
    Appointments: {
      screen: AppointmentsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="book" style={{ color: tintColor }} />
        )
      }
    },

    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="heart" style={{ color: tintColor }} />
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="person" style={{ color: tintColor }} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: true,
      activeTintColor: "#393b44",
      inactiveTintColor: "#c1c6e4"
    },
    animationEnabled: true
  }
);

export default customerBottomTabNavigator;
