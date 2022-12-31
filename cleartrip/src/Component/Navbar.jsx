import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Login } from '../Pages/Login'

export const Navbar = () => {
  return (
    <Flex p={5} boxShadow= "rgba(0, 0, 0, 0.04) 0px 3px 5px" justifyContent="space-between">
      <NavLink to="/">
        <Box display="flex" flexDirection="row" gap="10px">
            <Image w="20px" mt="15px" h="20px" src="data:image/png;base64" alt=""/>
            <Text fontSize="27px" fontWeight="500" color="#ff4f17">cleartrip</Text>
        </Box>
      </NavLink>
      <Box>
        {/* <Button py={6} bg="#3366cc" color="white" _hover={{bg:"#00498D"}}> Log in/ Sign up</Button> */}
        <Login />
      </Box>
    </Flex>
  )
}
