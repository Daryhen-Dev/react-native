import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import {Slot, SplashScreen } from 'expo-router'
import { useFonts} from 'expo-font'
import "./global.css"

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
   const [fontsLoaded, error]=  useFonts({
        'PlaywriteITModerna-ExtraLight': require('../assets/fonts/PlaywriteITModerna-ExtraLight.ttf'),
        'PlaywriteITModerna-Light': require('../assets/fonts/PlaywriteITModerna-Light.ttf'),
        'PlaywriteITModerna-Regular': require('../assets/fonts/PlaywriteITModerna-Regular.ttf'),
        'PlaywriteITModerna-Thin':require('../assets/fonts/PlaywriteITModerna-Thin.ttf'),
    })

    useEffect(() => {
      if(error) throw error

      if(fontsLoaded) SplashScreen.hideAsync()
    }, [fontsLoaded, error])
    
    if(!fontsLoaded && !error) return null

  return (
    <Slot />
  )
}

export default RootLayout