import React, { Component } from 'react';
import {View, SafeAreaView , Button} from 'react-native';
import  { createStackNavigator , createSwitchNavigator , createDrawerNavigator , DrawerItems, NavigationActions }  from 'react-navigation';
import SettingsScreen from '../../../screens/Business/SettingsScreen/SettingsScreen';
import BusinessHomeScreen from '../../../screens/Business/BusinessHomeScreen/BusinessHomeScreen';
import ServicesScreen from '../../../screens/Business/ServicesScreen/ServicesScreen';
import HistoryScreen from '../../../screens/Business/HistoryScreen/HistoryScreen';
import LoginScreen from '../../../screens/LoginScreen/LoginScreen';
import ProfileScreen from '../../../screens/Business/ProfileScreen/ProfileScreen';
import CustomDrawerComponent from './CustomDrawerComponent/CustomDrawerComponent.js';

const businessHomeScreenDrawerNavigator = createDrawerNavigator(
  {
    Home: BusinessHomeScreen,
    Services:ServicesScreen,
    History: HistoryScreen,
    Settings: SettingsScreen,
    Profile:ProfileScreen,

  },
  {
    initialRouteName: 'Home',
    drawerBackgroundColor:'gray',
    contentComponent:(props) => CustomDrawerComponent(props),
    contentOptions: 
    	{
  			activeTintColor: '#c1c6e4',
  			labelStyle:{fontSize:22 , color:'#c1c6e4'},
  			activeLabelStyle:{color:'#c1c6f9',fontSize:26},
  			itemsContainerStyle: 
  				{
			    	marginVertical: 0
			  	},
			  		iconContainerStyle: 
			  		{
			    		opacity: 1,
			    		width:30
			  		}
		}
  }
);

export default businessHomeScreenDrawerNavigator;