import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  TextInput,
  Image,
  Dimensions
} from "react-native";
import CustomTexInputFieldStyles from "./CustomTextInputFieldStyles";
export default class CustomTexInputFieldBuilder {
  constructor(text) {
    this.inputText = text;
  }

  createCustomTextInput = () => {
    const styles = new CustomTexInputFieldStyles(Dimensions.get("window"));
    return (
      <TextInput
        style={styles.getStyles().inputContainer}
        underlineColorAndroid="transparent"
        placeholder={this.inputText}
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
      />
    );
  };
}
