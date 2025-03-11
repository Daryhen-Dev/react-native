import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useNavigation } from 'expo-router'
import { DrawerActions, StackActions } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

const StackLayOut = () => {
  const navigation = useNavigation()
  const onHeaderLeftClick = (canGoBack: boolean) => {
    if (canGoBack) {
      navigation.dispatch(StackActions.pop())
      return
    }
    navigation.dispatch(DrawerActions.toggleDrawer)
  }
  return(
    <Stack screenOptions={{
      headerShadowVisible: false,
      contentStyle:{
        backgroundColor: 'white'
      },
      headerLeft: ({tintColor, canGoBack}) => (<Ionicons
      name= {canGoBack ? 'arrow-back-outline' : 'grid-outline'} className='mr-5' size={20} onPress={() => onHeaderLeftClick(!!canGoBack)} />
      ), }} >

      <Stack.Screen name='home/index' options={{title: 'Home Screen', animation: 'ios_from_left'}}/>
      <Stack.Screen name='products/index' options={{title: 'Producto Screen', animation: 'slide_from_bottom'}}/>
      <Stack.Screen name='profile/index' options={{title: 'Perfil Screen' , animation: 'flip'} }/>
      <Stack.Screen name='settings/index' options={{title: 'Settings Screen', animation: 'slide_from_right'}}/>
    </Stack>
  ) 
}

export default StackLayOut