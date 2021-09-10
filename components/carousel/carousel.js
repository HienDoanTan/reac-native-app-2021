import * as React from 'react';
import {
    Text,
    View,
    SafeAreaView, useWindowDimensions, ActivityIndicator
} from 'react-native';
import { Image as ImageElement } from 'react-native-elements';


import Carousel from 'react-native-snap-carousel';
import {useRef, useState} from "react";

export default function CarouselComponent() {
    const [activeIndex, set_activeIndex] = useState(0);
    const carousel = useRef(null);
    const dimensions = useWindowDimensions();

    const carouselItems = useState([
        {
            title: "Item 1",
            text: "Text 1",
            image: '1.jpg'
        },
        {
            title: "Item 2",
            text: "Text 2",
            image: '1.jpg'
        },
        {
            title: "Item 3",
            text: "Text 3",
            image: '1.jpg'
        },
        {
            title: "Item 4",
            text: "Text 4",
            image: '1.jpg'
        },
        {
            title: "Item 5",
            text: "Text 5",
            image: '1.jpg'
        },
    ]);

    function _renderItem({item, index}) {
        return (
            <View style={{
                borderRadius: 5,
                minHeight: 250,
                flex: 1
            }}>
                <ImageElement
                    source={{
                        uri: 'https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/240604887_4450021008352503_3422846146902543632_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=Vdr2pRnscIYAX_TSppw&_nc_ht=scontent.fvca1-1.fna&oh=3bb18d537e3f7d191569d070a32f5232&oe=613AFAA5',
                    }}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode={'contain'}
                />
                <Text style={{fontSize: 30}}>{item.title}</Text>
                <Text>{item.text}</Text>
            </View>

        )
    }

    return (
        <SafeAreaView style={{flex: 1, padding: 5}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',}}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center',}}>
                        <Carousel
                            layout={"default"}
                            ref={carousel}
                            data={carouselItems}
                            sliderWidth={dimensions.width}
                            itemWidth={dimensions.width}
                            renderItem={_renderItem}
                            onSnapToItem={index => {
                                set_activeIndex(index)
                            }}/>
                    </View>
            </View>
        </SafeAreaView>
    )
}

