/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import NavOptions from '../components/NavOptions';


function HomeScreen() {
   return (
      <SafeAreaView>

         <View  >
            <Image
               style={{ ...style.logoStyle, ...{ marginLeft: 20 } }}
               source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' }}
            />



            <NavOptions />

         </View>
      </SafeAreaView>
   );
}
const style = StyleSheet.create({

   logoStyle: {
      height: 100,
      width: 100,
      resizeMode: 'contain',
   },
   TextStyle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black'
   }
});
export default HomeScreen;
