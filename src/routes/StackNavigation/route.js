import React from 'react';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../../screens/Splash/Splash';
import Login from '../../screens/Auth/Login';
import OtpScreen from '../../screens/Auth/OtpScreen';
import Dashboard from '../../screens/DashBoard/DashBoard';
import AddParent from '../../screens/AddParent/AddParent';
import ParentList from '../../screens/AddParent/ParentList';
import ActivationHistory from '../../screens/ActivationHistory/ActivationHistory';









const Stack = createNativeStackNavigator();


export const navigationRef = createNavigationContainerRef();


const StackNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#000' },
        }}
        initialRouteName="Splash">
        <Stack.Screen name={'Splash'} component={Splash} />
        <Stack.Screen name={'Login'} component={Login} />
        <Stack.Screen name={'OtpScreen'} component={OtpScreen} />
        <Stack.Screen name={'Dashboard'} component={Dashboard} />
        <Stack.Screen name={'AddParent'} component={AddParent} />
        <Stack.Screen name={'ParentList'} component={ParentList} />
        <Stack.Screen name={'ActivationHistory'} component={ActivationHistory} />




      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
