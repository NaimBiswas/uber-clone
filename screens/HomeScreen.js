/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, SafeAreaView, StyleSheet, View, Text, FlatList, ScrollView, TouchableNativeFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

function HomeScreen() {
   const data = [
      {
         id: 1,
         title: 'Get a ride',
         image: 'https://www.pngall.com/wp-content/uploads/2016/07/Car-Download-PNG.png',
      },
      {
         id: 2,
         title: 'Order foods',
         image: 'https://www.pngall.com/wp-content/uploads/2016/06/Junk-Food-PNG-Clipart.png',
      },
   ];

   const renderItems = (itemData) => {

      return (
         <TouchableNativeFeedback >
            <View style={style.renderView}>
               <Image
                  style={style.cardImage}
                  source={{ uri: itemData.item.image }}
               />
               <Text style={style.TextStyle}>{itemData.item.title}
               </Text>
               <Text style={style.arrowStyle}>
                  <Icon
                     name="arrowright"
                     type="antdesign"
                     color="#D9D9D9" />
               </Text>
            </View>
         </TouchableNativeFeedback>
      );
   };








   return (
      <SafeAreaView>

         <View  >
            <Image
               style={{ ...style.logoStyle, ...{ marginLeft: 20 } }}
               source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' }}
            />


            <FlatList numColumns={2} data={data} renderItem={renderItems} />



         </View>
      </SafeAreaView>
   );
}
const style = StyleSheet.create({
   arrowStyle: {
      padding: 10,
      backgroundColor: '#202020',
      marginBottom: 15,
      borderRadius: 10,
      width: '70%',
      textAlign: 'center',
      marginTop: 15,

   },
   renderView: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#D9D9D9',
      margin: 10,
      borderRadius: 10,

   },
   cardImage: {
      height: 100,
      width: 150,
      resizeMode: 'contain',
      marginTop: 15
   },
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
