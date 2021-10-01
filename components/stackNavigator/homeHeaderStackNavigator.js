import {Text, View, Dimensions, Image, TouchableOpacity, ActivityIndicator} from "react-native";
import React from "react";
import {DrawerActions, useTheme} from "@react-navigation/native";

export default function HomeHeaderStackNavigator(props) {
    const {is_dark_theme} = props;
    const {colors} = useTheme();
    const image_logo = is_dark_theme ? require('../../assets/logo/3.png') : require('../../assets/logo/4.png');

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.backgroundBottomTab,
                width: Dimensions.get("window").width + 10,
                flexDirection: 'row',
                marginLeft: -20
            }}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start'}}>
                <View style={{flex: 1, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        source={image_logo}
                        style={{width: 100, height: 30}}
                        resizeMode={"cover"}
                        PlaceholderContent={<ActivityIndicator/>}
                    />
                </View>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                <TouchableOpacity activeOpacity={0.9} onPress={() => {
                    props.navigation.dispatch(DrawerActions.toggleDrawer());
                }}>
                    <View style={{
                        flex: 1,
                        paddingHorizontal: 20,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image borderRadius={40 / 2} resizeMode={"cover"}
                               source={{uri: 'https://ra.ac.ae/wp-content/uploads/2017/02/user-icon-placeholder.png'}}
                               style={{width: 40, height: 40}}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
