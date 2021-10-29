import * as React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BookDetail from '../Screen/BookDetail'
import Books from '../Screen/Books'
import UserSignup from '../Screen/Signup'
import UserSignin from '../Screen/Signin'
import Splash from '../Screen/Splash'
import SignupAnimation from '../Screen/SignupAnimation'
import CartComponent from '../Components/CartComponent'
import Cart from '../Screen/Cart'
const Stack = createNativeStackNavigator()

function BookStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="signin" component={UserSignin} />
      <Stack.Screen name="signup" component={UserSignup} />
      <Stack.Screen name="signupanimation" component={SignupAnimation} />
      <Stack.Screen
        name="Books"
        component={Books}
        options={{ headerShown: true, headerRight: () => <CartComponent /> }}
      />
      <Stack.Screen
        name="BookDetail"
        component={BookDetail}
        options={{
          headerShown: true,
          headerRight: () => <CartComponent />,
        }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  )
}

export default BookStackNavigator
