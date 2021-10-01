import React, {useEffect, useRef, useState} from 'react';
import {
    SafeAreaView,
    View,
    TouchableWithoutFeedback,
    StyleSheet,
    Text,
    Animated,
    TouchableOpacity
} from 'react-native';
import {Avatar, Badge, Icon, withBadge} from 'react-native-elements';
import {Ionicons, Entypo, Fontisto, FontAwesome, Feather} from "@expo/vector-icons";
import {useTheme} from "@react-navigation/native";
import * as config_enum from "../helpers/config_enums";
import {useFonts} from "expo-font";

export default function MyTabBar({state, descriptors, navigation}) {
    const akin = new Animated.Value(0);
    const rotation = akin.interpolate({
        inputRange: [-1, 1], // left side to right side
        outputRange: ['-10deg', '10deg']// before that we have to check now it's perfect
    });
    const defaultSize = 24;

    return (
        <View style={{flexDirection: 'row'}}>
            {state.routes.map((route, index) => {
                const routeName = route.name;
                const {options} = descriptors[route.key];
                let iconName;
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({name: route.name, merge: true});
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                //----------
                switch (routeName) {
                    case config_enum.HOME_TAB:
                        iconName = <Ionicons name={isFocused ? 'md-home' : 'md-home-outline'} size={defaultSize}
                                             color={isFocused ? options.activeTintColor : options.inactiveTintColor}/>;
                        break;
                    case config_enum.PRODUCTS_TAB:
                        iconName =
                            <Animated.View style={{alignSelf: 'center', transform: [{rotate: rotation}]}}>
                                <Entypo name="shopping-bag" size={defaultSize}
                                        color={isFocused ? options.activeTintColor : options.inactiveTintColor}/>
                            </Animated.View>;
                        break;
                    case config_enum.NOTIFICATIONS_TAB:
                        iconName = <Fontisto name={'bell-alt'} size={defaultSize}
                                             color={isFocused ? options.activeTintColor : options.inactiveTintColor}/>
                        break;
                    case config_enum.ORDER_TAB:
                        iconName = <FontAwesome name={'history'} size={defaultSize}
                                                color={isFocused ? options.activeTintColor : options.inactiveTintColor}/>
                        break;
                    case config_enum.MORE_TAB:
                        iconName = <Feather name={'menu'} size={defaultSize}
                                            color={isFocused ? options.activeTintColor : options.inactiveTintColor}/>
                        break;
                    default:
                        null;
                }

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? {selected: true} : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        activeOpacity={1}
                        style={{flex: 1}}
                        key={index}
                    >
                        <View style={{alignItems: 'center', justifyContent: 'center', ...options.style}}>
                            <View style={{flex: 1}}>
                                {iconName}
                            </View>
                            <Badge
                                containerStyle={{
                                    top: -4,
                                    right: -20

                                }}
                                badgeStyle={{
                                    minHeight: 20,
                                    minWidth: 20,
                                    borderRadius: 20,
                                    borderColor: 'red'
                                }}
                                value={5}
                                status="error"/>
                            {options.showLabel && (
                                <Text style={{fontSize: 12}}>
                                    {label}
                                </Text>
                            )}
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    customIcon: {
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [
            {translateY: -10}
        ]
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconLabel: {
        fontSize: 9,
        fontWeight: '600'
    },
    defaultIcon: {},
})
