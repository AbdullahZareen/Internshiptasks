import React from 'react'
import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native'

export default function Splash({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFA500',
      }}
    >
      <LottieView
        source={require('../images/splashbook.json')}
        autoPlay
        loop={false}
        onAnimationFinish={() => navigation.replace('signin')}
      />
    </View>
  )
}
