import React, { Component } from 'react';
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
  TouchableNativeFeedback
} from 'react-native';

const LoginAndSignUpButton = (props) =>  {
	return(
	<TouchableNativeFeedback
        onPress={() => console.log("Custom BUtton!!!!!!")}
        background={TouchableNativeFeedback.SelectableBackground()}>
      <View style={{ backgroundColor: 'yellow'}}>
        <Text >LOGIN</Text>
      </View>
    </TouchableNativeFeedback>
	)
}

export default LoginAndSignUpButton;