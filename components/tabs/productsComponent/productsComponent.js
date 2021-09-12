import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    Image,
    TextInput,
    FlatList,
    TouchableHighlight,
    Button,
    StatusBar,
    TouchableOpacity, useWindowDimensions
} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {
    ListItem,
    SearchBar,
    Avatar,
    Button as ButtonElement,
    SpeedDial,
    Image as ImageElement
} from 'react-native-elements';
import {Row, Col} from 'react-native-responsive-grid-system';

import DATA from "../../../data/data_products";
import {useTheme} from "@react-navigation/native";

const DATAMenu = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Dinh Dưỡng Và Sức Khỏe',
        image: 'https://media.amway.com.vn/sys-master/images/h91/h18/8878488354846/c3lzLW1hc3Rlci9pbWFnZXMvaDBjL2g2NC84ODk0MzE5NTkxNDU0__H__93652042-d028-46ff-bfb9-539649fc7294.bin'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Chăm Sóc Sắc Đẹp',
        image: 'https://media.amway.com.vn/sys-master/images/ha2/h1b/8878488420382/c3lzLW1hc3Rlci9pbWFnZXMvaDBhL2g2Ny84ODk0MzE5NjU2OTkw__H__0f4d0d30-1c32-4d2c-9f2f-6a64f03b3999.bin'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Chăm Sóc Cá Nhân',
        image: 'https://media.amway.com.vn/sys-master/images/h50/h1c/8878488485918/c3lzLW1hc3Rlci9pbWFnZXMvaDFiL2g2YS84ODk0MzE5NzIyNTI2__H__acda8fa9-e732-4f1c-9a53-a35f91293a5e.bin'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Chăm Sóc Gia Dụng',
        image: 'https://media.amway.com.vn/sys-master/images/h61/h1f/8878488551454/c3lzLW1hc3Rlci9pbWFnZXMvaGJjL2g0Zi84ODk1Mzk4MDg0NjM4__H__c7f148c8-c371-4449-98af-442703cb7856.bin'
    },
];

export default function ProductsComponent(props) {
    const sectionListRef = useRef(null);
    const [open, setOpen] = React.useState(false);
    const {colors} = useTheme();
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 768;
    const [number, onChangeNumber] = React.useState(null);
    const [search, updateSearch] = useState('');


    const renderItemMenu = ({item}) => {
        return (
            <View key={item.title} style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                <View style={{
                    borderWidth: 1,
                    borderColor: '#ccc',
                    padding: 10,
                    margin: 5,
                    borderRadius: 20,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.customBackgroundInside
                }}>

                    <Image
                        resizeMode={'contain'}
                        style={{width: 20, height: 20}}
                        source={{uri: item.image}}/>
                    <View style={{paddingHorizontal: 5}}>
                        <Text style={{color: colors.text}}>{item.title}</Text>
                    </View>
                </View>
            </View>
        )
    }
    const ListHeaderComponent = () => {

    }

    const ListMenuComponent = () => {
        return (
            <View style={{flex: 1, minHeight: 50}}>
                <FlatList
                    data={DATAMenu}
                    renderItem={renderItemMenu}
                    keyExtractor={(value, index) => index.toString()}
                    horizontal={true}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: colors.background}]}>
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    {ListMenuComponent()}
                </View>
                <View style={{flex: 7}}>
                    <SectionList
                        ref={sectionListRef}
                        sections={DATA}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({item, index}) => {
                            return (
                                <View>
                                    <Row rowStyles={{marginRight: 0}}>
                                        {item.map((item, index) => {
                                            return (
                                                <Col key={index} xs={6} sm={6} md={4} lg={3}
                                                     colStyles={{paddingRight: 0}}>
                                                    <View key={index} style={{
                                                        flex: 1,
                                                        padding: 10,
                                                        margin: 5,
                                                        backgroundColor: colors.customBackgroundInside,
                                                        borderRadius: 20
                                                    }}>
                                                        <TouchableOpacity
                                                            activeOpacity={0.9}
                                                            onPress={() => {
                                                                props.navigation.navigate("ProductsDetailsComponent", {param: item.title})
                                                            }}>
                                                            <View style={{
                                                                flex: 1
                                                            }}>
                                                                <View style={{
                                                                    flex: 1,
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center'
                                                                }}>
                                                                    <Image
                                                                        source={{uri: item.url}}
                                                                        style={{width: 100, height: 100}}
                                                                        resizeMode={'cover'}
                                                                    />
                                                                </View>

                                                                <View style={{
                                                                    flex: 2,
                                                                    justifyContent: 'space-between',
                                                                    alignItems: 'flex-start'
                                                                }}>
                                                                    <Text numberOfLines={2} style={[styles.title, {
                                                                        color: colors.text,
                                                                        fontWeight: 'bold'
                                                                    }]}>{item.name}</Text>
                                                                    <Text
                                                                        style={[styles.title, {
                                                                            paddingVertical: 5,
                                                                            color: colors.primary
                                                                        }]}>Mã
                                                                        hàng hóa:
                                                                        104270</Text>
                                                                    <View
                                                                        style={{
                                                                            flexDirection: 'row',
                                                                            paddingVertical: 5
                                                                        }}>
                                                                        <View style={{flex: 1}}>
                                                                            <Text
                                                                                style={[styles.title, {color: colors.text}]}>
                                                                                Giá bán lẻ khuyến nghị: </Text>
                                                                        </View>
                                                                        <View style={{flex: 1}}>
                                                                            <Text
                                                                                style={[styles.title, {
                                                                                    color: colors.text,
                                                                                    fontWeight: 'bold'
                                                                                }]}>460,000₫</Text>
                                                                        </View>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </TouchableOpacity>

                                                        <View style={{flex: 1, justifyContent: 'flex-end'}}>
                                                            <TouchableOpacity
                                                                activeOpacity={0.9}
                                                                onPress={() => {
                                                                }}
                                                                style={{
                                                                    borderRadius: 20,
                                                                    backgroundColor: '#002f5f',
                                                                    height: 36
                                                                }}>
                                                                <View style={{
                                                                    flex: 1,
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center'
                                                                }}>
                                                                    <Text style={{color: '#fff'}}>Thêm Vào Giỏ
                                                                        Hàng</Text>
                                                                </View>
                                                            </TouchableOpacity>

                                                        </View>
                                                    </View>
                                                </Col>

                                            )
                                        })}
                                    </Row>
                                </View>

                            )
                        }}
                        renderSectionHeader={({section: {title}}) => (
                            <Text style={[styles.header, {color: colors.text}]}>{title}</Text>
                        )}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 20,
        marginVertical: 8,
        alignItems: 'center'
    },
    header: {
        fontSize: 16,
        padding: 10
    },
    title: {
        fontSize: 13
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
