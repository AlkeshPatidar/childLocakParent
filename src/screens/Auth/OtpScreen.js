// import { ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native"
// import CustomText from "../../components/TextComponent"
// import IMG from "../../assets/Images"
// import { App_Primary_color } from "../../common/Colors/colors"
// import { KeygenAdded, LockIcon, LoginAccountText, LoginBtn } from "../../assets/SVGs"
// import CustomInputField from "../../components/wrapper/CustomInput"
// import { FONTS_FAMILY } from "../../assets/Fonts"
// import { OtpInput } from 'react-native-otp-entry';


// const OtpScreen = ({ navigation }) => {
//     return (
//         <ImageBackground source={IMG.LoginBg}
//             style={{
//                 flex: 1,
//                 backgroundColor: App_Primary_color,
//                 justifyContent: 'center',
//                 alignItems: 'center'
//             }}
//         >
//             <View style={{
//                 height: 600,
//                 width: 320,
//                 borderWidth: 0.4,
//                 borderColor: '#E9866E',
//                 // marginTop: 200,
//                 borderRadius: 30,
//                 // alignItems: 'center',
//                 paddingVertical: 30,
//                 paddingHorizontal: 16,
//                 backgroundColor: App_Primary_color
//             }}>

//                 <LockIcon style={{ alignSelf: 'center' }} />

//                 <View style={{
//                     marginTop: 20
//                 }}>
//                     <CustomText style={{
//                         color: 'white',
//                         fontSize: 16,
//                         fontFamily: FONTS_FAMILY.Excon_Medium,
//                         marginBottom: 10
//                     }}>Enter Your PIN</CustomText>
//                     <OtpInput
//                         numberOfDigits={4}
//                         theme={{
//                             containerStyle: styles.otpContainer,
//                             pinCodeTextStyle: styles.textInput,
//                             pinCodeContainerStyle: styles.pinCodeContainer,
//                             focusedPinCodeContainerStyle: styles.focusedPinCodeContainer,
//                         }}
//                     />
//                     <KeygenAdded style={{alignSelf:'center', marginTop:10}}/>

//                 </View>



//             </View>


//         </ImageBackground>
//     )
// }

// export default OtpScreen

// const styles = StyleSheet.create({
//     otpContainer: {
//         marginTop: 10,
//     },
//     textInput: {
//         fontSize: 16,
//         fontFamily: FONTS_FAMILY.SfPro_Medium,
//         color: 'white',
//     },
//     pinCodeContainer: {
//         width: 65,
//         height: 50,
//         borderRadius: 12,
//         backgroundColor: '#3A3A3A5C',
//         marginBottom: 8,
//         borderColor: 'white', // Blue color for focus
//         borderWidth: 0.2,
//     },
//     focusedPinCodeContainer: {
//         borderColor: 'white', // Blue color for focus
//         borderWidth: 0.2,
//     },
// })

import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import CustomText from "../../components/TextComponent";
import IMG from "../../assets/Images";
import { App_Primary_color } from "../../common/Colors/colors";
import { KeygenAdded, LockIcon } from "../../assets/SVGs";
import { FONTS_FAMILY } from "../../assets/Fonts";

const OtpScreen = ({navigation}) => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleKeyPress = (value) => {
    if (value === "back") {
      const lastIndex = otp.findLastIndex((digit) => digit !== "");
      if (lastIndex >= 0) {
        const updated = [...otp];
        updated[lastIndex] = "";
        setOtp(updated);
      }
    } else if (value === "submit") {
      console.log("OTP Submitted: ", otp.join(""));
    } else {
      const firstEmptyIndex = otp.findIndex((digit) => digit === "");
      if (firstEmptyIndex !== -1) {
        const updated = [...otp];
        updated[firstEmptyIndex] = value;
        setOtp(updated);
      }
    }
  };

 useEffect(() => {
    if (otp.every(digit => digit !== "")) {
      setTimeout(() => {
        navigation.navigate("Dashboard");
      }, 300); // optional delay for smoothness
    }
  }, [otp]);

  const renderKey = (value, label = null) => (
    <TouchableOpacity
      key={value}
      onPress={() => handleKeyPress(value)}
      style={{
        width: 90,
        height: 60,
        marginHorizontal: 8,
        marginVertical:7,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        // backgroundColor: "#3A3A3A5C",
        // borderWidth: 0.5,
        borderColor: "white",
      }}
    >
      <Text style={{ color: "white", fontSize: 32, fontFamily: FONTS_FAMILY.Excon_Regular }}>
        {label || value}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={IMG.LoginBg}
      style={{
        flex: 1,
        backgroundColor: App_Primary_color,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 680,
          width: 320,
          borderWidth: 0.4,
          borderColor: "#E9866E",
          borderRadius: 30,
          paddingVertical: 30,
          paddingHorizontal: 16,
          backgroundColor: App_Primary_color,
        }}
      >
        <LockIcon style={{ alignSelf: "center" }} />

        <View style={{ marginTop: 20 }}>
          <CustomText
            style={{
              color: "white",
              fontSize: 16,
              fontFamily: FONTS_FAMILY.Excon_Medium,
              marginBottom: 10,
            }}
          >
            Enter Your PIN
          </CustomText>

          {/* OTP Display Boxes */}
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
            {otp.map((digit, index) => (
              <View
                key={index}
                style={{
                  width: 65,
                  height: 50,
                  borderRadius: 12,
                  backgroundColor: "#3A3A3A5C",
                  borderColor: "white",
                  borderWidth: 0.2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: FONTS_FAMILY.SfPro_Medium,
                    color: "white",
                  }}
                >
                  {digit}
                </Text>
              </View>
            ))}
          </View>
            <KeygenAdded style={{ alignSelf: "center", marginTop: 0 }} />

          {/* Custom Keyboard */}
          <View style={{ alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>
              {renderKey("1")}
              {renderKey("2")}
              {renderKey("3")}
            </View>
            <View style={{ flexDirection: "row" }}>
              {renderKey("4")}
              {renderKey("5")}
              {renderKey("6")}
            </View>
            <View style={{ flexDirection: "row" }}>
              {renderKey("7")}
              {renderKey("8")}
              {renderKey("9")}
            </View>
            <View style={{ flexDirection: "row" }}>
              {renderKey("submit", "✓")}
              {renderKey("0")}
              {renderKey("back", "✕")}
            </View>

            {/* Add below keyboard */}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default OtpScreen;
