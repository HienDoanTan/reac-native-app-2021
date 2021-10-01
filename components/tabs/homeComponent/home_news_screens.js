import * as React from 'react';
import {
    Text,
    View,
    SafeAreaView, Dimensions, FlatList, StyleSheet, ScrollView, useWindowDimensions
} from 'react-native';

import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';
import {useRef, useState} from "react";
import {useTheme} from "@react-navigation/native";
import {ListItem, Avatar} from 'react-native-elements';
import {Ionicons, FontAwesome, Fontisto, Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import data_news from "../../../data/data_news";
import CarouselComponent from "../../carousel/carousel";

export default function HomeNewsComponent() {
    const {colors} = useTheme();
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;

    const renderItem = ({item, index}) => (
        <ListItem key={index} bottomDivider={false}
                  containerStyle={{
                      backgroundColor: colors.customBackgroundInside,
                      //padding: 10,
                      // marginBottom: 10,
                      // marginHorizontal: 10,
                      // borderRadius: 10,
                  }}>
            <ListItem.Content>
                <ListItem.Title numberOfLines={2} style={{
                    color: colors.text,
                    fontWeight: 'bold'
                }}>{item.title}</ListItem.Title>
                <ListItem.Subtitle numberOfLines={1}
                                   style={{color: colors.text, paddingVertical: 5}}>{item.text}</ListItem.Subtitle>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                }}>
                    <View style={{
                        backgroundColor: item.color,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 4,
                        padding: 10,
                        maxHeight: 20,
                        marginRight: 10
                    }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 12,
                            textTransform: "uppercase"
                        }}>{item.quote}</Text>
                    </View>
                    <Ionicons name="time-outline" size={24} color="black"/>
                    <Text style={{color: '#95a5a6'}}>15 minutes ago</Text>
                </View>
            </ListItem.Content>
            <Avatar overlayContainerStyle={{borderRadius: 20}}
                    size={isLargeScreen ? "xlarge" : "large"}
                    source={{uri: item.image}}/>
        </ListItem>
    );

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
            <View style={{flex: 1}}>
                <View>
                    <FlatList
                        ListHeaderComponent={CarouselComponent}
                        data={data_news}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => {
                            return item.id.toString();
                        }}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

