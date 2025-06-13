import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ActiveDonation, ActiveHome, ActiveNotification, ActiveProfile, DeActiveDonation, DeActiveNotification, DeActiveProfile, Donation, ServiceIcon, TabBuy, TabCalendar, TabHome, TabProfile, } from '../../assets/SVGs';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Alert, BackHandler, Dimensions, Image, View } from 'react-native';
import CustomText from '../../components/TextComponent';
import color, { App_Primary_color } from '../../common/Colors/colors';
import { FONTS_FAMILY } from '../../assets/Fonts';
import DonationScreen from '../../screens/Donation/DonationList';
import HomeScreen from '../../screens/Home/Home';
import IMG from '../../assets/Images';
import NotificationScreen from '../../screens/Notification/Notification';
import ProfileScreen from '../../screens/Profile/Profile';





const Tab = createBottomTabNavigator();

function TabNavigation() {


    React.useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            const currentRoute = navigationRef?.getCurrentRoute()?.name;
            console.log('🔥 Current Route:', currentRoute);

            if (currentRoute === 'Home') {
                Alert.alert(
                    'Exit App',
                    'Do you want to exit the app?',
                    [
                        { text: 'Cancel', onPress: () => null, style: 'cancel' },
                        { text: 'OK', onPress: () => BackHandler.exitApp() }, // ✅ Direct app exit
                    ],
                    { cancelable: false }
                );
                return true;
            }


            //   BackHandler.exitApp(); 
            return true;
        });

        return () => backHandler.remove(); // ✅ Cleanup properly
    }, []);


    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    // bottom: verticalScale(20),
                    height: verticalScale(80),
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 20,
                    shadowColor: '#000',
                    // width: Dimensions.get('screen').width / 1.05,
                    backgroundColor: 'white',
                    // marginHorizontal: scale(15),
                    // borderRadius: 16,
                    alignSelf: 'center'
                },
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    gestureEnabled: false,

                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) =>
                        focused ? <ActiveHome style={{top:15}}/> :
                            <Image
                            source={IMG.DeActiveHome}
                            style={{
                                height:45,
                                width:45,
                                tintColor:'gray',
                                top:15
                            }}
                            />
                    ,
                }}
            />
            <Tab.Screen
                name="Donation"
                component={DonationScreen}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) =>
                        focused ? <ActiveDonation style={{top:15}} /> :
                            <DeActiveDonation style={{top:15}} />
                    ,
                }}
            />



            <Tab.Screen
                name="Notification"
                component={NotificationScreen}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) =>
                        focused ? <ActiveNotification style={{top:15}} /> :
                            <DeActiveNotification style={{top:15}} />
                    ,
                }}
            />



            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) =>
                        focused ?
                            <ActiveProfile  style={{top:15}}/>
                            :
                            <DeActiveProfile style={{top:15}}/>
                    ,
                }}
            />

        </Tab.Navigator>
    );
}

export default TabNavigation;
