import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
    <View className='flex justify-center items-center mx-3 p-10 h-[150px] rounded-xl bg-primary mb-10'>
        <View className='flex items-center justify-center w-24 h-24 bg-white rounded-full'>
          <Text className='text-3xl text-primary font-play-write'>Dary</Text>
        </View>
    </View>
    <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer