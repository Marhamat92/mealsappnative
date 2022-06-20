import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc';


function EnterButton({onPress,title,style,disabled,loading,color,size}) {
  return (
 <TouchableOpacity onPress={onPress} style={tw`bg-green-500 py-2 items-center justify-center`}>
    <Text style={tw`text-white font-bold text-lg`}>{title}</Text>
 </TouchableOpacity>
  )
}

export default EnterButton