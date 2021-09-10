import * as React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Ionicons, FontAwesome, Fontisto, Feather, MaterialCommunityIcons} from '@expo/vector-icons';


function HomeScreen_() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen_() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings!</Text>
        </View>
    );
}


const Tab = createMaterialTopTabNavigator();

export default function OrdersComponent() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarLabelStyle: {fontSize: 12}
        }}>
            <Tab.Screen name="Home"
                        component={HomeScreen_}
                        options={{
                            title: 'Đang đến'
                        }}
            />
            <Tab.Screen name="Settings" component={SettingsScreen_}
                        options={{
                            title: 'Đã đặt'
                        }}
            />
        </Tab.Navigator>
    );
}
