import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'

interface Props {
    id: number;
    poster: string;
    smallPoster?: boolean;
    className?:string;
}


const MoviePoster = ({id, poster, smallPoster = false, className = ''} : Props) => {
  return (
    <Pressable className={`px-2 active:opacity-90 ${className}`}>
        <Image source={{ uri: poster}}
        className='w-full h-full shadow-lg rounded-2xl' style={{width: smallPoster ? 85 : 150, height: smallPoster? 130 : 250}} resizeMode='cover' />
    </Pressable>)
}

export default MoviePoster