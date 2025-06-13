import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { FONTS_FAMILY } from '../assets/Fonts';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import color from '../common/Colors/colors';
import LinearGradient from 'react-native-linear-gradient';

const CustomButton = ({ title, onPress, leftIcon, style, rightIcon, txtColor, gradient = true }) => {
    const ButtonContent = () => (
        <>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 12
                }}>
                {leftIcon && (
                    leftIcon
                )}
                <Text style={{ ...styles.buttonText, ...txtColor }}>{title}</Text>
            </View>
            <View style={{
                position: "absolute",
                right: 20
            }}>
                {rightIcon && (
                    rightIcon
                )}
            </View>
        </>
    );

    if (gradient) {
        return (
            <TouchableOpacity
                style={{ ...styles.buttonContainer, ...style }}
                onPress={onPress}
                activeOpacity={0.5}>
                <LinearGradient
                    colors={['#E9866E', '#959189', '#4A9CA5']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradientBackground}>
                    <ButtonContent />
                </LinearGradient>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity
            style={{ ...styles.button, ...style }}
            onPress={onPress}
            activeOpacity={0.5}>
            <ButtonContent />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: moderateScale(280),
        height: verticalScale(40),
        borderRadius: moderateScale(23),
        alignSelf: 'center',
    },
    button: {
        width: moderateScale(280),
        height: verticalScale(40),
        borderRadius: moderateScale(23),
        backgroundColor: '#FF6000',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 14,
        color: 'black',
        fontFamily: FONTS_FAMILY.Manrope_SemiBold
    },
    gradientBackground: {
        width: 280,
        height: 40,
        borderRadius: moderateScale(23),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
});

export default CustomButton;