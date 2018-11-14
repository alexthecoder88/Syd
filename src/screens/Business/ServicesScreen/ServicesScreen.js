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
  Dimensions,
  FlatList
} from "react-native";
import { Header } from "react-native-elements";
import { Icon } from "native-base";
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig
} from "react-native-calendars";
import CustomButtonBuilder from "../../../components/CustomComponents/CustomButton/CustomButton";
import CustomTextInputBuilder from "../../../components/CustomComponents/CustomTextInputField/CustomTextInputField";
import ServicesScreenStyles from "./ServicesScreenStyles";
export default class ServicesScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Services",
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require("../../../../assets/services-icon-32.png")}
        style={{ tintColor: tintColor }}
      />
    )
  };

  constructor(props) {
    super(props);

    //Services screen styles
    this.styles = new ServicesScreenStyles(this._getScreenDimensions());

    this.data = ["bob", "TEWSt", "TEST", "fgsdfsdfsd", "asd111111"];
  }

  //Retrieve phone dimensions(width and height)
  _getScreenDimensions = () => Dimensions.get("window");

  _createHeader() {
    return (
      <Header
        leftComponent={this._createDrawerOpenerButton()}
        centerComponent={{
          text: "SYD",
          style: { color: "#fff", fontSize: 30, fontWeight: "bold" }
        }}
        backgroundColor="#c1c6e4"
      />
    );
  }

  _createDrawerOpenerButton() {
    return (
      <Icon
        name="menu"
        style={{ color: "white" }}
        onPress={() => this.props.navigation.openDrawer()}
      />
    );
  }

  //For testing
  createCustomButton(buttonText) {
    return new CustomButtonBuilder(buttonText).createCustomButton();
  }

  //For testing
  createCustomTextInput(placeholderTxt) {
    return new CustomTextInputBuilder(placeholderTxt).createCustomTextInput();
  }

  render() {
    return (
      <View style={this.styles.getStyles().container}>
        {this._createHeader()}
        <FlatList
          data={this.data}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </View>
    );
  }
}
