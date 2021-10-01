import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Ionicons, FontAwesome, Fontisto, Feather, MaterialCommunityIcons} from '@expo/vector-icons';

import AnimatedSearchbar from 'react-native-animated-searchbar';
import SearchScreen from './SearchScreen';





const Example = () => {

    const HeaderRight = <View style={styles.rightSide}>
        <Feather name={"message-circle"} size={24} color={"#d32f2f"} />
    </View>

    const SearchBarIcon = <View style={styles.baricon}>
        <FontAwesome name={"search"} size={18} color={"gray"} />
    </View>



    return (
        <AnimatedSearchbar
            headerRight={HeaderRight}
            searchBarIcon={SearchBarIcon}
            searchScreen={<SearchScreen />}
            onChangeText={(text) => console.log(text)}
            title={"Contacts"}
        >
            <View style={styles.mainView}>
                <Text style={styles.text}>Main Screen</Text>
                {/* Your screen */}
            </View>
        </AnimatedSearchbar>
    );
}

export default Example;

const styles = StyleSheet.create({
    rightSide: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 20
    },
    baricon: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginLeft: 10
    },
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple'
    },
    searchScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    text: {
        fontSize: 28,
        color: "white"
    }
})
