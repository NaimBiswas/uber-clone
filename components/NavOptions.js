/* eslint-disable prettier/prettier */
import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import { Icon } from 'react-native-elements';
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

function NavOptions() {
   const renderItems = (itemData) => {

      return (
         <TouchableNativeFeedback>
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
      <View>
         <FlatList numColumns={2} data={data} renderItem={renderItems} />

      </View>
   )
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
      margin: 15,
      marginTop: 0,
      borderRadius: 10,

   },
   cardImage: {
      height: 100,
      width: 150,
      resizeMode: 'contain',
      marginTop: 15
   },
   TextStyle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black'
   }
});
export default NavOptions
