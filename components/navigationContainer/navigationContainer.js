import React from "react";
import {connect} from 'react-redux';
import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";

import {isDarkThemeTodo} from '../../redux/actions';
import StackNavigatorComponent from "../stackNavigator/stackNavigator";

const CustomDefaultTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        customBackgroundInside: '#FFFFFF',
        background: '#ecf0f1'
    },
};

const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        customBackgroundInside: '#323546',
        background: '#191A1F'
    },
};

const NavigationContainerComponent = (props) => {

    return (
        <NavigationContainer theme={props.is_dark_theme ? CustomDarkTheme : CustomDefaultTheme}>
            <StackNavigatorComponent/>
        </NavigationContainer>
    )
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
)(NavigationContainerComponent)
