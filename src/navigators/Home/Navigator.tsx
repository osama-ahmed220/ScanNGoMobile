import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import ScannedQRCodeLoadingScreen from '../../screens/ScannedQRCodeLoadingScreen/ScannedQRCodeLoadingScreen';
import ScanQRCodeScreen from '../../screens/ScanQRCodeScreen/ScanQRCodeScreen';
import {HomeStackRouteList} from './RouteTypes';

const HomeStack = createNativeStackNavigator<HomeStackRouteList>();
const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: 'Scan & Go',
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="ScanQRCode"
        component={ScanQRCodeScreen}
        options={{
          title: 'Scan & Go (Scan QR)',
        }}
      />
      <HomeStack.Screen
        name="ScannedQRCodeLoading"
        component={ScannedQRCodeLoadingScreen}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
