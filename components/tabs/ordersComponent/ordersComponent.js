import * as React from 'react';
import {Text, View, SafeAreaView, Button, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Ionicons, FontAwesome, Fontisto, Feather, MaterialCommunityIcons} from '@expo/vector-icons';


function HomeScreen_({navigation}) {
    return (
        <SafeAreaView style={{flex: 1}} forceInset={{vertical: 'always'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button
                    onPress={() => navigation.navigate('MyModal')}
                    title="Open Modal"
                />
            </View>
        </SafeAreaView>

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
            tabBarLabelStyle: {fontSize: 12},
            tabBarPressOpacity: 0
        }}>
            <Tab.Screen name="Home"
                        component={HomeScreen_}
                        options={{
                            title: 'Đang đến',
                            tabBarPressOpacity: 0
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
