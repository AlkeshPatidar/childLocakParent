import { FlatList, ImageBackground, StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import IMG from "../../assets/Images"
import color, { App_Primary_color } from "../../common/Colors/colors";
import Row from "../../components/wrapper/row";
import { BackIconBtn, BackIconOnly, ContactIcon, EmailIcon, IDIcon, SearchIcon, UserIcon } from "../../assets/SVGs";
import CustomText from "../../components/TextComponent";
import { FONTS_FAMILY } from "../../assets/Fonts";
import SpaceBetweenRow from "../../components/wrapper/spacebetween";


const ParentList = ({navigation}) => {
    return (
        <ImageBackground source={IMG.ParentListBg} style={styles.container}>
          <Row style={{
                padding: 25,
                gap: 20,
                paddingBottom:40
            }}>
                {/* <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackIconBtn />
                </TouchableOpacity> */}
                 <TouchableOpacity onPress={() => navigation.goBack()}
                    style={{
                        borderWidth:0.4,
                        borderColor:"white",
                        alignItems:'center',
                        justifyContent:'center',
                        height:40,
                        width:40,
                        borderRadius:100,
                        backgroundColor:'#1D1D1F',

                    }}
                    >
                    {/* <DrawerIcon /> */}
                    <BackIconOnly/>

                </TouchableOpacity>
                <CustomText style={{
                    color: 'white',
                    fontFamily: FONTS_FAMILY.Excon_Medium,
                    fontSize: 20,
                    // bottom: 13
                }}>Parent List</CustomText>
            </Row>
            <View style={{ height: 0.3, backgroundColor: 'white', width: '100%', bottom: 20 }} />
            <Row style={{
                borderWidth: 0.4,
                borderColor: 'white',
                paddingHorizontal: 10,
                marginHorizontal: 25,
                borderRadius: 12,
                height: 46
            }}>
                <SearchIcon />
                <TextInput
                    style={{ flex: 1, color: 'white', fontFamily: FONTS_FAMILY.Excon_Regular, padding: 10 }}
                    placeholderTextColor={'white'}
                    placeholder="Search Parents"
                />
            </Row>
            <CustomText style={{
                fontSize:16,
                fontFamily:FONTS_FAMILY.Excon_Medium,
                color:'white',
                padding:12
            }}>Total Results: 3</CustomText>
            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={({ item }) => (
                    <ImageBackground source={IMG.PrentListCardBg}
                        style={{
                            height: 240,
                            width: '100%',
                            marginBottom: 20,
                            // padding: 20,
                        }}
                        resizeMode="contain"
                    >
                        <SpaceBetweenRow style={{
                            marginTop: 20,
                            marginHorizontal: 36
                        }}>
                            <CustomText style={{
                                color: 'white',
                                fontSize: 14,
                                fontFamily: FONTS_FAMILY.Excon_Regular
                            }}>22/12/2024  16:05:59</CustomText>
                            <View style={{
                                height: 20,
                                width: 89,
                                backgroundColor: '#585858',
                                borderRadius: 20,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <CustomText style={{
                                    fontSize: 11,
                                    color: 'white',
                                    fontFamily: FONTS_FAMILY.Excon_Regular
                                }}>Device : Unlock</CustomText>
                            </View>
                        </SpaceBetweenRow>
                        <View
                            style={{
                                marginHorizontal: 36,
                                marginTop: 10

                            }}
                        >
                            <CustomText style={{
                                color: 'white',
                                fontFamily: FONTS_FAMILY.Excon_Medium
                            }}>Bhushan Punjabi</CustomText>
                        </View>
                        <Row style={{
                            marginHorizontal: 36,
                            marginTop: 10,
                            gap: 10
                        }}>
                            <UserIcon />
                            <CustomText style={{
                                color: 'white',
                                fontFamily: FONTS_FAMILY.Excon_Medium,
                                fontSize: 14
                            }}>Duggu Punjabi</CustomText>
                        </Row>
                        {/* <View style={{ height: 0.2, backgroundColor: 'white', width: '85%', alignSelf: 'center', marginTop: 10 }} /> */}
                        <Row style={{
                            marginHorizontal: 36,
                            marginTop: 10,
                            gap: 10
                        }}>
                            <ContactIcon />
                            <CustomText style={{
                                color: 'white',
                                fontFamily: FONTS_FAMILY.Excon_Medium,
                                fontSize: 14

                            }}>89898989898</CustomText>
                        </Row>
                        {/* <View style={{ height: 0.2, backgroundColor: 'white', width: '85%', alignSelf: 'center', marginTop: 10 }} /> */}
                        <Row style={{
                            marginHorizontal: 36,
                            marginTop:10,
                            gap: 10
                        }}>
                            <EmailIcon />
                            <CustomText style={{
                                color: 'white',
                                fontFamily: FONTS_FAMILY.Excon_Medium,
                                fontSize: 14

                            }}>duggu@gmail.com</CustomText>
                        </Row>
                        {/* <View style={{ height: 0.2, backgroundColor: 'white', width: '85%', alignSelf: 'center', marginTop: 10 }} /> */}
                          <Row style={{
                            marginHorizontal: 36,
                            marginTop:10,
                            gap: 10
                        }}>
                            <IDIcon />
                            <CustomText style={{
                                color: 'white',
                                fontFamily: FONTS_FAMILY.Excon_Medium,
                                fontSize: 14

                            }}>95 Keys Assigned</CustomText>
                        </Row>
                    </ImageBackground>
                )}
            />

        </ImageBackground>
    )
}

export default ParentList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: App_Primary_color
    }
})