import {ListItem, Avatar, Button} from 'react-native-elements';
import React from "react";
import {FlatList} from "react-native";
import list from './../../../data/data_notifications';
import {Ionicons, FontAwesome, Fontisto, Feather, AntDesign} from '@expo/vector-icons';
import {useScrollToTop, useTheme} from "@react-navigation/native";

function NotificationsComponent() {
    const ref = React.useRef(null);
    const {colors} = useTheme();
    useScrollToTop(React.useRef({
        scrollToTop: () => ref.current?.scrollToOffset({ offset: -100 }),
    }));
    const keyExtractor = (item, index) => index.toString();
    const renderItem = ({item}) => (
        <ListItem.Swipeable
            leftContent={
                <Button
                    title="Info"
                    icon={{name: 'info', color: 'white'}}
                    buttonStyle={{minHeight: '100%'}}
                />
            }
            rightContent={
                <Button
                    title="Delete"
                    icon={{name: 'delete', color: 'white'}}
                    buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
                />
            }
            bottomDivider={false}
            containerStyle={{backgroundColor: colors.background, maxHeight: 60}}
        >
            <Avatar size="medium" rounded source={{uri: item.avatar_url}}/>
            <ListItem.Content>
                <ListItem.Title style={{color: colors.text, fontWeight: 'bold'}}>{item.name}</ListItem.Title>
                <ListItem.Subtitle style={{color: colors.text}}>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron size={22} color={colors.text}/>
        </ListItem.Swipeable>
    );

    return (
        <FlatList
            keyExtractor={keyExtractor}
            data={list}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ref={ref}
        />
    )
}

export default NotificationsComponent;
