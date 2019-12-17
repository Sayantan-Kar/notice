import React from 'react';
import { Platform } from 'react-native'; 
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';


import LandingScreen from '../screens/LandingScreen';
import AboutUsScreen from './../screens/AboutUsScreen';
import Colors from '../constants/Colors';
import ContactScreen from './../screens/ContactScreen';
import GalleryScreen from '../screens/GalleryScreen';
import NoticeListScreen from '../screens/NoticeListScreen';
import NoticeDetailScreen from './../screens/NoticeDetailScreen';
import AdminProfile from './../screens/AdminProfile';
import AdminNoticeScreen from './../screens/admin/AdminNotice';
import EditNoticeScreen from './../screens/admin/EditNoticeScreen'



const defaultNavigationOptions = {
    headerStyle:{
        backgroundColor:Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary

}

const MainNavigator = createStackNavigator({
    Landing : LandingScreen,
    Contact: ContactScreen,
    NoticeList : NoticeListScreen,
    NoticeDetail: NoticeDetailScreen,
    Admin: AdminProfile,
    AdminNotice: AdminNoticeScreen,
    EditNotice: EditNoticeScreen

},
{
  navigationOptions: {
    drawerIcon: drawerConfig => (
      <Ionicons
        name={Platform.OS === 'android' ? 'md-list' : 'ios-cart'}
        size={23}
        color={drawerConfig.tintColor}
      />
    )
  },
  defaultNavigationOptions: defaultNavigationOptions
});

const AboutNavigator = createStackNavigator({
   
    AboutUs : AboutUsScreen,
    Contact: ContactScreen
},
{
  navigationOptions: {
    drawerIcon: drawerConfig => (
      <Ionicons
        name={Platform.OS === 'android' ? 'md-list' : 'ios-cart'}
        size={23}
        color={drawerConfig.tintColor}
      />
    )
  },
  defaultNavigationOptions: defaultNavigationOptions
});


const SideNavigator = createStackNavigator({
    Contact: ContactScreen
},{
    defaultNavigationOptions: defaultNavigationOptions
});

const NoticeNavigator = createDrawerNavigator({
    Main : MainNavigator,
    About: AboutNavigator,
    Side: SideNavigator,
    Gallery: GalleryScreen

},{
    contentOptions: {
        activeTintColor: Colors.primary
    },

});


const AppContainer = createAppContainer(NoticeNavigator);

export default AppContainer;
