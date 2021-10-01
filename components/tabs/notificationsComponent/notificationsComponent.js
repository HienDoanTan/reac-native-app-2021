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

    const renderItem = ({item, index}) => (
        <ListItem containerStyle={{
            backgroundColor: colors.customBackgroundInside,
            // padding: 10,
            // marginBottom: 10,
            // marginHorizontal: 10,
            // borderRadius: 10,
            flex: 1,
            //
            // shadowColor: colors.border,
            // shadowOffset: {
            //     width: 0,
            //     height: 1,
            // },
            // shadowOpacity: 0.20,
            // shadowRadius: 1.41,
            // elevation: 2
        }} key={index} bottomDivider={false}>
            <Avatar size="medium" rounded source={{uri: item.avatar_url}}/>
            <ListItem.Content>
                <ListItem.Title style={{color: colors.text, fontWeight: 'bold'}}>{item.name}</ListItem.Title>
                <ListItem.Subtitle style={{color: colors.text, paddingVertical: 5}}>{item.subtitle}</ListItem.Subtitle>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Ionicons name="time" size={24} color={'#3498db'}/>
                    <Text style={{color: '#95a5a6'}}>15 minutes ago</Text>
                </View>
            </ListItem.Content>
            <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                <Entypo name="dots-two-horizontal" size={16} color={colors.text}/>
            </TouchableOpacity>
        </ListItem>
    );

    return (
        <View style={{flex: 1}}>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
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
                height={300}
                openDuration={250}
                customStyles={{
                    container: {
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        backgroundColor: colors.backgroundBottomTab
                    }
                }}
            >
                <Text>Text</Text>
            </RBSheet>
        </View>
    )
}

export default NotificationsComponent;
