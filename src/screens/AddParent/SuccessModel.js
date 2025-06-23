import React from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import { GoBackBtn, ParentSuccessfullyTxt, RightTick } from '../../assets/SVGs';
import CustomButton from '../../components/Button';

const SuccessModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          {/* prevent modal content itself from triggering onClose */}
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              <RightTick />
              <ParentSuccessfullyTxt />
              <CustomButton
                title={'Go Back'}
                onPress={onClose}
                style={{
                  marginTop: 20,
                  alignSelf: 'center',
                }}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalContainer: {
    width: 300,
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    borderColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    backgroundColor: 'black',
  },
});
