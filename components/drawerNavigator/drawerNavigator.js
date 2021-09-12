import {
    ActivityIndicator,
    Button,
    Image, ScrollView,
    Switch,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    StatusBar,
    View
} from "react-native";
import {useState} from "react";
import {DrawerActions, useTheme} from "@react-navigation/native";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import {Ionicons} from "@expo/vector-icons";
import {isDarkThemeTodo} from "../../redux/actions";
import {connect} from "react-redux";
import * as React from "react";
import HomeComponent from "../tabs/homeComponent/homeComponent";
import GiftedChartsComponent from "../charts/gifted_charts/gifted_charts";

const Drawer = createDrawerNavigator();

const DrawerNavigatorComponent = (props) => {
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;
    const [isEnabled, setIsEnabled] = useState(props.is_dark_theme);
    const {colors} = useTheme();

    const handleIsDarkTheme = (value) => {
        props.isDarkThemeTodo(value);
        setIsEnabled(value);
    }
    const CustomDrawerContent = (props) => {
        return (
            <DrawerContentScrollView {...props}>
                <ScrollView style={{flex: 1}}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 10,
                        backgroundColor: '#002f5f'
                    }}>
                        <Image borderRadius={150 / 2} resizeMode={"cover"}
                               source={{uri: 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/160279450_3755203921257635_7403028030697033841_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=YBiU1QxPmucAX9udeCe&tn=kPvU_Zmnuj7WUhyS&_nc_ht=scontent.fsgn8-1.fna&oh=49af01820a37299a521450ae0af7a3b4&oe=6154F46B'}}
                               style={{width: 150, height: 150}}/>
                        <View style={{flex: 1, paddingTop: 10}}>
                            <Text style={{fontSize: 22, color: '#fff'}}>Hiền Đoàn</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, padding: 5}}>
                        <GiftedChartsComponent />
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 20}}>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <Text style={{color: colors.text}}>Dark theme</Text>
                        </View>
                        <View style={{flex: 1, alignItems: 'center'}}>
                            <Switch
                                trackColor={{false: "#767577", true: "#81b0ff"}}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={handleIsDarkTheme}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                    <Button
                        color={'red'}
                        title="Sign Out"
                        onPress={() => {
                        }}
                    />
                </ScrollView>

            </DrawerContentScrollView>
        )
    }

    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props}/>}
            screenOptions={{
                drawerPosition: 'left',
                //drawerType: isLargeScreen ? 'permanent' : 'back',
                drawerStyle: isLargeScreen ? null : {width: '80%'},
                overlayColor: 'transparent',
                swipeEnabled: false,
                headerRight: value => (
                    <TouchableOpacity onPress={() => {
                        props.navigation.dispatch(DrawerActions.toggleDrawer())
                    }}>
                        <View style={{
                            flex: 1,
                            paddingHorizontal: 10,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Image borderRadius={40 / 2} resizeMode={"cover"}
                                   source={{uri: 'https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.6435-9/160279450_3755203921257635_7403028030697033841_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=YBiU1QxPmucAX9udeCe&tn=kPvU_Zmnuj7WUhyS&_nc_ht=scontent.fsgn8-1.fna&oh=49af01820a37299a521450ae0af7a3b4&oe=6154F46B'}}
                                   style={{width: 40, height: 40}}/>
                        </View>
                    </TouchableOpacity>
                ),
                headerLeft: () => (
                    <View style={{flex: 1, paddingHorizontal: 10, justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            source={{uri: 'https://media.amway.com.vn/sys-master/images/h65/h26/8950801661982/Logo_Amway_White.png'}}
                            style={{width: 100, height: 30}}
                            resizeMode={"cover"}
                            PlaceholderContent={<ActivityIndicator/>}
                        />
                    </View>
                ),
                headerStyle: {
                    backgroundColor: '#002f5f',
                },
                headerTitle: ''
            }}
        >
            <Drawer.Screen name="Feeds" component={HomeComponent} options={{
                headerShown: true,
                drawerIcon: ({focused, size}) => (<Ionicons name="settings" size={24} color={'red'}/>),
            }}/>
        </Drawer.Navigator>
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
)(DrawerNavigatorComponent)
