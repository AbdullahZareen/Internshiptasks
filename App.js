import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { store } from './src/state/store'
import { Provider } from 'react-redux'
import BookStackNavigator from './src/navigation/BookStackNavigation'
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BookStackNavigator />
      </NavigationContainer>
    </Provider>
  )
}
