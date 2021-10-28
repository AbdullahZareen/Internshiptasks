import React from 'react'
import { ActivityIndicator, Searchbar } from 'react-native-paper'
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center,
  NativeBaseProvider,
  Image,
  Input,
  Icon,
  Pressable,
} from 'native-base'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'
import axios from 'axios'
import { TouchableOpacity, View } from 'react-native'

export default function Books({ navigation }) {
  const Carddata = () => {
    const [booksdata, setbooksdata] = React.useState()
    const [text, settext] = React.useState()
    const [Loading, setLoading] = React.useState(true)

    const [textAndSearched, setTextAndSearched] = React.useState({
      text: '',
      searched: [],
    })
    const searchbook = (searchText) => {
      setTextAndSearched({
        text: searchText,
        searched: booksdata.filter((item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase())
        ),
      })
    }

    const getData = () => {
      axios
        .get(
          'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=pYtLa7oVERVr79mzAu0XB7B0Kt6FoWvq'
        )
        .then((res) => {
          res.data.results.books.sort((a, b) => {
            return a.title.localeCompare(b.title)
          })
          setbooksdata(res.data.results.books)
        })
        .catch((e) => {
          alert('api error')
        })
        .finally(() => setLoading(false))
    }
    React.useEffect(() => {
      getData()
    }, [])

    if (Loading === true)
      return (
        <View
          style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
        >
          <ActivityIndicator size="large" alignSelf="center" />
        </View>
      )
    return (
      <Box
        w={{
          base: '100%',
          md: '25%',
        }}
      >
        <Box mt={4}></Box>
        <Heading fontSize="4xl" p="4" pb="3" alignSelf="center">
          Books
        </Heading>
        <Searchbar
          placeholder="Search"
          onChangeText={searchbook}
          value={text}
        />
        <FlatList
          data={
            textAndSearched.text === '' ? booksdata : textAndSearched.searched
          }
          renderItem={({ item }) => (
            <Box
              borderBottomWidth="2"
              _dark={{
                borderColor: 'gray.600',
              }}
              borderColor="coolGray.500"
              pl="4"
              pr="5"
              py="2"
            >
              <HStack space={3} justifyContent="space-between">
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('BookDetail', { paramkey: item })
                  }
                >
                  <Image
                    size={'md'}
                    resizeMode="cover"
                    source={{
                      uri: item.book_image,
                    }}
                    alt={'Alternate Text ' + 'sm'}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
                <VStack>
                  <HStack>
                    <Text bold>TITLE:</Text>
                    <Text
                      _dark={{
                        color: 'warmGray.50',
                      }}
                      color="coolGray.800"
                      bold
                      isTruncated
                      maxW="200"
                    >
                      {item.title}
                    </Text>
                  </HStack>

                  <HStack>
                    <Text mt={'2'} bold>
                      Author:
                    </Text>
                    <Text
                      mt={'2'}
                      color="coolGray.600"
                      _dark={{
                        color: 'warmGray.200',
                      }}
                    >
                      {item.author}
                    </Text>
                  </HStack>
                </VStack>
                <Spacer />
              </HStack>
            </Box>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Box>
    )
  }

  return (
    <NativeBaseProvider>
      <StatusBar />
      <Carddata />
    </NativeBaseProvider>
  )
}
