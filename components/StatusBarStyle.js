/* eslint-disable prettier/prettier */
import React from 'react'
import { StatusBar, View } from 'react-native'

function StatusBarStyle() {
   return (
      <View>
         <StatusBar
            backgroundColor={'#fff'}
            animated={true}
            translucent={false}
            barStyle={
               'dark-content'

            }

         />
      </View>
   )
}

export default StatusBarStyle
