import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { store } from './state/store'
import { Provider } from 'react-redux'

import BookStackNavigator from './Navigation/BookStackNavigation'
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BookStackNavigator />
      </NavigationContainer>
    </Provider>
  )
}
