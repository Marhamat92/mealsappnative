import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView,Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Welcome from './pages/Welcome/Welcome';

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
      
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router