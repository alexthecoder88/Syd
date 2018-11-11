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
  ScrollView
} from "react-native";
import BusinessRegistrationScreenStyles from "./BusinessRegistrationScreenStyles";
import { NavigationActions } from "react-navigation";
export default class BusinessRegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.styles = new BusinessRegistrationScreenStyles(
      this._getScreenDimensions()
    );
    debugger;
  }

  //Retrieve phone dimensions(width and height)
  _getScreenDimensions = () => Dimensions.get("window");

  _createRegistrationForm = () => {
    return (
      <View>
        <Text style={this.styles.getStyles().titleContainer}>
          Registration Form
        </Text>
        <ScrollView
          contentContainerStyle={this.styles.getStyles().scrollableContainer}
          showsVerticalScrollIndicator={false}
        >
          {this._createTextInput("Business Name")}
          {this._createTextInput("Owner Firstname")}
          {this._createTextInput("Owner Lastname")}
          {this._createTextInput("Address")}
          {this._createTextInput("Phone Number")}
          {this._createTextInput("Email")}
          {this._createTextInput("Username")}
          {this._createTextInput("Password")}
          {this._createTextInput("Confirm Password")}
          <View style={this.styles.getStyles().buttonsRowContainer}>
            {this._createButton("save")}
            {this._createButton("cancel")}
          </View>
        </ScrollView>
      </View>
    );
  };

  //Authentication input fields
  _createTextInput(inputText) {
    return (
      <TextInput
        style={this.styles.getStyles().inputContainer}
        underlineColorAndroid="transparent"
        placeholder={inputText}
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
      />
    );
  }

  //Login and register buttons
  _createButton(buttonText) {
    const buttonContainterStyles = this.styles.getStyles().buttonContainer;
    const textStyles = this.styles.getStyles().buttonText;
    return (
      <TouchableHighlight
        style={buttonContainterStyles}
        onPress={() =>
          buttonText === "cancel"
            ? this._backToLoginScreen(this.props)
            : console.log("SAVING!!!!!")
        }
        underlayColor="gray"
      >
        <Text style={textStyles}>{buttonText}</Text>
      </TouchableHighlight>
    );
  }

  //Navigation action to go back to the loginScreen
  _backToLoginScreen(props) {
    const navigateToLoginScreenAction = NavigationActions.navigate({
      routeName: "Login",
      params: {},
      action: NavigationActions.navigate({ routeName: "LoginScreen" })
    });
    props.data.navigation.dispatch(navigateToLoginScreenAction);
  }

  render() {
    const styles = this.styles.getStyles().container;
    return <View style={styles}>{this._createRegistrationForm()}</View>;
  }
}
