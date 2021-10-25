import React from 'react'
import {
  Box,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  StatusBar,
  Link,
  ScrollView,
} from 'native-base'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'

export default function BookDetail({ route }) {
  const book = route.params.paramkey
  console.log(book)
  const Carddata = () => {
    return (
      <Box
        rounded="lg"
        overflow="hidden"
        shadow={1}
        _light={{ backgroundColor: 'gray.50' }}
      >
        <Box
          w={{
            base: '100%',
            md: '25%',
          }}
        >
          <AspectRatio ratio={6.5 / 9}>
            <Image
              source={{
                uri: book.book_image,
              }}
              alt="image"
              resizeMode={'contain'}
            />
          </AspectRatio>
          <Center
            bg="darkBlue.400"
            _text={{ color: 'white', fontWeight: '700', fontSize: 'xs' }}
            position="absolute"
            bottom={0}
            px="3"
            py="1.5"
          >
            BOOK PHOTO
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack>
            <Heading size="md">{book.title}</Heading>
          </Stack>
          <Text fontWeight="400" numberOfLines={2}>
            <Text bold>Description: </Text> {book.description}
          </Text>
          <Heading>Buy Links</Heading>

          <Text bold mb={'-3'}>
            {book.buy_links[0].name}:
          </Text>
          <Link
            href={book.buy_links[0].url}
            numberOfLines={2}
            fontWeight="400"
            _text={{
              fontSize: 'md',
              _light: {
                color: 'cyan.500',
              },
              color: 'cyan.400',
            }}
          >
            {book.buy_links[0].url}
          </Link>
          <Text bold mb={'-3'}>
            {book.buy_links[1].name}:
          </Text>
          <Link
            href={book.buy_links[1].url}
            numberOfLines={2}
            fontWeight="400"
            _text={{
              fontSize: 'md',
              _light: {
                color: 'cyan.500',
              },
              color: 'cyan.400',
            }}
          >
            {book.buy_links[1].url}
          </Link>
          <Text bold mb={'-3'}>
            {book.buy_links[2].name}:
          </Text>
          <Link
            href={book.buy_links[2].url}
            numberOfLines={2}
            fontWeight="400"
            _text={{
              fontSize: 'md',
              _light: {
                color: 'cyan.500',
              },
              color: 'cyan.400',
            }}
          >
            {book.buy_links[2].url}
          </Link>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="gray.500" fontWeight="400"></Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
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
