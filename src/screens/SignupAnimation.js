import React from 'react'
import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native'

export default function Splash({ navigation }) {
  return (
    <LottieView
      source={require('../images/splashscreen.json')}
      autoPlay
      loop={false}
      onAnimationFinish={() => navigation.navigate('signin')}
    />
  )
}
