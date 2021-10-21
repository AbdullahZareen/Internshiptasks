import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BookDetail from './Screen/BookDetail'
import Books from './Screen/Books'
import Signin from './Screen/Signin'
import Signup from './Screen/Signup'
import Sort from './Screen/Sort'
import BookStackNavigator from './Navigation/BookStackNavigation'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <BookStackNavigator />
    </NavigationContainer>
  )
}
