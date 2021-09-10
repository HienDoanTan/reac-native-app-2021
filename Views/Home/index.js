import React from 'react';
import {Text, View, ScrollView, Animated, TouchableOpacity, StyleSheet} from 'react-native'
import {useScrollToTop} from '@react-navigation/native';

export default function Home({navigation}) {
    const animation = new Animated.Value(0);
    const inputRange = [0, 1];
    const outputRange = [1, 0.8];
    const scale = animation.interpolate({inputRange, outputRange});

    const onPressIn = () => {
        Animated.spring(animation, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };
    const onPressOut = () => {
        Animated.spring(animation, {
            toValue: 0,
            useNativeDriver: true,
        }).start();
    };

    return (
        <ScrollView>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Text>Home!</Text>
                <Animated.View style={[styles.button, {transform: [{scale}]}]}>
                    <TouchableOpacity
                        style={styles.btn}
                        activeOpacity={1}
                        onPressIn={onPressIn}
                        onPressOut={onPressOut}>
                        <Text style={styles.btnText}>BUTTON</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
    button: {
        height: 70,
        width: 200,
        backgroundColor: 'red',
        marginBottom: 20,
        borderRadius: 10,
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 25,
    },
});
