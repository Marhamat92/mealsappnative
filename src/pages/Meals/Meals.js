import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View, FlatList,TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import {getMealsList} from '../../apiServices/Services';
import MealsCard from '../../components/MealsCards/MealsCards';

function Meals({route,navigation}) {
  const [mealsList, setMealsList] = useState([]);
  const {categoryName} = route.params;

  useEffect(() => {
    getMealsList()
      .then(res => {
        setMealsList(
          res.meals.filter(meal => meal.strCategory === categoryName),
        );
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        console.log('finally');
      });
  }, []);

  return (
    <SafeAreaView style={tw`bg-yellow-500 w-full h-full flex`}>
      <FlatList
        ItemSeparatorComponent={() => (
          <View style={tw`w-full h-1 bg-yellow-500`}></View>
        )}
        data={mealsList}
        keyExtractor={item => item.idMeal}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => { console.log("hjkhhj")
            navigation.navigate("MealDetails",{mealId:item.idMeal})
          }}>
            <MealsCard
              cardName={item.strMeal}
              cardImage={item.strMealThumb}
              cardId={item.idMeal}
            />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

export default Meals;
