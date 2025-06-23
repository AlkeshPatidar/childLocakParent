import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import { App_Primary_color } from "../../common/Colors/colors";
import Row from "../../components/wrapper/row";
import { Activated, ActivationFilter, ActivationListToggle, AddParent, DashboardOverView, DoFour, DoOne, DOThree, DoTwo, DownChevron, DrawerIcon, DrawerLine, ListParent, ListParentStramLine, ReportsToggle, ReportsUi, UserAddplus } from "../../assets/SVGs";
import CustomText from "../../components/TextComponent";
import { FONTS_FAMILY } from "../../assets/Fonts";
import IMG from "../../assets/Images";
import SpaceBetweenRow from "../../components/wrapper/spacebetween";
import CarouselComponent from './Crousel'
import { useState } from "react";
import CustomDrawer from "../../components/Modals/CustomDrawer/CustomDrawerModel";
import LinearGradient from "react-native-linear-gradient";


const Dashboard = ({ navigation }) => {

    const [isFIlterOpen, setIsFIlterOpen] = useState(false)
      const [isModelOpen, setIsModelOpen] = useState(false)
    const [isDrawerOpen, setIsDraweOpen] = useState(false)
    const renderOverView = () => {
        return (
            <>
                <DashboardOverView style={{ alignSelf: 'center' , zIndex:1000}} />
                <ImageBackground source={IMG.DOBg}
                    style={styles.DOBg}
                    resizeMode="contain"
                >
                    <SpaceBetweenRow style={{
                        marginTop: 30,
                        marginHorizontal: 15
                    }}>
                        <TouchableOpacity style={{
                            alignItems: 'center',
                            gap: 10
                        }}
                            onPress={() => navigation.navigate('ActivationHistory')}
                        >
                            <DoOne />
                            <CustomText style={styles.DoText}> Todays{'\n'} Activations</CustomText>
                            <CustomText style={{ ...styles.DoText, fontSize: 20 }}>55</CustomText>
                        </TouchableOpacity>
                        <View style={styles.divider} />

                        <View style={{
                            alignItems: 'center',
                            gap: 10
                        }}>
                            <DoTwo />
                            <CustomText style={styles.DoText}> Total{'\n'} Activations</CustomText>
                            <CustomText style={{ ...styles.DoText, fontSize: 20 }}>55</CustomText>
                        </View>
                        <View style={styles.divider} />

                        <View style={{
                            alignItems: 'center',
                            gap: 10
                        }}>
                            <DOThree />
                            <CustomText style={styles.DoText}> Pending{'\n'} Activations</CustomText>
                            <CustomText style={{ ...styles.DoText, fontSize: 20 }}>55</CustomText>
                        </View>
                        <View style={styles.divider} />
                        <View style={{
                            alignItems: 'center',
                            gap: 10
                        }}>
                            <DoFour />
                            <CustomText style={styles.DoText}> Active{'\n'} Devices</CustomText>
                            <CustomText style={{ ...styles.DoText, fontSize: 20 }}>55</CustomText>
                        </View>
                    </SpaceBetweenRow>
                </ImageBackground>
            </>
        )
    }



    const renderCrousel = () => {
        return (
            <>
                <CarouselComponent
                    data={[IMG.CarouselCard, IMG.CarouselCard, IMG.CarouselCard]}
                />
            </>
        )
    }

    const renderButtons = () => {
        return (
            <Row style={{
                alignSelf: 'center',
                gap: 16,
                marginTop: 20
            }}>
                <TouchableOpacity style={{
                }}
                    onPress={() => navigation.navigate('AddParent')}
                >
                      <ImageBackground source={IMG.DeviceLockBg}
                        style={{
                            height: 110,
                            width: 110,
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 8
                        }}
                    >
                    <UserAddplus  />
                     <CustomText style={{
                            color: 'black',
                            fontSize: 11,
                            fontFamily: FONTS_FAMILY.Excon_Medium
                        }}>Add Parent</CustomText>

                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    // borderWidth: 0.3,
                    borderColor: 'white',
                    borderRadius: 15
                }}
                    onPress={() => navigation.navigate('ParentList')}

                >
                    {/* <ListParent /> */}
                     <ImageBackground source={IMG.grayBlackBg}
                        style={{
                            height: 110,
                            width: 110,
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 8
                        }}
                    >
                    <ListParentStramLine  />
                     <CustomText style={{
                            color: 'white',
                            fontSize: 11,
                            fontFamily: FONTS_FAMILY.Excon_Medium
                        }}>List Of Parents</CustomText>

                    </ImageBackground>
                </TouchableOpacity>
            </Row>
        )
    }

    const renderActivationList = () => {
        return (
            <View style={{
                marginTop:20,
            }}>
                {/* <ActivationListToggle style={{
                    // position:'absolute',
                    // bottom:0
                    top: 30,
                    alignSelf: 'center'
                }} /> */}
                 <View
                    style={{
                        // position: 'absolute',
                        // bottom: 0,
                        top: 10,
                        // left: 30,
                        backgroundColor: '#E9866E',
                        height: 44,
                        width: 140,
                        alignItems:'center',
                        justifyContent:'center',
                        borderTopLeftRadius:20,
                        borderTopRightRadius:20,
                        alignSelf: 'center',
                        // bottom:-40
                    }}
                >
                    <CustomText style={{
                        color:'white',
                        fontFamily:FONTS_FAMILY.Excon_Medium
                    }}>Activation List</CustomText>
                </View>

                <View style={styles.ActivationList}>
                    <SpaceBetweenRow>
                        <View>
                            {/* <TouchableOpacity onPress={() => setIsFIlterOpen(isFIlterOpen => !isFIlterOpen)}>
                                <ActivationFilter />
                            </TouchableOpacity> */}
                            <TouchableOpacity onPress={() => setIsFIlterOpen(isFIlterOpen => !isFIlterOpen)}>
                                {/* <SpaceBetweenRow style={{
                                borderWidth: 1,
                                borderColor: '#A3A3A3',
                                backgroundColor: '#585858',
                                height: 31,
                                width: 170,
                                borderRadius: 100,
                                // justifyContent: 'center',
                                paddingHorizontal: 10

                            }}>
                                <CustomText style={{
                                    color: '#A3A3A3',
                                    fontSize: 14,
                                    fontFamily: FONTS_FAMILY.Excon_Regular
                                }}>Todays Activations</CustomText>
                                <DownChevron />
                            </SpaceBetweenRow> */}
                                 <LinearGradient
                                colors={['#585858', '#353536']} // From lighter gray to darker gray
                                start={{ x: 1, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={{
                                    // borderWidth: 1,
                                    borderColor: '#A3A3A3',
                                    height: 31,
                                    width: 170,
                                    borderRadius: 100,
                                    paddingHorizontal: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <CustomText style={{
                                    color: '#A3A3A3',
                                    fontSize: 14,
                                    fontFamily: FONTS_FAMILY.Excon_Regular
                                }}>Todays Activations</CustomText>
                                <DownChevron />
                            </LinearGradient>
                            </TouchableOpacity>
                            {isFIlterOpen && <View style={{
                                height: 178,
                                width: 202,
                                borderWidth: 0.4,
                                borderColor: 'white',
                                position: 'absolute',
                                zIndex: 1000,
                                backgroundColor: 'black',
                                top: 40,
                                borderRadius: 14,
                                // alignItems:'center',
                                padding: 20,
                                gap: 15
                            }}>
                                <TouchableOpacity onPress={()=>setIsFIlterOpen(false)}>
                                    <CustomText style={{
                                        color: 'white',
                                        fontFamily: FONTS_FAMILY.Excon_Regular
                                    }}>Todays Activations</CustomText>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>setIsFIlterOpen(false)}>
                                    <CustomText style={{
                                        color: 'white',
                                        fontFamily: FONTS_FAMILY.Excon_Regular
                                    }}>Total Activations</CustomText>

                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>setIsFIlterOpen(false)}>
                                    <CustomText style={{
                                        color: 'white',
                                        fontFamily: FONTS_FAMILY.Excon_Regular
                                    }}>Pending Activations</CustomText>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>setIsFIlterOpen(false)}>
                                <CustomText style={{
                                    color: 'white',
                                    fontFamily: FONTS_FAMILY.Excon_Regular
                                }}>Active Devices</CustomText>
                                </TouchableOpacity>

                            </View>}

                        </View>
                        <TouchableOpacity>
                            <CustomText style={{
                                color: 'white',
                                fontFamily: FONTS_FAMILY.Excon_Regular,
                                fontSize: 14
                            }}>View All</CustomText>
                        </TouchableOpacity>
                    </SpaceBetweenRow>


                    <FlatList
                        data={[1, 2, 3, 4,]}

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
            </View>

        )
    }

    const renderReports = () => {
        return (
            <View style={{
                alignSelf: 'center',
                marginTop: 15
            }}>
                {/* <ReportsToggle style={{ alignSelf: 'center' }} /> */}
                 <View
                    style={{
                        // position: 'absolute',
                        // bottom: 0,
                        top: 10,
                        // left: 30,
                        backgroundColor: '#E9866E',
                        height: 44,
                        width: 140,
                        alignItems:'center',
                        justifyContent:'center',
                        borderTopLeftRadius:20,
                        borderTopRightRadius:20,
                        alignSelf: 'center',
                        bottom:-40
                    }}
                >
                    <CustomText style={{
                        color:'white',
                        fontFamily:FONTS_FAMILY.Excon_Medium
                    }}>Reports</CustomText>
                </View>
                <View style={{
                }}>
                    {/* <ReportsUi width={330} /> */}
                    <Image
                    source={IMG.reportsUi}
                    style={{height:341, width:330}}
                    resizeMode="contain"
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={styles?.container}>
            <Row style={styles.Header}>
                {/* <TouchableOpacity onPress={()=>setIsDraweOpen(true)}>

                <DrawerIcon />
                </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => setIsDraweOpen(true)}
                    style={{
                        borderWidth:0.4,
                        borderColor:'white',
                        padding:10,
                        borderRadius:100,
                        backgroundColor:'#1D1D1F'
                    }}
                    >
                    {/* <DrawerIcon /> */}
                    <DrawerLine/>

                </TouchableOpacity>
                <CustomText style={styles.headerText}>Hello, Retailer</CustomText>
            </Row>
            <ScrollView>
                {renderOverView()}
                {renderCrousel()}
                {renderButtons()}
                {renderActivationList()}
                {renderReports()}

            </ScrollView>
               <CustomDrawer
                isVisible={isDrawerOpen}
                onClose={() => setIsDraweOpen(false)}
            />
        </View>
    )
}


export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    Header: {
        padding: 20,
        alignItems: 'center',
        gap: 14
    },
    headerText: {
        color: 'white',
        fontSize: 20, fontFamily: FONTS_FAMILY.Excon_Regular,
        // bottom: 15
    },
    DOBg: {
        height: 190,
        width: '100%',
        // justifyContent:'center'
        // padding:40
        marginTop:-23
    },
    DoText: {
        color: 'white',
        fontFamily: FONTS_FAMILY.Excon_Regular,
        textAlign: 'center',
        fontSize: 13
    },
    divider: {
        height: 81,
        width: 0.5,
        backgroundColor: 'white'
    },
    ActivationList: {
        backgroundColor: App_Primary_color,
        height: 538,
        marginHorizontal: 20,
        borderRadius: 15,
        padding: 10,
        marginTop: 10

    }

})