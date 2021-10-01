import {BarChart, LineChart, PieChart} from "react-native-gifted-charts";
import React, {useEffect, useState} from "react";
import {Button, View} from 'react-native';
import {useTheme} from "@react-navigation/native";

export default function GiftedChartsComponent() {
    const {colors} = useTheme();
    const barData = [
        {value: 250, label: 'Jan', labelTextStyle: {color: colors.text}},
        {value: 500, label: 'Feb', frontColor: '#177AD5', labelTextStyle: {color: colors.text}},
        {value: 745, label: 'Mar', frontColor: '#177AD5', labelTextStyle: {color: colors.text}},
        {value: 320, label: 'Apr', labelTextStyle: {color: colors.text}},
        {value: 600, label: 'May', frontColor: '#177AD5', labelTextStyle: {color: colors.text}},
        {value: 256, label: 'Jun', labelTextStyle: {color: colors.text}},
    ];

    return (
        <View style={{flex: 1, marginBottom: 30}}>
            <BarChart
                barWidth={22}
                noOfSections={3}
                barBorderRadius={4}
                frontColor="lightgray"
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
                yAxisTextStyle={{
                    color: colors.text
                }}
                rulesThickness={0}
                rulesColor={colors.background}
            />
        </View>
    );
};
