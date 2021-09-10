import React from "react";
import {Switch, Text, View, TouchableOpacity} from "react-native";
import {useState} from "react";
import {useTheme} from "@react-navigation/native";
import {isDarkThemeTodo, changeLanguage} from "../../../../redux/actions";
import {connect} from "react-redux";
import AppText from "../../../../helpers/swicthLanguage";

function appearanceComponent(props) {
    const {colors} = useTheme();
    const [isEnabled, setIsEnabled] = useState(props.is_dark_theme);
    const {language} = props;
    const isVNLang = language === 'vi';

    const handleIsDarkTheme = (value) => {
        props.isDarkThemeTodo(value);
        setIsEnabled(value);
    }

    const setLanguage = language => {

        props.changeLanguage(language);
    }

    return (
        <View style={{backgroundColor: colors.background, flex: 1}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
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
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <AppText i18nKey={'this-is-home-page'}>This is home screen</AppText>
                <View style={{ flexDirection: 'row' }}>
                    <AppText i18nKey={'set-language'}>Chọn ngôn ngữ</AppText>
                    <TouchableOpacity onPress={() => setLanguage('vi')}
                                      style={{ marginLeft: 20 }}>
                        <Text style={{ color: isVNLang ? 'blue' : 'grey' }}>Việt Nam</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setLanguage('en')}
                                      style={{ marginLeft: 5 }}>
                        <Text style={{ color: !isVNLang ? 'blue' : 'grey' }}>England</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}


const mapStateToProps = (state, ownProps) => {
    return {
        is_dark_theme: state.todos.is_dark_theme,
        language: state.todos.language
    }
}

const mapDispatchToProps = {isDarkThemeTodo, changeLanguage}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(appearanceComponent)
