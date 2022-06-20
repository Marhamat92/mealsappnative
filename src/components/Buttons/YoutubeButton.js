import React from 'react'
import { Text, TouchableOpacity,View } from 'react-native'
import tw from 'twrnc';


function YoutubeButton({title , onPress}) {
  return (
   <TouchableOpacity onPress={onPress} >
        <View style={tw`flex justify-center items-center my-2 bg-red-700 mx-14 py-2`}>
         <Text style={tw`text-white font-bold text-lg`}>{title}</Text>
        </View>   
   </TouchableOpacity>
  )
}

export default YoutubeButton