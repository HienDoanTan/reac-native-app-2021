import {useNavigation, useTheme} from "@react-navigation/native";
import {useRef, useState} from "react";
import {Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Ionicons, Feather, Entypo, FontAwesome, MaterialIcons} from "@expo/vector-icons";
import * as React from "react";
import AppText from "../../helpers/swicthLanguage";

export default function Products_header_stack_navigator(props) {
    const {colors} = useTheme();
    const [search, setSearch] = useState('');
    const [isTextFocus, setIsTextFocus] = useState(false);
    const textInput = useRef(null);
    const {width} = Dimensions.get("window");
    const navigation = useNavigation();
    const updateSearch = (value) => {
        setSearch(value);
    }

    const funcFocus = () => {
        navigation.navigate('MyModal');
        setTimeout(() => {
            setIsTextFocus(true);
        }, 200)
    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.backgroundBottomTab,
            width: width,
            flexDirection: 'row',
            paddingRight: 10
        }}>
            <View style={{flex: isTextFocus ? 1 : 2, justifyContent: 'center', alignItems: 'center', padding: 10}}>
                {isTextFocus ? (
                    <TouchableOpacity activeOpacity={1} onPress={() => {
                        setIsTextFocus(false);
                        setSearch('');
                        textInput.current.blur();
                        setTimeout(() =>{
                            navigation.goBack();
                        }, 500);
                    }}>
                        <Entypo
                            name='chevron-left'
                            color={colors.text}
                            size={26}
                        />
                    </TouchableOpacity>
                ) : (
                    <Text style={{color: colors.text, fontSize: 18, fontWeight: 'bold'}}>
                        <AppText i18nKey={'txt-product'}/>
                    </Text>
                )}
            </View>

            <View style={{flex: isTextFocus ? 9 : 8, flexDirection: 'row', height: 60}}>
                <View style={{flex: 8}}>
                    <TextInput
                        style={[styles.inputStyle, {
                            borderColor: colors.border,
                            color: colors.text,
                            backgroundColor: colors.backGroundBody
                        }]}
                        onTouchStart={funcFocus}
                        placeholder="Tìm kiếm"
                        placeholderTextColor={colors.text}
                        value={search}
                        onChangeText={updateSearch}
                        ref={textInput}
                        onSubmitEditing={() => {
                            textInput.current.focus();
                        }}
                        blurOnSubmit={false}
                    />
                    {search.length > 0 && (
                        <View style={{position: 'absolute', right: 25, bottom: 22}}>
                            <TouchableOpacity activeOpacity={1} onPress={() => {
                                setSearch('');
                            }}>
                                <MaterialIcons
                                    name='highlight-remove'
                                    color='#ccc'
                                    size={20}
                                />
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
                {!isTextFocus && (
                    <View style={{
                        flex: 2,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            backgroundColor: props.theme_color,
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 40,
                            height: 40
                        }}>
                            <Feather name="shopping-cart" size={20} color="#fff"/>
                        </View>
                    </View>
                )}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    passwordContainer: {
        flex: 1
    },
    inputStyle: {
        flex: 1,
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        paddingHorizontal: 20
    },
    container: {
        flex: 1,
    },
})
