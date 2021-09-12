import {ListItem, Avatar, Button} from 'react-native-elements';
import React, {useMemo, useRef, useState} from "react";
import {FlatList, TouchableOpacity, View, Text} from "react-native";
import list from './../../../data/data_notifications';
import {Ionicons, FontAwesome, FontAwesome5, Fontisto, Entypo, Feather, AntDesign} from '@expo/vector-icons';
import {useScrollToTop, useTheme} from "@react-navigation/native";
import RBSheet from "react-native-raw-bottom-sheet";


function NotificationsComponent() {
    const ref = React.useRef(null);
    const {colors} = useTheme();
    const refRBSheet = useRef();

    useScrollToTop(React.useRef({
        scrollToTop: () => ref.current?.scrollToOffset({offset: -100}),
    }));
    const keyExtractor = (item, index) => index.toString();
    const renderItem = ({item, index}) => (
        <ListItem containerStyle={{backgroundColor: colors.background}} key={index} bottomDivider={false}>
            <Avatar size="medium" rounded source={{uri: item.avatar_url}}/>
            <ListItem.Content>
                <ListItem.Title style={{color: colors.text, fontWeight: 'bold'}}>{item.name}</ListItem.Title>
                <ListItem.Subtitle style={{color: colors.text}}>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                <Entypo name="dots-three-horizontal" size={16} color={colors.text}/>
            </TouchableOpacity>
        </ListItem>
    );

    return (
        <View style={{flex: 1}}>
            <FlatList
                keyExtractor={keyExtractor}
                data={list}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                ref={ref}
            />
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                animationType={'fade'}
                height={300}
                openDuration={250}
                customStyles={{
                    container: {
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10
                    }
                }}
            >
                <Text>Text</Text>
            </RBSheet>
        </View>
    )
}

export default NotificationsComponent;
