import React, { Component } from "react";
import {
  Platform,
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
import AppointmentsScreenStyles from "./AppointmentsScreenStyles";
import { Header } from "react-native-elements";
import { Icon } from "native-base";
import {
  Calendar,
  CalendarList,
  Agenda,
  LocaleConfig
} from "react-native-calendars";
import CustomerHeader from "../../../components/CustomComponents/CustomerHeader/CustomerHeader";
import CustomTextInputBuilder from "../../../components/CustomComponents/CustomTextInputField/CustomTextInputField";
export default class AppointmentsScreen extends Component {
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
    this.styles = new AppointmentsScreenStyles(this._getScreenDimensions());
    this.serviceName = null;
  }

  //Retrieve phone dimensions(width and height)
  _getScreenDimensions = () => Dimensions.get("window");

  _createHeader() {
    return (
      <Header
        leftComponent={this._backToAvailableServicesScreen()}
        centerComponent={{
          text: "SydNails",
          style: {
            color: "#fff",
            fontSize: 30,
            fontWeight: "bold",
            borderBottomWidth: 0
          }
        }}
        backgroundColor="#c1c6e4"
        outerContainerStyles={{ borderBottomWidth: 0 }}
      />
    );
  }

  _backToAvailableServicesScreen() {
    return (
      <Icon
        name="md-arrow-back"
        style={{ color: "white" }}
        onPress={() => this._sendToAvailableServicesScreen()}
      />
    );
  }

  _sendToAvailableServicesScreen = () => {
    this.props.navigation.navigate("AvailableServicesScreen");
  };

  _createTitle = () => {
    const styles = this.styles.getStyles().serviceName;
    const serviceNameContainer = this.styles.getStyles().serviceNameContainer;
    const serviceName = this.props.navigation.state.params.name;
    this.serviceName = serviceName;
    return (
      <View style={serviceNameContainer}>
        {/*Text>Confirm appointment for:</Text>*/}
        <Text style={styles}> {serviceName}</Text>
      </View>
    );
  };

  _createCustomTextInput(placeholderTxt, customStyles) {
    const customTextInputBuilder = new CustomTextInputBuilder();
    return customTextInputBuilder.createCustomTextInput(
      placeholderTxt,
      customStyles != null ? customStyles : null
    );
  }

  render() {
    return (
      <View style={this.styles.getStyles().container}>
        <View style={{ marginBottom: 12 }}>{this._createHeader()}</View>
        {this._createTitle()}
        {this._createCustomTextInput("Date", styles.genericTextInput)}
        {this._createCustomTextInput("Time", styles.genericTextInput)}
        {this._createCustomTextInput(
          "Special instructions",
          styles.descriptionBoxTextInput
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  genericTextInput: {
    elevation: 1,
    borderColor: "black",
    borderRadius: 5,
    width: 250,
    alignSelf: "center",
    marginBottom: 11
  },
  descriptionBoxTextInput: {
    elevation: 1,
    borderColor: "black",
    // borderBottomColor: "#F5FCFF",
    //backgroundColor: "#FFFFFF",
    borderRadius: 5,
    //borderBottomWidth: 1,
    width: 250,
    height: 150,
    marginBottom: 20,
    textAlignVertical: "top",
    alignSelf: "center"
  }
});
