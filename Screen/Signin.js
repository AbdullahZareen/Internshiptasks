import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ToastAndroid,
  ScrollView,
} from 'react-native'
import { auth } from '../firebase'
export default function Login({ navigation }) {
  const [email, onChangeemail] = useState('')
  const [password, onChangePassword] = useState('')
  const handleSignin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        console.log('-------------------------------------------------------')
        const user = userCredentials.user
        console.log(user.email)
        navigation.navigate('Books')
      })
      .catch((e) => {
        alert(e.message)
      })
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontWeight: 'bold', top: 90, fontSize: 22 }}>
          Sign in
        </Text>
      </View>
      <Image style={styles.logo} source={require('../images/login.png')} />
      <View style={styles.container1}>
        {/* <Text style={styles.setText}>Email</Text> */}
        <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={onChangeemail}
          placeholder="Email"
        />
        {/* <Text style={styles.setText}>password</Text> */}
        <TextInput
          style={styles.inputBox}
          value={password}
          onChangeText={onChangePassword}
          placeholder="password"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.btnbox} onPress={handleSignin}>
          <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={{ paddingTop: 110 }}>
        <TouchableOpacity>
          <Text style={{ color: 'blue' }}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signupcont}>
        <Text>Don't have and account yet? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
          <Text style={{ color: 'blue' }}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    alignItems: 'center',
  },
  setText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupcont: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: 10,
    justifyContent: 'center',
    marginBottom: 90,
  },
  inputBox: {
    marginVertical: 10,
    width: 350,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  btntext: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    marginTop: 100,
  },
  btnbox: {
    width: 350,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    paddingVertical: 10,
    marginBottom: -70,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
})
