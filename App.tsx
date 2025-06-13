
import React, { useEffect } from 'react';
import { BackHandler, SafeAreaView, StatusBar } from 'react-native';
import StackNavigation from './src/routes/StackNavigation/route';
import color, { App_Primary_color } from './src/common/Colors/colors';
import FlashMessage from 'react-native-flash-message';
import Loader from './src/components/Loader';
import { Provider, useSelector } from 'react-redux';
import store from './src/redux/store';
import { PaperProvider } from 'react-native-paper';

import { enableScreens } from 'react-native-screens';

enableScreens(false);

const MainApp = () => {
  const loaderVisible = useSelector(state => state?.loader?.loader);

  return (
      <SafeAreaView style={{ flex: 1, backgroundColor: App_Primary_color }}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={App_Primary_color}
        />
        <StackNavigation />
        <FlashMessage position="top" />
        <Loader visible={loaderVisible} />
      </SafeAreaView>
  );
};

const App = () => {
  return (
    <PaperProvider>
    <Provider store={store}>
      <MainApp />
    </Provider>
    </PaperProvider>
  );
};

export default App;
