import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  Dimensions
} from "react-native";
import CustomButtonStyles from "./CustomButtonStyles";
export default class CustomButtonBuilder {
  createCustomButton = (buttonText, screenName, screenInstance) => {
    const styles = new CustomButtonStyles(Dimensions.get("window"));
    const buttonContainterStyles = styles.getStyles().buttonContainer;
    const textStyles = styles.getStyles().buttonText;
    return (
      <TouchableHighlight
        style={buttonContainterStyles}
        onPress={() => {
          console.log("Button pressed !!!!1");
          if (screenName == "LoginScreen") {
            console.log("Authentication login!!!!");
            buttonText == "LOGIN"
              ? screenInstance.processAuthentication(null)
              : screenInstance.sendToRegistrationScreen();
          }
        }}
        underlayColor="gray"
      >
        <Text style={textStyles}>{buttonText}</Text>
      </TouchableHighlight>
    );
  };
}
