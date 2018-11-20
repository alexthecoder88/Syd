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
import { Header, List } from "react-native-elements";
import ServiceRegistrationFormStyles from "./ServiceRegistrationFormScreenStyles";
import { Icon, ListItem } from "native-base";
import CustomTextInputBuilder from "../../../../components/CustomComponents/CustomTextInputField/CustomTextInputField";
import CustomButtonBuilder from "../../../../components/CustomComponents/CustomButton/CustomButton";
export default class ServiceRegistrationFormScreen extends Component {
  constructor(props) {
    super(props);

    //Services screen styles
    this.styles = new ServiceRegistrationFormStyles(
      this._getScreenDimensions()
    );
  }

  //Retrieve phone dimensions(width and height)
  _getScreenDimensions = () => Dimensions.get("window");

  _sendToServiceScreen() {
    return (
      <Icon
        name="md-arrow-back"
        style={{ color: "white" }}
        onPress={() => this._navigateToServiceScreen()}
      />
    );
  }

  _createHeader() {
    return (
      <Header
        leftComponent={this._sendToServiceScreen()}
        centerComponent={{
          text: "SYD",
          style: { color: "#fff", fontSize: 30, fontWeight: "bold" }
        }}
        backgroundColor="#c1c6e4"
      />
    );
  }

  //Title section
  _createTitle = () => (
    <Text style={this.styles.getStyles().titleContainer}>
      Add a new service
    </Text>
  );

  //For testing
  _createCustomTextInput(placeholderTxt, overrideStyles) {
    customTextInputBuilder = new CustomTextInputBuilder();
    return customTextInputBuilder.createCustomTextInput(
      placeholderTxt,
      overrideStyles ? this.styles : null
    );
  }

  //For testing
  _createCustomButton(buttonText) {
    return new CustomButtonBuilder().createCustomButton(buttonText);
  }

  _navigateToServiceScreen() {
    const clientType = { clientType: this.clientType };
    console.log(this.props);
    this.props.navigation.navigate("Services", clientType);
  }

  render() {
    console.log("rendering ServiceRegistrationFormScreen");
    return (
      <View style={this.styles.getStyles().container}>
        {this._createHeader()}
        <View style={this.styles.getStyles().body}>
          {this._createTitle()}
          {this._createCustomTextInput("Name", false)}
          {this._createCustomTextInput(
            "Please describe the service here",
            true
          )}
          {this._createCustomButton("Save")}
        </View>
      </View>
    );
  }
}
