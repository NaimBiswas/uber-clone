/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
   StyleSheet,
   Text,
   View,
} from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import store from './store/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashSCreen from './screens/SplashSCreen';

const App = () => {

   return (
      <Provider store={store}>
         <SafeAreaProvider>
            <View>
               <SplashSCreen />
               {/* <HomeScreen /> */}
            </View>
         </SafeAreaProvider>
      </Provider>
   );
};

const styles = StyleSheet.create({

});

export default App;
