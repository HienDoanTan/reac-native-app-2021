import React from "react";
import {connect} from "react-redux";
import { useFonts } from 'expo-font';
import MyTabBar from '../../components/tabBar';
import {useTheme} from "@react-navigation/native";
import AppText from "../../helpers/swicthLanguage";
import * as config_enum from "../../helpers/config_enums";
import HomeComponent from "../tabs/homeComponent/homeComponent";
import OrdersComponent from "../tabs/ordersComponent/ordersComponent";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileComponent from "../tabs/profileComponent/profileComponent";
import ProductsComponent from "../tabs/productsComponent/products_component";
import {changeColor, changeLanguage, isDarkThemeTodo} from "../../redux/actions";
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import NotificationsComponent from "../tabs/notificationsComponent/notificationsComponent";
import ProductsDetailsComponent from "../tabs/productsComponent/products_details_component";
const Tab = createBottomTabNavigator();
const ProductsStack = createStackNavigator();

function ProductsStackScreen() {
    return (
        <ProductsStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <ProductsStack.Screen
                name="Products"
                component={ProductsComponent}
            />
            <ProductsStack.Screen
                name="ProductsDetails"
                component={ProductsDetailsComponent}
                options={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
                }}
            />
        </ProductsStack.Navigator>
    );
}

const BottomTabNavigatorComponent = (props) => {
    const {colors} = useTheme();
    return (
        <Tab.Navigator
            tabBar={props => <MyTabBar {...props} />}
            screenOptions={{
                backgroundFeaturedIcon: '#D7465A',
                activeFeaturedTintColor: 'skyblue',
                inactiveFeatureTintColor: 'white',
                showLabel: true,
                headerShown: false,
                activeTintColor: props.theme_color,
                inactiveTintColor: '#bdc3c7',
                style: {
                    backgroundColor: colors.backgroundBottomTab,
                    borderTopWidth: 0.5,
                    borderTopColor: colors.border,
                    height: 50,
                    padding: 2
                },
                tabStyle: {}
            }}
        >
            <Tab.Screen name={config_enum.HOME_TAB}
                        component={HomeComponent}
                        options={{
                            headerShown: false,
                            title: <AppText style={{color: colors.text}} i18nKey={'txt-notifications'}/>
                        }}/>
            <Tab.Group>
                <Tab.Screen name={config_enum.PRODUCTS_TAB}
                            component={ProductsStackScreen}
                            options={{
                                headerShown: false,
                                title: <AppText style={{color: colors.text}} i18nKey={'txt-product'}/>,
                                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                            }}
                />
            </Tab.Group>

            <Tab.Screen name={config_enum.NOTIFICATIONS_TAB}
                        component={NotificationsComponent}
                        options={{
                            headerShown: false,
                            title: <AppText style={{color: colors.text}} i18nKey={'txt-notifications'}/>,
                            headerStyle: {
                                backgroundColor: '#002f5f',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold'
                            },
                        }}/>
            <Tab.Screen name={config_enum.ORDER_TAB}
                        component={OrdersComponent}
                        options={{
                            headerShown: false,
                            title: <AppText style={{color: colors.text}} i18nKey={'txt-order'}/>
                        }}/>
            <Tab.Screen name={config_enum.MORE_TAB}
                        component={ProfileComponent}
                        options={{
                            headerShown: false,
                            title: <AppText style={{color: colors.text}} i18nKey={'txt-more'}/>
                        }}/>
        </Tab.Navigator>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        language: state.todos.language,
        theme_color: state.todos.theme_color,
        is_dark_theme: state.todos.is_dark_theme
    }
}

const mapDispatchToProps = {isDarkThemeTodo, changeLanguage, changeColor}

export default connect(mapStateToProps, mapDispatchToProps)(BottomTabNavigatorComponent)
