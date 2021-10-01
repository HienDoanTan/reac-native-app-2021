import React from "react";
import {connect} from 'react-redux';
import {isDarkThemeTodo} from '../../redux/actions';
import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import DrawerNavigatorComponent from "../drawerNavigator/drawerNavigator";

const CustomDefaultTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        customBackgroundInside: '#FFFFFF',
        background: '#ecf0f1',
        backgroundBottomTab: '#ffffff',
        backGroundBody: '#F9F9F9',
        customBackgroundHeader: "#2980b9"
    },
};

const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        customBackgroundInside: '#282A36',
        background: '#0d1117',
        backgroundBottomTab: '#2E343D',
        backGroundBody: '#282B33',
        customBackgroundHeader: "#2E343D"
    },
};

const NavigationContainerComponent = (props) => {

    return (
        <NavigationContainer theme={props.is_dark_theme ? CustomDarkTheme : CustomDefaultTheme}>
            <DrawerNavigatorComponent/>
        </NavigationContainer>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        is_dark_theme: state.todos.is_dark_theme,
    }
}

const mapDispatchToProps = {isDarkThemeTodo}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainerComponent)
