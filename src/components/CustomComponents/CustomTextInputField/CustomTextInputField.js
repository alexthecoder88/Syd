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
  createCustomTextInput = (inputText, customStyles) => {
    const styles =
      customStyles == null
        ? new CustomTexInputFieldStyles(Dimensions.get("window"))
        : customStyles;
    return (
      <TextInput
        style={customStyles}
        underlineColorAndroid="transparent"
        placeholder={inputText != null ? inputText : ""}
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        multiline={true}
      />
    );
  };
}
