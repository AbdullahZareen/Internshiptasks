import * as React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BookDetail from '../Screen/BookDetail'
import Books from '../Screen/Books'
const Stack = createNativeStackNavigator()

function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Books" component={Books} />
      <Stack.Screen
        name="BookDetail"
        component={BookDetail}
        headerShown={true}
      />
    </Stack.Navigator>
  )
}

export default App
