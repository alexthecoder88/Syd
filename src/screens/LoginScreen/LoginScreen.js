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
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    state = {
      email: "",
      password: ""
    };

    //Login screen styles
    this.styles = new LoginScreenStyles(this._getScreenDimensions());

    //Either customer or business.Depends wich radio button is selected.Default is business
    this.clientType = "Business";

    this.clientTypeRadioProps = [
      { label: "Business", value: 0 },
      { label: "Customer", value: 1 }
    ];
  }

  //Retrieve phone dimensions(width and height)
  _getScreenDimensions = () => Dimensions.get("window");

  //Title section
  _createTitle = () => (
    <Text style={this.styles.getStyles().titleContainer}>SYD</Text>
  );

  //Login and register buttons
  _createButton(buttonText) {
    const buttonContainterStyles = this.styles.getStyles().buttonContainer;
    const textStyles = this.styles.getStyles().loginAndSignUpButtonText;
    return (
      <TouchableHighlight
        style={buttonContainterStyles}
        onPress={() =>
          buttonText === "LOGIN"
            ? this._processAuthentication(null)
            : this._sendToRegistrationScreen()
        }
        underlayColor="gray"
      >
        <Text style={textStyles}>{buttonText}</Text>
      </TouchableHighlight>
    );
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
          onPress={value => this._setClientType(value)}
        />
      </View>
    );
  }

  _setClientType = value => {
    this.clientType = value == 0 ? "Business" : "Customer";
    console.log("client type is: " + this.clientType);
  };

  _processAuthentication = userCredentials => {
    const testObject = { person: "alex" };
    this.props.navigation.navigate("BusinessHomeScreen", testObject);
  };

  _sendToRegistrationScreen = () => {
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
        </View>
        {this._createForgetPasswordLink()}
      </View>
    );
  }
}
