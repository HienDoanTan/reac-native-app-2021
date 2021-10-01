import * as React from 'react';
import {connect} from "react-redux";
import {View, Button, Text} from 'react-native';
import * as config_enum from "../../helpers/config_enums";
import HomeHeaderStackNavigator from "./homeHeaderStackNavigator";
import {getFocusedRouteNameFromRoute} from "@react-navigation/native";
import Products_header_stack_navigator from "./products_header_stack_navigator";
import {changeColor, changeLanguage, isDarkThemeTodo} from "../../redux/actions";
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import BottomTabNavigatorComponent from "../bottomTabNavigators/bottomTabNavigators";
import NotificationsHeaderStackNavigator from "./notifications_header_stack_navigator";

function ModalScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 30}}>This is a modal!</Text>
            <Button onPress={() => navigation.goBack()} title="Dismiss"/>
        </View>
    );
}

const Stack = createStackNavigator();

let routeName;

function getHeaderTitle(route) {
    return routeName = getFocusedRouteNameFromRoute(route) ?? config_enum.HOME_TAB;
}

function MyStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="BottomTabNavigatorComponent"
                component={BottomTabNavigatorComponent}
                options={({route}) => ({
                    headerShown: false,
                    headerTitle: getHeaderTitle(route),
                })}
            />
            <Stack.Screen
                name="MyModal"
                component={ModalScreen}
                options={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
                }}/>
        </Stack.Navigator>
    );
}

function StackNavigatorComponent(props) {
    return (
        <Stack.Navigator screenOptions={({route, navigation}) => ({
            gestureEnabled: true,
            headerShown: true,
            headerTitle: value => {
                switch (routeName) {
                    case config_enum.HOME_TAB:
                        return <HomeHeaderStackNavigator {...props}/>;
                    case config_enum.PRODUCTS_TAB:
                        return <Products_header_stack_navigator value={value} {...props}/>;
                    case config_enum.NOTIFICATIONS_TAB:
                        return <NotificationsHeaderStackNavigator  {...props}/>;
                    case config_enum.ORDER_TAB:
                        return <Text>'My account'</Text>;
                    case config_enum.MORE_TAB:
                        return <Text>'My account'</Text>;
                }

            },
        })}>
            <Stack.Screen
                name="MyStack"
                component={MyStack}
            />
        </Stack.Navigator>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        is_dark_theme: state.todos.is_dark_theme,
        language: state.todos.language,
        theme_color: state.todos.theme_color
    }
}

const mapDispatchToProps = {isDarkThemeTodo, changeLanguage, changeColor}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StackNavigatorComponent)

