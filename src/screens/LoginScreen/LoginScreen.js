import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
  Dimensions
} from "react-native";
import LoginScreenStyles from "./LoginScreenStyles";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import CustomButtonBuilder from "../../../src/components/CustomComponents/CustomButton/CustomButton";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    //Login screen styles
    this.styles = new LoginScreenStyles(this._getScreenDimensions());

    //Either customer or business.Depends wich radio button is selected.Default is business
    this.clientType = "Business";

    //Data for radio buttons
    this.clientTypeRadioProps = [
      { label: "Business", value: 0 },
      { label: "Customer", value: 1 }
    ];

    this.state = {
      email: "",
      password: "",
      showLoginAsGuestButton: this.clientType == "Customer"
    };
  }

  //Retrieve phone dimensions(width and height)
  _getScreenDimensions = () => Dimensions.get("window");

  //Title section
  _createTitle = () => (
    <Text style={this.styles.getStyles().titleContainer}>SydNails</Text>
  );

  //Login and register buttons
  _createButton(buttonText) {
    const customButtonBuilder = new CustomButtonBuilder();
    return customButtonBuilder.createCustomButton(
      buttonText,
      "LoginScreen",
      this
    );
  }

  //Depending on the state value "showLoginAsGuestButton" , the button will show up or not
  _createLoginAsGuesButton() {
    return this.state.showLoginAsGuestButton == true
      ? this._createButton("LOGIN AS GUEST")
      : null;
  }

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

  //To specify if it's a business or customer who's trying to login
  _createRadioButtons() {
    const radioButtonStyles = this.styles.getStyles().radioButtonsContainer;
    return (
      <View style={radioButtonStyles}>
        <RadioForm
          radio_props={this.clientTypeRadioProps}
          initial={0}
          radioStyle={{ paddingRight: 20 }}
          selectedButtonColor="white"
          buttonColor="gray"
          onPress={value => this._setStateAndClientType(value)}
        />
      </View>
    );
  }

  //Everytime a radio button is clicked , this is executed.
  _setStateAndClientType = value => {
    this.clientType = value == 0 ? "Business" : "Customer";
    this.setState({ showLoginAsGuestButton: this.clientType == "Customer" });
  };

  processAuthentication = userCredentials => {
    this.props.navigation.navigate(
      this.clientType == "Business"
        ? "BusinessHomeScreen"
        : "CustomerHomeScreen"
    );
  };

  sendToRegistrationScreen = () => {
    const clientType = { clientType: this.clientType };
    this.props.navigation.navigate("Registration", clientType);
  };

  //Reset Password link
  _createForgetPasswordLink = () => {
    const textContainerStyles = this.styles.getStyles()
      .resetPasswordTextContainer;
    const touchableHighlightContainerStyles = this.styles.getStyles()
      .resetPasswordContainer;
    return (
      <TouchableHighlight
        style={touchableHighlightContainerStyles}
        onPress={() => Alert.alert("RESET PASSWORD BRO !!!!!")}
        underlayColor="transparent"
      >
        <Text style={textContainerStyles}>Reset Password</Text>
      </TouchableHighlight>
    );
  };

  render() {
    console.log("rendering screen!!!!!");
    const loginAndSignUpButtonContainerStyles = this.styles.getStyles()
      .loginAndSignUpButtonContainer;
    return (
      <View style={this.styles.getStyles().container}>
        {this._createTitle()}
        {this._createTextInput("Username")}
        {this._createTextInput("Password")}
        {this._createTextInput("Store ID")}
        {this._createRadioButtons()}
        <View style={loginAndSignUpButtonContainerStyles}>
          {this._createButton("LOGIN")}
          {this._createButton("SIGNUP")}
          {this._createLoginAsGuesButton()}
        </View>
        {this._createForgetPasswordLink()}
      </View>
    );
  }
}
