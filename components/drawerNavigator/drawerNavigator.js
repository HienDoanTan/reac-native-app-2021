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
import {useEffect, useState} from "react";
import {useNavigation, useTheme} from "@react-navigation/native";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import {Entypo, Ionicons} from "@expo/vector-icons";
import {isDarkThemeTodo, changeLanguage, changeColor} from "../../redux/actions";
import {connect} from "react-redux";
import * as React from "react";
import GiftedChartsComponent from "../charts/gifted_charts/gifted_charts";
import AppText from "../../helpers/swicthLanguage";
import StackNavigatorComponent from "../stackNavigator/stackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigatorComponent = (props) => {
    const {language, theme_color} = props;
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;
    const [isEnabled, setIsEnabled] = useState(props.is_dark_theme);
    const wisteria = "#2980b9";
    const [txtColor, setTxtColor] = useState(theme_color);
    const peter_river = "#8e44ad";
    const emerald = "#fb5533";

    const {colors} = useTheme();
    const isVNLang = language === 'vi';

    const ImageVNActive = isVNLang ? require('../../assets/flag/vietnam.png') : require('../../assets/flag/vietnam-black.png');
    const ImageEngActive = !isVNLang ? require('../../assets/flag/united-states.png') : require('../../assets/flag/united-states-black.png');

    const handleIsDarkTheme = (value) => {
        props.isDarkThemeTodo(value);
        setIsEnabled(value);
    }

    const setLanguage = language => {
        props.changeLanguage(language);
    }

    const setColor = color => {
        props.changeColor(color);
        setTxtColor(color);
    }


    const CustomDrawerContent = (props) => {
        return (
            <DrawerContentScrollView style={{backgroundColor: colors.backGroundBody}} {...props}>
                <ScrollView style={{flex: 1}}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 10,
                    }}>
                        <Image borderRadius={50} resizeMode={"cover"}
                               source={{uri: 'https://ra.ac.ae/wp-content/uploads/2017/02/user-icon-placeholder.png'}}
                               style={{width: 100, height: 100}}/>
                        <View style={{flex: 1, paddingTop: 10}}>
                            <Text style={{fontSize: 22, color: colors.text}}>Hiền Đoàn</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        padding: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.backgroundBottomTab,
                        margin: 20,
                        borderRadius: 20
                    }}>
                        <GiftedChartsComponent/>
                    </View>
                    <View style={{flex: 1, paddingHorizontal: 20}}>
                        <Text style={{color: colors.text, fontSize: 18, fontWeight: 'bold'}}>
                            <AppText i18nKey={'setting'}/>
                        </Text>
                    </View>
                    <View style={{flex: 1, margin: 20, borderRadius: 20, backgroundColor: colors.backgroundBottomTab}}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            padding: 10
                        }}>
                            <View
                                style={{flex: 1, alignItems: 'flex-start', paddingLeft: 20, justifyContent: 'center'}}>
                                <Text style={{color: colors.text}}>
                                    <AppText i18nKey={'txt-dark-mode'}/>
                                </Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <Switch
                                    trackColor={{false: "#767577", true: "#81b0ff"}}
                                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={handleIsDarkTheme}
                                    value={isEnabled}
                                />
                            </View>
                        </View>

                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            padding: 10
                        }}>
                            <View
                                style={{flex: 1, alignItems: 'flex-start', paddingLeft: 20, justifyContent: 'center'}}>
                                <Text style={{color: colors.text}}>
                                    <AppText i18nKey={'txt-color'}/>
                                </Text>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-evenly'
                            }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => {
                                        setColor(wisteria)
                                    }}
                                    style={{
                                        borderWidth: 1,
                                        borderColor: 'rgba(0,0,0,0.2)',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: txtColor === wisteria ? 30 : 15,
                                        height: txtColor === wisteria ? 30 : 15,
                                        backgroundColor: wisteria,
                                        borderRadius: 50,
                                    }}
                                >
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => {
                                        setColor(peter_river)
                                    }}
                                    style={{
                                        borderWidth: 1,
                                        borderColor: 'rgba(0,0,0,0.2)',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: txtColor === peter_river ? 30 : 15,
                                        height: txtColor === peter_river ? 30 : 15,
                                        backgroundColor: peter_river,
                                        borderRadius: 50,
                                    }}
                                >
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => {
                                        setColor(emerald)
                                    }}
                                    style={{
                                        borderWidth: 1,
                                        borderColor: 'rgba(0,0,0,0.2)',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: txtColor === emerald ? 30 : 15,
                                        height: txtColor === emerald ? 30 : 15,
                                        backgroundColor: emerald,
                                        borderRadius: 50,
                                    }}
                                >
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            padding: 10
                        }}>
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: 'flex-start',
                                    paddingLeft: 20,
                                    justifyContent: 'flex-start'
                                }}>
                                <Text style={{color: colors.text}}>
                                    <AppText i18nKey={'set-language'}/>
                                </Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 30, paddingVertical: 10}}>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <TouchableOpacity activeOpacity={1} onPress={() => setLanguage('vi')}
                                                      style={{marginLeft: 20}}>
                                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                            <Image source={ImageVNActive}
                                                   style={{height: 60, width: 60, resizeMode: 'cover'}}/>
                                            <Text style={{color: isVNLang ? txtColor : 'grey'}}>Việt Nam</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                    <TouchableOpacity activeOpacity={1} onPress={() => setLanguage('en')}
                                                      style={{marginLeft: 5}}>
                                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                            <Image source={ImageEngActive}
                                                   style={{height: 60, width: 60, resizeMode: 'cover'}}/>
                                            <Text style={{color: !isVNLang ? txtColor : 'grey'}}>England</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{flex: 1, justifyContent: 'flex-end', padding: 20}}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => {
                            }}
                            style={{
                                borderRadius: 5,
                                backgroundColor: 'red',
                                height: 40
                            }}>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{color: '#fff'}}><AppText i18nKey={'txt-sign-out'}/></Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            </DrawerContentScrollView>
        )
    }

    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props}/>}
            screenOptions={{
                drawerPosition: 'left',
                drawerType: isLargeScreen ? 'back' : 'front',
                drawerStyle: isLargeScreen ? {width: '50%'} : {width: '80%'},
                overlayColor: 'rgba(0, 0, 0, 0.7)',
                swipeEnabled: false,
                headerStyle: {
                    backgroundColor: props.theme_color,
                },
            }}
        >
            <Drawer.Screen name="StackNavigatorComponent" component={StackNavigatorComponent} options={{
                headerShown: false,
            }}/>
        </Drawer.Navigator>
    );
}


const mapStateToProps = (state, ownProps) => {
    return {
        is_dark_theme: state.todos.is_dark_theme,
        language: state.todos.language,
        theme_color: state.todos.theme_color
    }
}

const mapDispatchToProps = {isDarkThemeTodo, changeLanguage, changeColor}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DrawerNavigatorComponent)
