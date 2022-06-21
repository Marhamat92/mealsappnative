import React, { useState, useEffect } from 'react'
import { FlatList, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { SafeAreaView, Text, View } from 'react-native'
import tw from 'twrnc';
import { getCategoriesList } from '../../apiServices/Services';
import CategoriesCards from '../../components/MealsCategoriesCards/CategoriesCards';
import LottieView from 'lottie-react-native';

function MealsCategories({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    
    setLoading(true);
    getCategoriesList().then(res => {
      setCategoriesList(res.categories);

      setTimeout(() => {
        setLoading(false);

      }, 4000);

    }).catch(err => {
      console.log(err);
    }).finally(() => {
      console.log('finally');
    }
    )
  }, []);


  function Loading() {


    return (<LottieView style={tw`flex items-center bg-white`} source={require('../../assets/Loading/meal3.json')} autoPlay loop
   
    
    />)

  }



  return (
    <SafeAreaView style={tw`bg-yellow-500 w-full h-full flex`}>
      {loading ?
        <Loading />
        :
        <FlatList
          ItemSeparatorComponent={() => <View style={tw`w-full h-1 bg-yellow-500`}></View>}
          data={categoriesList}
          keyExtractor={(item) => item.idCategory}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => {
               
                navigation.navigate("Meals", { categoryName: item.strCategory })
              }}>
                <CategoriesCards
                  cardImage={item.strCategoryThumb}
                  cardName={item.strCategory}
                  cardId={item.idCategory}
                />
              </TouchableOpacity>
            )
          }}
        />


      }
    </SafeAreaView>
  )
}

export default MealsCategories