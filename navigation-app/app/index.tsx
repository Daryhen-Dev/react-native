import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const App = () => {
  return (
    <SafeAreaView>

    <View className='mt-7 mx-2.5'>
      <Text className='text-5xl font-play-write' >Hola mundo</Text>
      <Text className='text-4xl' style={{fontFamily: 'PlaywriteITModerna-Regular'}} >Hola mundo</Text>
      <Text className='text-3xl font-play-thin' >Hola mundo</Text>
      <Text className='text-3xl font-play-light' >Hola mundo</Text>
    </View>
    </SafeAreaView>
  )
}

export default App