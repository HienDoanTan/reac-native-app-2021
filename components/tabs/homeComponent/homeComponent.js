import {
    Text,
    View,
    Button,
    useWindowDimensions,
    ActivityIndicator,
    Image,
    ScrollView,
    TouchableOpacity,
    SafeAreaView, Switch
} from "react-native";
import * as React from "react";
import {connect} from 'react-redux';
import {isDarkThemeTodo} from '../../../redux/actions';
import {DrawerActions, useTheme} from "@react-navigation/native";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import {ListItem} from 'react-native-elements';
import {Ionicons, FontAwesome, Fontisto, Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import {Pager, PagerProvider} from '@crowdlinker/react-native-pager';
import {useState} from "react";
import CarouselComponent from "../../carousel/carousel";

const Drawer = createDrawerNavigator();

function HomeComponent(props) {
    const [activeIndex, onChange] = useState(1);
    return (
        <ScrollView>
            <SafeAreaView style={{flex: 1}}>
                <View
                    style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
                    <CarouselComponent />
                </View>
            </SafeAreaView>
        </ScrollView>

    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        is_dark_theme: state.todos.is_dark_theme,
    }
}

const mapDispatchToProps = {isDarkThemeTodo}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent)
