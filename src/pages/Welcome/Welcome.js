import React from 'react'
import { SafeAreaView ,Text, View} from 'react-native'
import tw from 'twrnc';
import EnterButton from '../../components/Buttons/EnterButton';


function Welcome() {


  return (
    <SafeAreaView style={tw`bg-yellow-500 w-full h-full flex items-center justify-center`}>
        <View>    
        <Text style={tw`text-white font-bold text-2xl`}>World Kitchen is under your sevice!</Text>
        <EnterButton title="Let's see categories"/>
        </View>
        
    </SafeAreaView>
  )
}

export default Welcome