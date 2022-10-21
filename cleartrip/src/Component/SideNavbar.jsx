import { Box, StackDivider, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import {RiHotelFill} from 'react-icons/ri'

export const SideNavbar = () => {
  return (
    <VStack
      divider={<StackDivider borderColor='gray.200' />}
      spacing={4}
      align='stretch'
      w="20%"
    >
      <Box w="50%" m="auto" p={3} h='40px' bg='#d6e8fc' display="flex" flexDirection="row" gap="20px">
        <RiHotelFill fontSize="30px"/>
        <Text>Hotels</Text>
      </Box>
      <Box h='40px' bg='tomato' display="flex" flexDirection="row">
        2
      </Box>
      <Box h='40px' bg='pink.100' display="flex" flexDirection="row">
        3
      </Box>
      <Box h='40px' bg='pink.100' display="flex" flexDirection="row">
        4
      </Box>

    </VStack>
  )
}
