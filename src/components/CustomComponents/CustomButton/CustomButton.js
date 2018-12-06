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
  createCustomButton = (
    buttonText,
    screenName,
    screenInstance,
    customStyles,
    underlayColor
  ) => {
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
        underlayColor={underlayColor != null ? underlayColor : "gray"}
      >
        <Text style={customStyles != null ? customStyles : textStyles}>
          {buttonText}
        </Text>
      </TouchableHighlight>
    );
  };
}
