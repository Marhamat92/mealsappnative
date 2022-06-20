import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import tw from 'twrnc';

function MealsCard({cardImage, cardName, cardId}) {
  return (
    <SafeAreaView style={tw`bg-yellow-500 mx-2 mt-2   flex-col`}>
      <Image
        style={tw`min-h-30 min-w-30 rounded-lg`}
        source={{uri: cardImage}}
      />
      <View style={tw`-mt-10 bg-black py-5 opacity-70`}></View>
      <Text style={tw`-mt-9 text-white text-center font-bold text-lg py-2`}>
        {cardName}
      </Text>
    </SafeAreaView>
  );
}

export default MealsCard;
