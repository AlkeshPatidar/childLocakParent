import { FlatList, ImageBackground, StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import IMG from "../../assets/Images"
import color, { App_Primary_color } from "../../common/Colors/colors";
import Row from "../../components/wrapper/row";
import { Activated, ActivationFilter, ActivationListToggle, BackIconBtn, ContactIcon, DownChevron, EmailIcon, IDIcon, SearchIcon, UserIcon } from "../../assets/SVGs";
import CustomText from "../../components/TextComponent";
import { FONTS_FAMILY } from "../../assets/Fonts";
import SpaceBetweenRow from "../../components/wrapper/spacebetween";


const ActivationHistory = ({ navigation }) => {


    const renderActivationList = () => {
        return (
            <>
               
                <View style={styles.ActivationList}>
                    <FlatList
                        data={[1, 2, 3, 4, 5]}

                        renderItem={({ item }) => (
                            <ImageBackground source={IMG.ActivationListBg}
                                style={{
                                    height: 104,
                                    width: '100%',

                                }}
                                resizeMode="contain"
                            >
                                <CustomText style={{
                                    color: 'white',
                                    fontSize: 13,
                                    fontFamily: FONTS_FAMILY.Excon_Regular,
                                    marginTop: 30,
                                    marginHorizontal: 20
                                }}>22/12/2024  16:05:59</CustomText>
                                <SpaceBetweenRow>
                                    <CustomText style={{
                                        color: 'white',
                                        fontSize: 13,
                                        fontFamily: FONTS_FAMILY.Excon_Regular,
                                        marginTop: 10,
                                        marginHorizontal: 20
                                    }}>Bhushan Punjabi</CustomText>
                                    <TouchableOpacity style={{
                                        marginRight: 20
                                    }}>
                                        <Activated />
                                    </TouchableOpacity>

                                </SpaceBetweenRow>
                            </ImageBackground>
                        )}
                    />
                </View>
            </>

        )
    }

    return (
        <ImageBackground source={IMG.ParentListBg} style={styles.container}>
            <Row style={{
                padding: 16,
                gap: 10
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackIconBtn />
                </TouchableOpacity>
                <CustomText style={{
                    color: 'white',
                    fontSize: 20,
                    fontFamily: FONTS_FAMILY.Excon_Regular,
                    bottom: 10
                }}>Activation History</CustomText>
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
            <SpaceBetweenRow style={{
                marginHorizontal: 20,
                marginVertical: 16
            }}>
                <CustomText
                    style={{
                        color: 'white',
                        fontFamily: FONTS_FAMILY.Excon_Medium,

                    }}
                >Total Results: 4</CustomText>
                <View style={{
                    height: 31,
                    width: 142,
                    backgroundColor: '#A3A3A3',
                    borderRadius: 23,
                    paddingHorizontal: 10,
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <CustomText style={{
                        fontSize: 12,
                        color: 'white'
                    }}>Todays Activation</CustomText>
                    <DownChevron />
                </View>

            </SpaceBetweenRow>
            {renderActivationList()}

        </ImageBackground>
    )
}

export default ActivationHistory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: App_Primary_color
    },
    divider: {
        height: 81,
        width: 0.5,
        backgroundColor: 'white'
    },
    ActivationList: {
        backgroundColor: 'black',
        height: 538,
        marginHorizontal: 20,
        borderRadius: 15,
        padding: 10,
        marginTop: 0

    }
})