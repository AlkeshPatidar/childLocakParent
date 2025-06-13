import { ImageBackground, TouchableOpacity, View } from "react-native"
import CustomText from "../../components/TextComponent"
import IMG from "../../assets/Images"
import { App_Primary_color } from "../../common/Colors/colors"
import { LoginAccountText, LoginBtn } from "../../assets/SVGs"
import CustomInputField from "../../components/wrapper/CustomInput"
import CustomButton from "../../components/Button"

const Login = ({ navigation }) => {
    return (
        <ImageBackground source={IMG.LoginBg}
            style={{
                flex: 1,
                backgroundColor: App_Primary_color,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <View style={{
                height: 360,
                width: 320,
                borderWidth: 0.4,
                borderColor: '#E9866E',
                marginTop: 200,
                borderRadius: 30,
                alignItems: 'center',
                paddingVertical: 30,
                paddingHorizontal: 16
            }}>
                <LoginAccountText />
                <View style={{ width: '100%', marginTop: 40, gap: 30 }}>
                    <CustomInputField
                        label={'Username'}
                        placeholder={'Enter username'}
                    />

                    <CustomInputField
                        label={'Password'}
                        placeholder={'Enter password'}
                    />

                </View>

                {/* <TouchableOpacity onPress={()=>navigation.navigate('OtpScreen')}>
                    <LoginBtn width={300} height={60} />
                </TouchableOpacity> */}
                <CustomButton
                title={'Login'}
                onPress={()=>navigation.navigate('OtpScreen')}
                style={{
                    marginTop:10
                }}
                />

            </View>


        </ImageBackground>
    )
}

export default Login