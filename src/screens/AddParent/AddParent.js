import { ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native"
import IMG from "../../assets/Images";
import { App_Primary_color } from "../../common/Colors/colors";
import Row from "../../components/wrapper/row";
import { AddParentBtn, BackIconBtn, BackIconOnly } from "../../assets/SVGs";
import CustomText from "../../components/TextComponent";
import { FONTS_FAMILY } from "../../assets/Fonts";
import CustomInputField from "../../components/wrapper/CustomInput";
import { useState } from "react";
import SuccessModal from "./SuccessModel";
import CustomButton from "../../components/Button";


const AddParent = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <ImageBackground source={IMG.AddParentBg}
            style={styles.container}
        >
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
                }}>Add Parent</CustomText>
            </Row>
            <View style={{ backgroundColor: 'white', height: 0.2, width: '100%', bottom: 20 }} />
            <View style={{
                marginHorizontal: 20,
                marginTop: 20,
                gap: 30
            }}>
                <CustomInputField
                    label={'Parent name *'}
                    placeholder={'Enter Parent Name'}
                />
                <CustomInputField
                    label={'Mobile Number *'}
                    placeholder={'Enter Mobile Number'}
                />
                <CustomInputField
                    label={'Email (Optional)'}
                    placeholder={'Enter Email Address'}
                />
                <CustomInputField
                    label={'Parent App Password'}
                    placeholder={'Please Enter Password'}
                />
                <CustomInputField
                    label={'Confirm Password'}
                    placeholder={'Please Re-Enter Password'}
                />

            </View>
            {/* <TouchableOpacity style={{
                marginHorizontal:20,
                alignSelf:'center',
                position:'absolute',
                bottom:20
            }}
            onPress={()=>setShowModal(true)}
            >
                <AddParentBtn width={330} height={80}/>
            </TouchableOpacity> */}
            <CustomButton
                title={'Add Parent'}
                onPress={() => setShowModal(true)}
                style={{
                    marginTop: 100
                }}
            />
            <SuccessModal visible={showModal} onClose={() => setShowModal(false)} />
        </ImageBackground>
    )
}

export default AddParent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
})