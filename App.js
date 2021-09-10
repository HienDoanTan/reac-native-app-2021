import React, {useState} from 'react';
import store from './redux/store';
import {Provider} from 'react-redux';
import NavigationContainerComponent from "./components/navigationContainer/navigationContainer";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainerComponent/>
        </Provider>
    );
}

