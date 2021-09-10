import {Image, View, Text, FlatList, StyleSheet, Button} from "react-native";
import React, {useRef} from "react";
import SafeAreaView from 'react-native-safe-area-view';
import {ListItem, Avatar} from 'react-native-elements'
import {useTheme, useScrollToTop} from "@react-navigation/native";
import {Ionicons, FontAwesome5, Entypo, FontAwesome} from '@expo/vector-icons';
import AppText from "../../../helpers/swicthLanguage";

const DATA = [
    {
        name: 'txt-appearance',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        navigate: null
    },
    {
        name: 'txt-appearance',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman',
        navigate: null
    },
    {
        name: 'txt-appearance',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        navigate: null
    },
    {
        name: 'txt-appearance',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman',
        navigate: null
    },
    {
        name: 'txt-appearance',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        navigate: null
    },
    {
        name: 'txt-appearance',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman',
        navigate: null
    },
    {
        name: 'txt-appearance',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President',
        navigate: null
    },
    {
        name: 'txt-appearance',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Select appearance',
        navigate: 'appearance'
    },
    {
        name: 'txt-appearance',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Select appearance',
        navigate: 'appearance'
    },
    {
        name: 'txt-appearance',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Select appearance',
        navigate: 'appearance'
    },
    {
        name: 'txt-appearance',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Select appearance',
        navigate: 'appearance'
    },
    {
        name: 'txt-appearance',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Select appearance',
        navigate: 'appearance'
    },

];

export default function ProfileComponent(props) {
    const {colors} = useTheme();
    const ref = React.useRef(null);

    useScrollToTop(React.useRef({
        scrollToTop: () => ref.current?.scrollToOffset({ offset: -100 }),
    }));
    const renderItem = ({item}) => (
        <ListItem containerStyle={{backgroundColor: colors.background}}
                  bottomDivider={false}
                  onPress={() => {
                      if (item.navigate !== null) {
                          props.navigation.navigate(item.navigate)
                      }
                  }}>
            <FontAwesome5 name="affiliatetheme" size={24} color={colors.text}/>
            <ListItem.Content>
                <ListItem.Title style={{color: colors.text, fontWeight: 'bold'}}>
                    <AppText style={{color: colors.text}}
                             i18nKey={item.name}/>
                </ListItem.Title>
                <ListItem.Subtitle style={{color: colors.text}}>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron size={26} color={colors.text} name={"chevron-right"}/>
        </ListItem>
    )

    const getHeader = () => {
        return (
            <View style={{flex: 1, backgroundColor: "#002f5f"}}>
                <View style={{flex: 1, padding: 10, alignItems: 'center', flexDirection: "column"}}>
                    <View style={{flex: 1}}>
                        <Image borderRadius={150 / 2} resizeMode={"cover"}
                               source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'}}
                               style={{width: 150, height: 150}}/>
                    </View>
                    <View style={{flex: 1, paddingVertical: 10}}>
                        <Text style={{fontSize: 20, color: '#fff'}}>Hien Doan</Text>
                    </View>
                </View>
            </View>
        )
    }

    const getFooter = () => {
        return (
            <View style={{flex: 1, padding: 10}}>
                <Button color={'red'} title={'Sign Out'} onPress={() => {
                }}/>
            </View>
        )
    }

    return (
        <SafeAreaView style={{flex: 1}} forceInset={{top: "never"}}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={getHeader}
                ListFooterComponent={getFooter}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                ref={ref}
            />
        </SafeAreaView>

    )
}

