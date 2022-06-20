import React from 'react'
import { SafeAreaView ,Text, View,Image} from 'react-native'
import tw from 'twrnc';

function CategoriesCards({cardName,cardImage,cardId}) {


    

  return (
   <View style={tw`h-25 flex-row bg-white mx-2 items-center rounded-tl-full rounded-bl-full mt-2 mb-2`}>
       <Image style={tw`min-h-20 min-w-20 ml-6`} source={{uri:cardImage}} />
         <Text style={tw`ml-3 font-medium text-lg text-black`}>{cardName}</Text>
   </View>
  )
}

export default CategoriesCards