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
  Input,
  Icon,
  Pressable,
} from 'native-base'
import { StatusBar } from 'expo-status-bar'
import axios from 'axios'
import {
  TouchableOpacity,
  View,
  Image,
  useWindowDimensions,
  Dimensions,
} from 'react-native'

export default function Books({ navigation }) {
  const dimension = Dimensions.get('window')
  console.log(dimension)
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
          <ActivityIndicator size="large" alignSelf="center" color="#FFA500" />
        </View>
      )
    return (
      <Box
        w={{
          base: '100%',
          md: '25%',
        }}
      >
        <Box></Box>
        <Searchbar
          placeholder="Search"
          onChangeText={searchbook}
          value={text}
          style={{ borderRadius: 25, margin: 10 }}
        />
        <FlatList
          data={
            textAndSearched.text === '' ? booksdata : textAndSearched.searched
          }
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                if (index === 0) {
                  navigation.navigate('BookDetail', {
                    parambook: {
                      books: [booksdata[index], booksdata[index + 1]],
                      index: 0,
                    },
                  })
                } else if (index === booksdata.length - 1) {
                  navigation.navigate('BookDetail', {
                    parambook: {
                      books: [booksdata[index - 1], booksdata[index]],
                      index: 1,
                    },
                  })
                } else {
                  navigation.navigate('BookDetail', {
                    parambook: {
                      books: [
                        booksdata[index - 1],
                        booksdata[index],
                        booksdata[index + 1],
                      ],
                      index: 1,
                    },
                  })
                }
              }}
            >
              <Box
                borderBottomWidth="2"
                _dark={{
                  borderColor: 'gray.600',
                }}
                borderColor="coolGray.300"
                pl="4"
                pr="5"
                py="2"
              >
                <HStack space={8} justifyContent="space-between">
                  <Image
                    source={{
                      uri: item.book_image,
                    }}
                    style={{
                      width: 70,
                      height: 100,
                      marginTop: 4,
                      marginLeft: 10,
                    }}
                    resizeMode={'contain'}
                  />
                  <VStack mt="5">
                    <HStack>
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
                      <Text mt={'2'} color="coolGray.800" maxWidth="200">
                        {item.author}
                      </Text>
                    </HStack>
                  </VStack>
                  <Spacer />
                </HStack>
              </Box>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingBottom: 70 }}
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
