import React from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  Text,
} from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'

export default function CartComponent() {
  const cart = useSelector((state) => state.cart)
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Image
          source={require('../images/cart.jpg')}
          style={{
            width: 40,
            height: 40,
            borderRadius: 40 / 2,
            marginLeft: 15,
          }}
        />
      </TouchableOpacity>
      <View
        style={[
          { padding: 5 },
          Platform.OS == 'android' ? styles.iconContainer : null,
        ]}
      >
        <View
          style={{
            position: 'absolute',
            height: 30,
            width: 30,
            borderRadius: 15,
            backgroundColor: 'rgba(95,197,123,0.8)',
            right: 15,
            bottom: 15,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            {cart.length}
          </Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    paddingLeft: 20,
    paddingTop: 10,
    marginRight: 5,
  },
})
