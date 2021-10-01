import * as React from 'react';
import {
    Text,
    View,
    SafeAreaView, Image, TouchableOpacity
} from 'react-native';
import NumberFormat from 'react-number-format';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useEffect, useRef, useState} from "react";
import {useTheme} from "@react-navigation/native";
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function CarouselComponent(props) {
    const [activeIndex, set_activeIndex] = useState(0);
    const carousel = useRef();
    const {colors} = useTheme();
    const {data_slide, layout, layoutCardOffset, width_screen} = props;
    const [data_carousel, set_data_carousel] = useState(data_slide ?? []);
    const slider_width = width_screen ?? 300;

    useEffect(() => {
        if (props.data_slide) {
            let data = props.data_slide;
            data = data.map((option) => {
                option.quantity = 0;
                option.sum_money = 0;
                return option;
            });
            set_data_carousel(data);
        }
    }, [props.data_slide]);

    const _renderItem = ({item, index}) => {
        return (
            <View style={{
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.backgroundBottomTab,
                flex: 1,
                flexDirection: 'column'
            }}>
                <Image source={{uri: item.url}} style={{width: 150, height: 150}} resizeMode={"contain"}/>
                <Text style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    paddingVertical: 10,
                    textAlign: 'center',
                    color: colors.text
                }}>
                    {item.name}
                </Text>
                <View>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: 'normal',
                        textAlign: 'center',
                        color: colors.text
                    }}>
                        Giá:
                        <NumberFormat
                            value={item.price}
                            displayType={'text'}
                            thousandSeparator={true}
                            suffix={' VNĐ'}
                            renderText={(value, props) => <Text style={{fontWeight: '500'}} {...props}> {value}</Text>}
                        />
                    </Text>
                </View>
                <View style={{flexDirection: 'row', padding: 10}}>
                    <TouchableOpacity onPress={() => {
                        if (data_carousel[index].quantity > 0) {
                            data_carousel[index].quantity = data_carousel[index].quantity - 1;
                            data_carousel[index].sum_money = data_carousel[index].quantity * data_carousel[index].price;
                            set_data_carousel([...data_carousel])
                        }
                    }}>
                        <MaterialCommunityIcons name="minus-circle-outline" size={30} color="red"/>
                    </TouchableOpacity>
                    <Text style={{fontSize: 30, fontWeight: 'bold', paddingHorizontal: 10}}>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => {
                        data_carousel[index].quantity = data_carousel[index].quantity + 1;
                        data_carousel[index].sum_money = data_carousel[index].quantity * data_carousel[index].price;
                        set_data_carousel([...data_carousel])
                    }}>
                        <MaterialCommunityIcons name="plus-circle" size={30} color="#3498db"/>
                    </TouchableOpacity>

                </View>
                <View style={{flexDirection: 'row', flex: 1}}>
                    <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Text style={{color: colors.text}}>Thành tiền: </Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
                        <NumberFormat
                            value={item.sum_money}
                            displayType={'text'}
                            thousandSeparator={true}
                            suffix={' VNĐ'}
                            renderText={(value, props) => <Text
                                style={{
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                    color: colors.text
                                }} {...props}> {value}</Text>}
                        />
                    </View>
                </View>
            </View>

        )
    }
    return (
        <SafeAreaView style={{flex: 1, paddingTop: 30}}>
            <View style={{flex: 8, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Carousel
                    layoutCardOffset={layoutCardOffset}
                    layout={layout}
                    inactiveSlideOpacity={0.3}
                    ref={carousel}
                    data={data_carousel}
                    extraData={data_carousel}
                    hasParallaxImages={true}
                    sliderWidth={slider_width}
                    itemWidth={slider_width / 2}
                    renderItem={_renderItem}
                    onSnapToItem={index => set_activeIndex(index)}/>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Pagination
                    dotsLength={data_carousel.length}
                    activeDotIndex={activeIndex}
                    containerStyle={{backgroundColor: 'transparent'}}
                    dotContainerStyle={{height: 2}}
                    dotStyle={{
                        width: 40,
                        height: 5,
                        borderRadius: 5,
                        marginHorizontal: 0
                    }}
                    inactiveDotStyle={{
                        width: 20,
                        height: 5,
                        borderRadius: 5,
                        marginHorizontal: 0
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View>
        </SafeAreaView>
    );
}

