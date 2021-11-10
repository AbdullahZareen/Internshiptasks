import * as React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BookDetail from '../screens/BookDetail'
import Books from '../screens/Books'
import UserSignup from '../screens/Signup'
import UserSignin from '../screens/Signin'
import Splash from '../screens/Splash'
import SignupAnimation from '../screens/SignupAnimation'
import CartComponent from '../components/CartComponent'
import Cart from '../screens/Cart'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'

const Stack = createNativeStackNavigator()

function BookStackNavigator() {
  const navigation = useNavigation()
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
        options={{
          headerShown: true,
          headerRight: () => <CartComponent />,
          headerLeft: () => (
            <MaterialIcons
              name="logout"
              size={30}
              color="black"
              onPress={() => {
                navigation.navigate('signin')
              }}
            />
          ),
        }}
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
        options={{
          headerShown: true,
          headerLeft: () => (
            <MaterialIcons
              name="arrow-back"
              size={26}
              color="black"
              onPress={() => {
                navigation.navigate('Books')
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  )
}
export default BookStackNavigator
