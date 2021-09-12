import React, {useRef, useState} from "react";
import {StyleSheet, Text, View, Dimensions} from "react-native";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {ActivityIndicator} from 'react-native';
import {Image as ImageElement} from 'react-native-elements';
import {useTheme} from "@react-navigation/native";

export default function ProductsDetailsComponent(props) {
    // const [activeIndex, set_activeIndex] = useState(0);
    // const width = Dimensions.get("screen").width;
    // const carousel = useRef(null);
    // const {colors} = useTheme();
    // const carouselItems = [
    //     {
    //         title: "Item 1",
    //         text: "Text 1",
    //         image: 'https://media.amway.com.vn/sys-master/images/h06/hd0/9028211671070/nu_104270_2_Bio_C_Product_588Wx588H'
    //     },
    //     {
    //         title: "Item 2",
    //         text: "Text 2",
    //         image: 'https://media.amway.com.vn/sys-master/images/h06/hd0/9028211671070/nu_104270_2_Bio_C_Product_588Wx588H'
    //     },
    //     {
    //         title: "Item 3",
    //         text: "Text 3",
    //         image: 'https://media.amway.com.vn/sys-master/images/h06/hd0/9028211671070/nu_104270_2_Bio_C_Product_588Wx588H'
    //     },
    //     {
    //         title: "Item 4",
    //         text: "Text 4",
    //         image: 'https://media.amway.com.vn/sys-master/images/h06/hd0/9028211671070/nu_104270_2_Bio_C_Product_588Wx588H'
    //     },
    //     {
    //         title: "Item 5",
    //         text: "Text 5",
    //         image: 'https://media.amway.com.vn/sys-master/images/h06/hd0/9028211671070/nu_104270_2_Bio_C_Product_588Wx588H'
    //     }
    // ]
    // const _renderItem = ({item, index}) => {
    //     return (
    //         <View style={{
    //             borderRadius: 5,
    //             height: '100%',
    //             padding: 10,
    //             justifyContent: 'center',
    //             alignItems: 'center'
    //         }}>
    //             <ImageElement
    //                 source={{uri: item.image}}
    //                 style={{width: width, height: '100%'}}
    //                 resizeMode={'contain'}
    //                 PlaceholderContent={<ActivityIndicator/>}
    //             />
    //         </View>
    //
    //     )
    // }
    //
    // function pagination() {
    //     return (
    //         <Pagination
    //             dotsLength={carouselItems.length}
    //             activeDotIndex={activeIndex}
    //             containerStyle={{
    //                 //position: 'absolute',
    //                 top: -15
    //                 //alignItems: 'center'
    //             }}
    //             dotStyle={{
    //                 width: 10,
    //                 height: 10,
    //                 borderRadius: 5,
    //                 marginHorizontal: 2,
    //                 backgroundColor: colors.text
    //             }}
    //             inactiveDotStyle={{
    //                 // Define styles for inactive dots here
    //             }}
    //             inactiveDotOpacity={0.4}
    //             inactiveDotScale={0.6}
    //         />
    //     );
    // }
    //
    // return (
    //     <View style={[styles.container, {
    //         // Try setting `flexDirection` to `"row"`.
    //         flexDirection: "column"
    //     }]}>
    //         <View style={{flex: 1}}>
    //             <View style={{flex: 1, flexDirection: 'column'}}>
    //                 <Carousel
    //                     layout={"stack"}
    //                     layoutCardOffset={18}
    //                     ref={carousel}
    //                     data={carouselItems}
    //                     sliderWidth={width}
    //                     itemWidth={width - 40}
    //                     renderItem={_renderItem}
    //                     onSnapToItem={index => set_activeIndex(index)}/>
    //                 {pagination()}
    //             </View>
    //         </View>
    //         <View style={{flex: 1, backgroundColor: "darkorange"}}/>
    //     </View>
    // );
    return(
        <View>
            <Text>Text</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pagerView: {
        flex: 1
    }
});

