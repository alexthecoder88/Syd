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
  createCustomButton = buttonText => {
    const styles = new CustomButtonStyles(Dimensions.get("window"));
    const buttonContainterStyles = styles.getStyles().buttonContainer;
    const textStyles = styles.getStyles().buttonText;
    return (
      <TouchableHighlight
        style={buttonContainterStyles}
        onPress={() => console.log("Button pressed !!!!1")}
        underlayColor="gray"
      >
        <Text style={textStyles}>{buttonText}</Text>
      </TouchableHighlight>
    );
  };
}
