import React from 'react'
import { SafeAreaView ,Text, View} from 'react-native'
import tw from 'twrnc';
import EnterButton from '../../components/Buttons/EnterButton';


function Welcome({navigation}) {


  


  return (
    <SafeAreaView style={tw`bg-yellow-500 w-full h-full flex items-center justify-center`}>
        <View>    
        <Text style={tw`text-white font-medium text-4xl `}>World Kitchen</Text>
        <EnterButton onPress={()=>navigation.navigate("MealsCategories")} title="Get Started"/>
        </View>
    </SafeAreaView>
  )
}

export default Welcome