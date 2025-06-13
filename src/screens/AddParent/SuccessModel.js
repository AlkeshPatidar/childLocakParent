// components/SuccessModal.js
import React from 'react';
import { View, Text, Modal, StyleSheet, Pressable, Image } from 'react-native';
import { GoBackBtn, ParentSuccessfullyTxt, RightTick } from '../../assets/SVGs';

const SuccessModal = ({ visible, onClose }) => {
    return (
        <Modal visible={visible} transparent animationType="fade">
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <RightTick />
                    <ParentSuccessfullyTxt />
                    <Pressable style={styles.button} onPress={onClose}>
                       <GoBackBtn width={230}/>
                    </Pressable>
                </View>
            </View>
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
    circle: {
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 50,
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: 'white',
        marginTop: 5,
    },
    subtitle: {
        fontSize: 16,
        color: 'white',
        opacity: 0.7,
        marginBottom: 20,
    },
    button: {
        marginTop: 10,
        width: '100%',
        paddingVertical: 12,
        borderRadius: 25,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'transparent',
        // backgroundImage: 'linear-gradient(to right, #ff8a65, #4fc3f7)',
        overflow: 'hidden',
        alignItems:'center'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '600',
    },
});
