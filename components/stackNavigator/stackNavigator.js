import * as React from 'react';
import {View, Button, Text, Animated} from 'react-native';
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import BottomTabNavigatorComponent from "../bottomTabNavigators/bottomTabNavigators";
import appearanceComponent from "../tabs/profileComponent/appearanceComponent/appearanceComponent";
import AppText from "../../helpers/swicthLanguage";
import {useTheme} from "@react-navigation/native";
import ProductsDetailsComponent from "../tabs/productsComponent/products_details_component";

function Test({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Profile screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()}/>
        </View>
    );
}

const forFade = ({current, next}) => {
    const opacity = Animated.add(
        current.progress,
        next ? next.progress : 0
    ).interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, 1, 0],
    });

    return {
        leftButtonStyle: {opacity},
        rightButtonStyle: {opacity},
        titleStyle: {opacity},
        backgroundStyle: {opacity},
    };
};

const Stack = createStackNavigator();

function MyStack() {
    const {colors} = useTheme();
    return (
        <Stack.Navigator screenOptions={({route, navigation}) => ({
            headerShown: false,
            gestureEnabled: true,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        })}>
            <Stack.Screen
                name="BottomTabNavigatorComponent"
                component={BottomTabNavigatorComponent}
            />
            <Stack.Screen
                name="appearance"
                component={appearanceComponent}
                options={({route}) => ({
                    headerShown: true,
                    title: <AppText style={{color: '#fff'}} i18nKey={'txt-appearance'}/>,
                    headerStyle: {
                        backgroundColor: '#002f5f'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'normal'
                    },
                    headerTitleAlign: 'center'
                })}
            />
            <Stack.Screen
                name="ProductsDetailsComponent"
                component={ProductsDetailsComponent}
                options={({route}) => ({
                    headerShown: true,
                })}
            />
        </Stack.Navigator>
    );
}

export default function StackNavigatorComponent() {
    return (
        <MyStack/>
    );
}
