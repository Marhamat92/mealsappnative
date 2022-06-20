import React,{useState,useEffect} from 'react'
import { SafeAreaView, Text,View,Image,ScrollView,Linking } from 'react-native'
import tw from 'twrnc'
import {getMealsList} from '../../apiServices/Services'
import YoutubeButton from '../../components/Buttons/YoutubeButton';


function MealDetails({route,navigation}) {

    const {mealId} = route.params;
    console.log(mealId,"mealId");
const [mealData,setMealData] = useState({});
 
useEffect(() => {
    getMealsList().then(res => {
        setMealData(res.meals.find(meal => meal.idMeal === mealId));
    }).catch(err => {
        console.log(err);
    }).finally(() => {
        console.log('finally');
    }
    )
}, []);


  return (
    <SafeAreaView style={tw` flex`}>
        <ScrollView>
        <Image style={tw`h-50`} source={{uri:mealData.strMealThumb}} />
        <View style={tw` flex flex-col mt-2 px-2`}>
        <Text style={tw`text-orange-500 font-bold text-2xl my-1`} >{mealData.strMeal}({mealData.strArea})</Text>
         
        <Text style={tw`text-lg text-black`}>{mealData.strInstructions}</Text>
        </View>
        <YoutubeButton onPress={()=>Linking.openURL(mealData.strYoutube)} title="Watch On Youtube"/>
        </ScrollView>
    </SafeAreaView>)
}

export default MealDetails