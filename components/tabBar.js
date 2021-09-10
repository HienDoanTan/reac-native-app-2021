import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    View,
    TouchableWithoutFeedback,
    StyleSheet,
    Text,
    Animated,
    TouchableOpacity
} from 'react-native'
import {Ionicons, FontAwesome5, MaterialCommunityIcons} from "@expo/vector-icons";

export default function MyTabBar({state, descriptors, navigation}) {
    const [tabBarShowLabel, set_tabBarShowLabel] = useState(true);

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
                if (routeName === 'Home') {
                    iconName = <Ionicons name={'home'} size={isFocused ? 40 : 25}
                              color={isFocused ? options.activeTintColor : options.inactiveTintColor}/>
                } else if (routeName === 'Products') {
                    iconName = <MaterialCommunityIcons name={'shopping'} size={isFocused ? 40 : 25}
                                         color={isFocused ? options.activeTintColor : options.inactiveTintColor}/>
                } else if (routeName === 'Bag') {
                    iconName = <Ionicons name={'home'} size={isFocused ? 40 : 25}
                                         color={isFocused ? options.activeTintColor : options.inactiveTintColor}/>
                } else if (routeName === 'Wishlist') {
                    iconName = <Ionicons name={'home'} size={isFocused ? 40 : 25}
                                         color={isFocused ? options.activeTintColor : options.inactiveTintColor}/>
                } else if (routeName === 'Profile') {
                    iconName = <Ionicons name={'home'} size={isFocused ? 40 : 25}
                                         color={isFocused ? options.activeTintColor : options.inactiveTintColor}/>
                }
                //----------

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
                            <View style={[{flex: 1}, isFocused ? styles.customIcon : styles.defaultIcon]}>
                                {iconName}
                            </View>
                            {tabBarShowLabel && (
                                <Text style={{color: isFocused ? options.activeTintColor : options.inactiveTintColor, fontSize: 12}}>
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
