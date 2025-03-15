import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Movie } from '@/infrastructure/interfaces/movie.interface'
import MoviePoster from './MoviePoster'

interface Props {
    title?: string;
    movies: Movie[]
}

const MovieHorizontalList = ({title, movies }: Props) => {
  return (
    <View>
        {title && <Text className='px-4 mb-2 text-3xl font-bold'>Populares</Text>}
      
      <FlatList 
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item}) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
        />
    </View>
  )
}

export default MovieHorizontalList