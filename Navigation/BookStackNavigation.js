import * as React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BookDetail from '../Screen/BookDetail'
import Books from '../Screen/Books'
import UserSignup from '../Screen/Signup'
import UserSignin from '../Screen/Signin'
import Splash from '../Screen/Splash'
import SignupAnimation from '../Screen/SignupAnimation'
const Stack = createNativeStackNavigator()

function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="signin" component={UserSignin} />
      <Stack.Screen name="signup" component={UserSignup} />
      <Stack.Screen name="signupanimation" component={SignupAnimation} />
      <Stack.Screen name="Books" component={Books} />

      <Stack.Screen
        name="BookDetail"
        component={BookDetail}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  )
}

export default App
