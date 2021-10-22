import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { auth } from '../firebase'
export default function UserSignup({ navigation }) {
  const [name, onchangename] = useState('')
  const [password, onchangepassword] = useState('')
  const [confirmpassword, onchangeconfirmpassword] = useState('')
  const [email, onChangeemail] = useState('')

  const handleSignup = () => {
    if (
      email === '' ||
      password === '' ||
      name === '' ||
      confirmpassword === ''
    ) {
      alert('fill the filled properly')
    } else {
      if (password === confirmpassword) {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((userCredentials) => {
            const user = userCredentials.user
            ToastAndroid.show(' Signup successful', ToastAndroid.SHORT)
            navigation.navigate('signin')
          })
          .catch((e) => {
            alert(e.message)
          })
      } else {
        alert('password does not match please type correct password')
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ bottom: 70, alignItems: 'center' }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', top: 30 }}>
          Sign up
        </Text>
      </View>
      {/* <Text style={styles.setText}>User name</Text> */}
      <TextInput
        style={styles.inputBox}
        onChangeText={onchangename}
        placeholder="User name"
      />
      {/* <Text style={styles.setText}>Email</Text> */}
      <TextInput
        style={styles.inputBox}
        onChangeText={onChangeemail}
        placeholder="Email"
      />
      {/* <Text style={styles.setText}>Password</Text> */}
      <TextInput
        style={styles.inputBox}
        secureTextEntry={true}
        onChangeText={onchangepassword}
        placeholder="Password"
      />
      {/* <Text style={styles.setText}>confirm Password</Text> */}
      <TextInput
        style={styles.inputBox}
        secureTextEntry={true}
        onChangeText={onchangeconfirmpassword}
        placeholder="Confirm password"
      />

      <TouchableOpacity style={styles.btnbox} onPress={handleSignup}>
        <Text style={styles.btntext}>Sign up</Text>
      </TouchableOpacity>
      <View style={styles.signupcont}>
        <Text>ALready have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('signin')}>
          <Text style={{ color: 'blue' }}>Signin here</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  setText: {
    marginLeft: 10,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
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
    color: '#fff',
    fontWeight: 'bold',
  },
  btnbox: {
    width: 350,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
    marginTop: 10,
  },
  signupcont: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: 10,
    justifyContent: 'center',
  },
})
