import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView,Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Welcome from './pages/Welcome/Welcome';
import MealsCategories from './pages/MealsCategories/MealsCategories';
import Meals from './pages/Meals/Meals';
import MealDetails from './pages/MealDetails/MealDetails';

function Router() {

const Stack = createNativeStackNavigator();
  

  return (
  
 <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} 
        options={{
          headerShown: false
        }}
      />
         <Stack.Screen name="MealsCategories" component={MealsCategories} 
        options={{
          headerTitle:"Categories",
          headerTitleAlign: "center",
          headerTintColor: "green",
          headerTitleStyle:{
            fontSize:20,
            fontWeight:"bold",
            color:"green",
           
          },
        }}
      />

      <Stack.Screen name="Meals" component={Meals} 
        options={{
          headerTitle:"Meals",
          headerTitleAlign: "center",
          headerTintColor: "green",
          headerTitleStyle:{
            fontSize:20,
            fontWeight:"bold",
            color:"green",
           
          },
        }}
      />

     <Stack.Screen name="MealDetails" component={MealDetails} 
        options={{
          headerTitle:"Meal Details",
          headerTitleAlign: "center",
          headerTintColor: "green",
          headerTitleStyle:{
            fontSize:20,
            fontWeight:"bold",
            color:"green",
          },
        }}
      />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router