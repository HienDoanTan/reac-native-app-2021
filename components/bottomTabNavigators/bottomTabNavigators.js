import React from "react";
import {Button, View, Text, SafeAreaView, TouchableWithoutFeedback, StyleSheet} from "react-native";
import Ionicons from 'react-native-vector-icons/FontAwesome';

import {
    createAppContainer,
} from 'react-navigation';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../../Views/Home';
import Brand from '../../Views/Brand';
import Bag from '../../Views/Bag';
import Wishlist from '../../Views/Wishlist';
import Profile from '../../Views/Profile';
import DrawerNavigatorComponent from "./../drawerNavigator/drawerNavigator";

import MyTabBar from '../../components/tabBar';
import ProductsComponent from "../tabs/productsComponent/productsComponent";
import {useTheme} from "@react-navigation/native";
import NotificationsComponent from "../tabs/notificationsComponent/notificationsComponent";
import OrdersComponent from "../tabs/ordersComponent/ordersComponent";

const Tab = createBottomTabNavigator();

function BottomTabNavigatorComponent() {
    const {colors} = useTheme();
    return (
        <Tab.Navigator
            tabBar={(props) => <MyTabBar {...props} />}
            screenOptions={{
                backgroundFeaturedIcon: '#D7465A',
                activeFeaturedTintColor: 'skyblue',
                inactiveFeatureTintColor: 'white',
                showLabel: true,
                activeTintColor: '#002f5f',
                inactiveTintColor: '#95a5a6',
                style: {
                    minHeight: 44,
                    backgroundColor: colors.customBackgroundInside,
                    borderTopWidth: 1,
                    borderTopColor: colors.border
                },
                tabStyle: {}
            }}
        >
            <Tab.Screen name="Home" component={DrawerNavigatorComponent} options={{
                headerShown: false
            }}/>
            <Tab.Screen name="Products" component={ProductsComponent} options={{
                headerShown: false
            }}/>
            <Tab.Screen name="Notifications" component={NotificationsComponent}/>
            <Tab.Screen name="Order" component={OrdersComponent}/>
            <Tab.Screen name="Train" component={Profile}/>
        </Tab.Navigator>
    );
}

export default BottomTabNavigatorComponent;
