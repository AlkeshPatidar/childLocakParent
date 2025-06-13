import {Dimensions, StatusBar, StyleSheet} from 'react-native';

const darkTransparentBlack= 'rgba(0, 0, 0, 0.8)'
const white= '#FFFFFF'

const portraitStyles = () =>
  StyleSheet.create({
    bottomSheet: {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      flex: 1,
      backgroundColor: darkTransparentBlack,
      justifyContent: 'flex-end',
    },
    innerView: {
      height: Dimensions.get('window').height / 2,
      backgroundColor: white,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 10,
      alignItems:'center'
    },
  });

const landscapeStyles = () =>
  StyleSheet.create({
    ...portraitStyles(),
    bottomSheet: {
      ...portraitStyles().bottomSheet,
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      justifyContent: 'center',
    },
    innerView: {
      ...portraitStyles().innerView,
      width: '50%',
      height: Dimensions.get('window').height - StatusBar.currentHeight,
      alignSelf: 'flex-end',
    },
  });

const getStyles =(isPotrait) => {
  if (isPotrait) {
    return portraitStyles();
  }
  return landscapeStyles();
};

export default getStyles;
