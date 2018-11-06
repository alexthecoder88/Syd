import React, { Component } from 'react';
import {
View,
SafeAreaView ,
Button , 
StyleSheet , 
Text, 
TouchableHighlight,
Image,
Dimensions} from 'react-native';
import  { createStackNavigator , createSwitchNavigator , createDrawerNavigator , DrawerItems, NavigationActions }  from 'react-navigation';
import LoginScreen from '../../../../screens/LoginScreen/LoginScreen';
import CustomDrawerComponentStyles from './CustomDrawerComponentStyles.js';

	//Styles retrieved here
	const customDrawerComponentStyles = new CustomDrawerComponentStyles(getScreenDimensions());

  	//Retrieve phone dimensions(width and height)
 	function getScreenDimensions (){return Dimensions.get('window');} 

	const customDrawerComponent= (props) =>(

		    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }} style={{flex:1}}>
		        <View>
		            <DrawerItems {...props} />      
		        </View>
		        <View style={customDrawerComponentStyles.getStyles().container}>
		        	{createLogoutButton(props)}
		        </View>    
		    </SafeAreaView>        
		)   
    	
	export default customDrawerComponent;


	function createLogoutButton(props) {
		return (        
			<TouchableHighlight 
	          onPress={() => backToLoginScreen(props)}
	          underlayColor = 'gray'>
	            <View style={{alignItems:'center'}}>
		          	<Image source={require('../../../../../assets/logout-icon-32.png')}/>
		            <Text 
		            	style={customDrawerComponentStyles.getStyles().logoutTextContainer}>
		            	Logout
		            </Text>
	            </View>
	        </TouchableHighlight>
	    )
	}

	//Navigation action to go back to the loginScreen
	function backToLoginScreen(props){
			
		const navigateToLoginScreenAction = NavigationActions.navigate({
			routeName: 'Login',
			params: {},
			action: NavigationActions.navigate({ routeName: 'LoginScreen' }),
		});	
		props.navigation.dispatch(navigateToLoginScreenAction)
	}