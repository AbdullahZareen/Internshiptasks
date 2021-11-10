import React from 'react'
import {
  Box,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  StatusBar,
  ScrollView,
  FlatList,
} from 'native-base'
import {
  ToastAndroid,
  TouchableOpacity,
  useWindowDimensions,
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import * as actionCreators from '../state/action-creator/index'
import { bindActionCreators } from 'redux'
import SwiperFlatList from 'react-native-swiper-flatlist'

export default function BookDetail({ route, navigation }) {
  const { width, height } = useWindowDimensions()
  const cart = useSelector((state) => state.cart)
  const [booksdata, setbooks] = React.useState(route.params.parambook)
  const { books } = booksdata
  let { index } = booksdata

  const { Addbook } = bindActionCreators(actionCreators, useDispatch())
  const Carddata = () => {
    return (
      <SwiperFlatList
        // autoplay
        autoplayDelay={2}
        // autoplayLoop
        index={index}
        data={books}
        renderItem={({ item, index }) => (
          <View>
            <Image
              source={{ uri: item.book_image }}
              alt="image"
              resizeMode="contain"
              w={width}
              h={500}
            />
            <View style={styles.box}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.text}>
                <Text style={styles.heading}>Author:</Text>
                <Text style={styles.authortext}> {item.author}</Text>
              </View>
              <View style={styles.text}>
                <Text style={styles.heading}>Price: </Text>
                <Text style={styles.authortext}>{item.price}$</Text>
              </View>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  for (let i = 0; i < cart.length; i++) {
                    if (cart[i].title === item.title) {
                      alert('Book already exist in cart')
                      return
                    }
                  }
                  Addbook(item)
                  ToastAndroid.show('book added in cart', ToastAndroid.LONG)
                  index = index
                }}
              >
                <Text style={styles.add}>Add to cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    )
  }
  return (
    <NativeBaseProvider>
      <StatusBar />
      <ScrollView>
        <Carddata />
      </ScrollView>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  box: {
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    alignSelf: 'center',
  },
  description: { fontSize: 14, width: '70%' },
  authortext: { fontSize: 14 },

  btn: {
    marginTop: 30,
    borderRadius: 60,
    width: '95%',
    borderRadius: 50,
    paddingLeft: 20,
    backgroundColor: '#FFA500',
    color: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    height: 45,
    justifyContent: 'center',
  },
  add: {
    color: '#fff',
    alignSelf: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
  },
  text: {
    flexDirection: 'row',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkTouch: {
    alignItems: 'center',
    marginTop: 10,
  },
  link: {
    color: 'green',
  },
  purchasTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
    alignSelf: 'center',
    color: '#FFA500',
  },
})
