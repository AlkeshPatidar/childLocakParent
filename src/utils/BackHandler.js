import { useEffect, useState } from 'react';
import { BackHandler, ToastAndroid } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

/**
 * A reusable hook to handle back press behavior with a double-tap exit mechanism.
 * 
 * @param {boolean} shouldExitApp - Whether the app should exit on back press.
 */
const useBackPressHandler = (shouldExitApp = true) => {
  const [lastBackPress, setLastBackPress] = useState(0);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) return;

    const handleBackPress = () => {
      const now = Date.now();

      if (lastBackPress && now - lastBackPress < 2000) {
        if (shouldExitApp) {
          BackHandler.exitApp();
        }
      } else {
        ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);
        setLastBackPress(now);
        return true;
      }
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [isFocused, lastBackPress, shouldExitApp]);
};

export default useBackPressHandler;
