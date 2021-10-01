import {useNavigation, useTheme} from "@react-navigation/native";
import {useRef, useState} from "react";
import {Dimensions, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Ionicons, Feather, Entypo, FontAwesome, MaterialIcons} from "@expo/vector-icons";
import * as React from "react";

export default function NotificationsHeaderStackNavigator(props) {
    const {colors} = useTheme();
    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.backgroundBottomTab,
            width: Dimensions.get("window").width + 10,
            flexDirection: 'row',
            marginLeft: -20
        }}>
            <View style={{flex: 1, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'flex-start'}}>
                <Text style={{color: colors.text, fontSize: 20, fontWeight: 'bold'}}>Thông báo</Text>
            </View>
            <View style={{flex: 1, paddingHorizontal: 20, justifyContent: 'center', alignItems: 'flex-end'}}>
                <Ionicons name={'settings-sharp'} size={20} color={colors.text} />
            </View>
        </View>
    );
}
