import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { products } from '@/store/products.store'

const ProductScreem = () => {
    const {id } = useLocalSearchParams()
    const product = products.find(p => p.id === id)

    if (!product){
        return <Redirect href='' />
    }
  return (
    <View className='px-5 mt-2'>
      <Text className='text-2xl font-play-regular'>{product.title}</Text>
      <Text className=''>{product.description}</Text>
      <Text className='font-play-regular'>{product.price}</Text>
    </View>
  )
}

export default ProductScreem