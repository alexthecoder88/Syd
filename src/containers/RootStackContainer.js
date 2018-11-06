import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import  { createStackNavigator , createSwitchNavigator }  from 'react-navigation';
import BusinessHomeScreen from '../screens/Business/BusinessHomeScreen';
export default class RootStackContainer extends React.Component {
  render() {
    return (
    	<View style={{backgroundColor:"transparent" , flex:1}}>
    		<RootStack />
    	</View>
      
    );
  }
}

const RootStack2 = createStackNavigator(
	{
	  Login: {
	    screen: LoginScreen,
	  },
	  BusinessHomeScreen: {
	    screen: BusinessHomeScreen,
	  },
	},
	{
		initialRouteName: 'Login',
	
	}
);



const RootStack = createStackNavigator(
	{
		Login:LoginScreen,
		BusinessHomeScreen:BusinessHomeScreen
	}

);