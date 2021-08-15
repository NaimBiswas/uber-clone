/* eslint-disable prettier/prettier */
import React from 'react';
import { Dimensions, Image, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function SplashSCreen() {
   return (


      <View style={style.splashView}>
         <StatusBar
            backgroundColor={'#fff'}
            animated={true}
            translucent={false}
            barStyle={
               'dark-content'

            }

         />
         <Image
            style={{ ...style.logoStyle }}
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' }}
         />
      </View>

   );
}
const style = StyleSheet.create({
   splashView: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%'
   },
   logoStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '76%',
      height: 400,
      resizeMode: 'contain',
      marginTop: '-25%'
   },
});
export default SplashSCreen;
