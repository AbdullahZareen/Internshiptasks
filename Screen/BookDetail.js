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
        _dark={{ backgroundColor: 'gray.700' }}
      >
        <Box>
          <AspectRatio ratio={7 / 9}>
            <Image
              source={{
                uri: book.book_image,
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="violet.500"
            _text={{ color: 'white', fontWeight: '700', fontSize: 'xs' }}
            position="absolute"
            bottom={0}
            px="3"
            py="1.5"
          >
            BOOK
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              The Garden City
            </Heading>
            <Text
              fontSize="xs"
              _light={{ color: 'violet.500' }}
              _dark={{ color: 'violet.300' }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              The Silicon Valley of India.
            </Text>
          </Stack>
          <Text fontWeight="400">
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="gray.500" fontWeight="400">
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
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