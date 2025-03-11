import { Link, Redirect } from 'expo-router'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const App = () => {
    return <Redirect href="/home" />
//   return (
//     <SafeAreaView>

//     <View className='mt-7 mx-2.5'>
//       <Text className='text-5xl font-play-write text-primary' >Hola mundo</Text>
//       <Text className='text-4xl text-secundary' style={{fontFamily: 'PlaywriteITModerna-Regular'}} >Hola mundo</Text>
//       <Text className='text-3xl font-play-thin text-secundary-100' >Hola mundo</Text>
//       <Text className='text-3xl font-play-light text-secundary-200' >Hola mundo</Text>
//       <Link href='/products/index'>
//       Productos
//       </Link>
//     </View>
//     </SafeAreaView>
//   )
}

export default App