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
import AppointmentsHistoryScreenStyles from "./AppointmentsHistoryScreenStyles";
import { Header } from "react-native-elements";
import { Icon } from "native-base";
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig
} from "react-native-calendars";
import CustomerHeader from "../../../components/CustomComponents/CustomerHeader/CustomerHeader";

export default class AppointmentsHistoryScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("../../../../assets/calendar-icon-32.png")}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  constructor(props) {
    super(props);
    this.styles = new AppointmentsHistoryScreenStyles(
      this._getScreenDimensions()
    );
  }

  //Retrieve phone dimensions(width and height)
  _getScreenDimensions = () => Dimensions.get("window");

  render() {
    return (
      <View style={this.styles.getStyles().container}>
        <CustomerHeader />
        <Text>Welcome to Appoinments History screen !!!</Text>
      </View>
    );
  }
}
