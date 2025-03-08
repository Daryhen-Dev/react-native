import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StackLayOut = () => {
  return(
    <Stack screenOptions={{
      // headerShown: false,
      headerShadowVisible: false,
      contentStyle:{
        backgroundColor: 'white'
      }
    }} >
      <Stack.Screen name='home/index' options={{title: 'Home Screen', animation: 'ios_from_left'}}/>
      <Stack.Screen name='products/index' options={{title: 'Producto Screen', animation: 'slide_from_bottom'}}/>
      <Stack.Screen name='profile/index' options={{title: 'Perfil Screen' , animation: 'flip'} }/>
      <Stack.Screen name='settings/index' options={{title: 'Settings Screen', animation: 'slide_from_right'}}/>
    </Stack>
  ) 
}

export default StackLayOut