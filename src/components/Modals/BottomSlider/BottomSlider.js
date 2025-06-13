import React from 'react';
import {
  View,
  SafeAreaView,
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
// import getStyles from './bottomSlider.styles';
import getStyles from './BottomSliderStyles';
import { Cross } from '../../../assets/SVGs';

const { height, width } = Dimensions.get('window');

const BottomSlider = ({
  isOpen,
  children,
  onClose,
  outerPress,
  isPotrait,
  sliderHeight = 0.5,
  sliderStyles = {},
  sliderBackgroundStyles = {},
}) => {
  const { bottomSheet, innerView } = getStyles(isPotrait);

  return (
    <Modal
      visible={isOpen}
      transparent={true}
      onRequestClose={onClose}
      animationType="slide">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <TouchableOpacity style={{position:'absolute', zIndex:1000, alignSelf:'center'}}
        onPress={onClose}
        >
          <Cross />
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={outerPress}>
          <SafeAreaView style={bottomSheet}>
            <TouchableWithoutFeedback onPress={null}>
              <View
                style={[
                  innerView,
                  isPotrait && { height: height * sliderHeight },
                  sliderStyles,
                ]}>
                {/* <View style={{backgroundColor:'rgba(232, 230, 234, 1)', height:10, width:50, borderRadius:20}}/> */}
                {children}
              </View>
            </TouchableWithoutFeedback>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default BottomSlider;
