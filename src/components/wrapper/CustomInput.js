import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import { FONTS_FAMILY } from '../../assets/Fonts';
import CustomText from '../TextComponent';

const CustomInputField = ({
  icon,
  value,
  Lefticon,
  editable,
  secureTextEntry,
  placeholder,
  keyboardType,
  label,
  error,
  errorMessage,
  ...props
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);
  return (
    <View style={styles.wrapper}>
      {label && (
        <CustomText
          style={{
            position: 'absolute',
            bottom: 65,
            color: 'white',
            fontFamily: FONTS_FAMILY.Excon_Medium,
            fontSize: 16,
          }}
        >
          {label}
        </CustomText>
      )}
      <View
        style={[
          styles.container,
          error ? styles.errorBorder : null, // Apply red border if error exists
        ]}
      >
        {Lefticon}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#999"
          secureTextEntry={isSecure}
          editable={editable}
          keyboardType={keyboardType}
          value={value}
          {...props}
        />
        <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
          {icon}
        </TouchableOpacity>
      </View>
      {error && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 12, // Add margin for spacing between fields
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#DDDDDD',
    borderRadius: 14,
    paddingHorizontal: 10,
    width: '100%',
    height: verticalScale(46),
    gap: 10,
    backgroundColor:'#3A3A3A5C'
  },
  input: {
    flex: 1,
    minWidth: 0,
    fontSize: 14,
    color: 'white',
    fontFamily: FONTS_FAMILY.PlusJakartaSans_Regular,
  },
  errorBorder: {
    borderColor: '#ff4d4f', // Red border on error
  },
  errorText: {
    color: '#ff4d4f',
    fontSize: 12,
    marginTop: 4,
    fontFamily: FONTS_FAMILY.Poppins_Regular,
  },
});

export default CustomInputField;
