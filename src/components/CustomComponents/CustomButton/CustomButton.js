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
  constructor(text) {
    this.buttonText = text;
  }

  createCustomButton = () => {
    const styles = new CustomButtonStyles(Dimensions.get("window"));
    const buttonContainterStyles = styles.getStyles().buttonContainer;
    const textStyles = styles.getStyles().buttonText;
    return (
      <TouchableHighlight
        style={buttonContainterStyles}
        onPress={() => console.log("Button pressed !!!!1")}
        underlayColor="gray"
      >
        <Text style={textStyles}>{this.buttonText}</Text>
      </TouchableHighlight>
    );
  };
}
