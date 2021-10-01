import {
    Dimensions,
    Image,
    SafeAreaView,
    SectionList,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {Col, Row} from 'react-native-responsive-grid-system';
import {SpeedDial} from 'react-native-elements';

import DATA from "../../../data/data_products";
import {useTheme, useIsFocused} from "@react-navigation/native";
import {changeColor, changeLanguage, isDarkThemeTodo} from "../../../redux/actions";
import {connect} from "react-redux";
import {Feather} from '@expo/vector-icons';
import DATAMenu from '../../../data/data_categories_root';
import RBSheet from "react-native-raw-bottom-sheet";
import CarouselComponent from "../../carousel/carousel";

function Products_component(props) {
    const {colors} = useTheme();
    const refRBSheet = useRef([]);
    const sectionListRef = useRef(null);
    const [open, setOpen] = React.useState(false);
    const [dataObject, set_dataObject] = useState([]);
    const [color_category_root_id, set_color_category_root_id] = useState(1);
    const {width, height} = Dimensions.get("window");
    const [visible_SpeedDial, set_visible_SpeedDial] = useState(true);

    function reload_data(category_root_id) {
        let data = DATA.filter((item, i) => {
            return item.category_root_id === category_root_id;
        });
        if (data.length > 0) {
            set_dataObject(data[0].data);
        }
        set_color_category_root_id(category_root_id);
        sectionListRef.current.scrollToLocation({itemIndex: 1, viewPosition: 0, viewOffset: 40})
    }

    useEffect(() => {
        if (DATA.length > 0) {
            set_dataObject(DATA[0].data);
            set_color_category_root_id(DATA[0].category_root_id);
        }

    }, []);

    return (
        <SafeAreaView style={[styles.container, {
            flexDirection: "column",
            flex: 1,
            backgroundColor: colors.customBackgroundInside,
        }]}>
            <View style={{flex: 1}}>
                <SectionList
                    ref={sectionListRef}
                    sections={dataObject}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item + index}
                    contentContainerStyle={{flex: dataObject.length <= 0 ? 1 : 0}}
                    ListEmptyComponent={
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}>
                            <Image
                                source={{uri: 'https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png'}}
                                style={{width: 200, height: 200}} resizeMode={"contain"}/>
                            <Text style={{color: colors.text}}>No data found</Text>
                        </View>
                    }
                    renderItem={({item, index}) => {
                        return (
                            <View>
                                <Row rowStyles={{marginRight: 0}}>
                                    {item.map((item, index) => {
                                        let product_name = '';
                                        let data_slide = [];
                                        if (item.length > 0) {
                                            item.map((value, index) => {
                                                product_name += value.name + ' / ';
                                            })
                                            product_name = product_name.slice(0, -2);
                                            data_slide = item;
                                        } else {
                                            product_name = item.name;
                                            data_slide.push(item);
                                        }
                                        return (
                                            <Col key={index} xs={6} sm={6} md={4} lg={3}
                                                 colStyles={{paddingRight: 0}}>
                                                <View key={index} style={{
                                                    flex: 1,
                                                    padding: 10,
                                                    //margin: 5,
                                                    //backgroundColor: colors.customBackgroundInside,
                                                    //borderRadius: 5
                                                }}>
                                                    <TouchableOpacity
                                                        activeOpacity={0.9}
                                                        onPress={() => {
                                                            props.navigation.navigate("ProductsDetails", {param: item.title})
                                                        }}>
                                                        <View style={{
                                                            flex: 1,
                                                            justifyContent: 'center',
                                                            alignItems: 'center'
                                                        }}>
                                                            <View style={{
                                                                flex: 1
                                                            }}>
                                                                <Image
                                                                    source={{uri: item.length > 0 ? item[0].url : item.url}}
                                                                    style={{width: 100, height: 100}}
                                                                    resizeMode={'cover'}
                                                                />
                                                            </View>

                                                            <View style={{
                                                                flex: 1,
                                                                justifyContent: 'space-between',
                                                                alignItems: 'center',
                                                            }}>
                                                                <Text numberOfLines={2} style={[styles.title, {
                                                                    color: colors.text,
                                                                    fontWeight: 'bold',
                                                                    textAlign: 'center'
                                                                }]}>{product_name}</Text>
                                                                <Text
                                                                    style={[styles.title, {
                                                                        paddingVertical: 5,
                                                                        color: colors.primary
                                                                    }]}>
                                                                    Mã hàng hóa: 104270
                                                                </Text>
                                                                <View
                                                                    style={{
                                                                        flexDirection: 'row',
                                                                        paddingVertical: 5
                                                                    }}>
                                                                    <View style={{flex: 1}}>
                                                                        <Text
                                                                            style={[styles.title, {color: colors.text}]}>
                                                                            Giá bán lẻ khuyến nghị:
                                                                        </Text>
                                                                    </View>
                                                                    <View style={{flex: 1}}>
                                                                        <Text
                                                                            style={[styles.title, {
                                                                                color: colors.text,
                                                                                fontWeight: 'bold'
                                                                            }]}>
                                                                            460,000₫
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </TouchableOpacity>

                                                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                                                        <TouchableOpacity
                                                            activeOpacity={0.9}
                                                            onPress={() => {
                                                                refRBSheet.current[item.length > 0 ? item[0].id : item.id].open()
                                                            }}
                                                            style={{
                                                                borderRadius: 20,
                                                                backgroundColor: props.theme_color,
                                                                height: 40
                                                            }}>
                                                            <View style={{
                                                                flex: 1,
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                flexDirection: 'row'
                                                            }}>
                                                                <Feather
                                                                    name={item.length > 0 ? "more-horizontal" : "shopping-cart"}
                                                                    size={20}
                                                                    color="#fff"
                                                                />
                                                                <Text style={{color: '#fff', paddingHorizontal: 10}}>
                                                                    {item.length > 0 ? 'Tùy chọn' : 'Thêm Vào Giỏ'}
                                                                </Text>
                                                            </View>
                                                        </TouchableOpacity>
                                                        <RBSheet
                                                            ref={ref => {
                                                                refRBSheet.current[item.length > 0 ? item[0].id : item.id] = ref;
                                                            }}
                                                            height={height / 2}
                                                            animationType={'fade'}
                                                            customStyles={{
                                                                container: {
                                                                    borderTopRightRadius: 10,
                                                                    borderTopLeftRadius: 10,
                                                                    backgroundColor: colors.backgroundBottomTab
                                                                }
                                                            }}
                                                        >
                                                            <View style={{
                                                                flexDirection: "column",
                                                                flex: 1
                                                            }}>
                                                                <View style={{
                                                                    flex: 8,
                                                                    justifyContent: 'center',
                                                                    alignItems: 'stretch'
                                                                }}>
                                                                    <CarouselComponent layoutCardOffset={9}
                                                                                       layout={'default'}
                                                                                       width_screen={width}
                                                                                       data_slide={data_slide}

                                                                    />
                                                                </View>
                                                                <View style={{
                                                                    flex: 2,
                                                                    flexDirection: 'row'
                                                                }}>
                                                                    <View style={{
                                                                        flex: 1,
                                                                        justifyContent: 'center',
                                                                        alignItems: 'center',
                                                                        padding: 10
                                                                    }}>
                                                                        <Text>Tổng tiền: </Text>
                                                                        <Text
                                                                            style={{fontSize: 20, fontWeight: 'bold'}}>1.000.200.000
                                                                            VND</Text>
                                                                    </View>
                                                                    <View style={{
                                                                        flex: 1,
                                                                        justifyContent: 'center',
                                                                        alignItems: 'stretch',
                                                                        padding: 10
                                                                    }}>
                                                                        <TouchableOpacity
                                                                            activeOpacity={1}
                                                                            onPress={() => {
                                                                                refRBSheet.current[item.length > 0 ? item[0].id : item.id].close()
                                                                            }}
                                                                            style={{
                                                                                borderRadius: 20,
                                                                                backgroundColor: props.theme_color,
                                                                                height: 40
                                                                            }}>
                                                                            <View style={{
                                                                                flex: 1,
                                                                                justifyContent: 'center',
                                                                                alignItems: 'center',
                                                                                flexDirection: 'row'
                                                                            }}>
                                                                                <Feather
                                                                                    name={"shopping-cart"}
                                                                                    size={20}
                                                                                    color="#fff"
                                                                                />
                                                                                <Text style={{
                                                                                    color: '#fff',
                                                                                    paddingHorizontal: 10
                                                                                }}>
                                                                                    Thêm Vào Giỏ
                                                                                </Text>
                                                                            </View>
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </RBSheet>
                                                    </View>
                                                </View>
                                            </Col>

                                        )

                                    })}
                                </Row>
                            </View>

                        )
                    }}
                    renderSectionHeader={({section: {title}}) => {
                        return (
                            (
                                <View style={{
                                    flex: 1,
                                    marginHorizontal: 20,
                                    marginTop: 10,
                                    borderBottomWidth: 1,
                                    borderBottomColor: colors.border
                                }}>
                                    <Text style={[styles.header, {color: colors.text}]}>{title}</Text>
                                </View>
                            )
                        )
                    }}
                />
            </View>
            <SpeedDial
                isOpen={open}
                icon={{name: 'menu', color: '#fff'}}
                openIcon={{name: 'close', color: '#fff'}}
                onOpen={() => setOpen(!open)}
                onClose={() => setOpen(!open)}
                buttonStyle={{backgroundColor: props.theme_color, borderRadius: 30}}
                TouchableComponent={TouchableWithoutFeedback}
                loading={DATAMenu.length <= 0}
                visible={visible_SpeedDial}
            >
                {DATAMenu.map((item, index) => {
                    return (
                        <SpeedDial.Action
                            key={index}
                            icon={<Image source={{uri: item.image}} resizeMode={'contain'}
                                         style={{width: 20, height: 20}}/>}
                            title={item.title}
                            onPress={() => {
                                if (color_category_root_id !== item.category_root_id) {
                                    setOpen(!open);
                                    reload_data(item.category_root_id);
                                }
                            }}
                            color={'#fff'}
                            TouchableComponent={TouchableWithoutFeedback}
                            titleStyle={{
                                borderRadius: 20,
                                marginVertical: 0,
                                backgroundColor: color_category_root_id === item.category_root_id ? props.theme_color : colors.backgroundBottomTab,
                                color: color_category_root_id === item.category_root_id ? '#fff' : props.theme_color,
                                borderWidth: color_category_root_id === item.category_root_id ? 0 : 1,
                                borderColor: color_category_root_id === item.category_root_id ? null : props.theme_color,
                                textTransform: 'capitalize',
                                fontWeight: 'bold'
                            }}
                        />
                    )
                })}
            </SpeedDial>
        </SafeAreaView>
    )
}


const mapStateToProps = (state, ownProps) => {
    return {
        is_dark_theme: state.todos.is_dark_theme,
        language: state.todos.language,
        theme_color: state.todos.theme_color,
        is_visible_speed_dial: state.todos.is_visible_speed_dial
    }
}

const mapDispatchToProps = {isDarkThemeTodo, changeLanguage, changeColor}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products_component)

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
        fontSize: 18,
        paddingVertical: 10,
        fontWeight: 'bold'
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
