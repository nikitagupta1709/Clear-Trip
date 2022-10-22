import { Box, Button, Highlight, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Select, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { FcGoogle } from "react-icons/fc"
import { HiOutlineMinus } from "react-icons/hi"

export const Login = () => {
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button py={6} bg="#3366cc" color="white" _hover={{bg:"#00498D"}} onClick={onOpen}>Log in / Sign up</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered >
        <ModalOverlay />
        <ModalContent maxW="900px">
          <ModalCloseButton />
          <ModalBody display="flex" w="100%" p={0}>
            <Image w="50%" src="https://fastui.cltpstatic.com/raw/upload/ct-air-desktop-pwa-prod/en/static/media/Desktop_Banner.72888b38.png" alt=""/>
            <Box gap="40px" display="flex" flexDirection="column">
              <Box px={10} mt="80px" display="flex" gap="30px" flexDirection="column">
                <Box display="flex" gap="10px" w="100%">
                  <Select placeholder='+91' width="25%">
                    <option value='option1'>India (+91)</option>
                  </Select>
                  <form className='form'>
                      <Input  type='tel' placeholder='phone number' required/>
                  </form>
                </Box >
                <Button w="100%" bg="#3366cc" color="white">Get OTP</Button>
                <Box color='#ababab'display="flex" ml="160px" alignItems="center"  >
                  <HiOutlineMinus  />
                    <Text>or</Text>
                  <HiOutlineMinus />
                </Box>
                <Button m="auto" w="100%" border="1px solid #3366cc" color="#3366cc" display="flex" alignItems="center" gap="5px">
                  <Text> Continue with </Text>
                  <FcGoogle/> 
                </Button>
              </Box>
              <Box p={10} fontSize="13px"  >
                <Box borderTop="1px solid #e6e6e6" p={5} color="#ababab">
                  <Highlight query={['privacy policy ', 'terms of use']} styles={{ color: '#3366cc'}}>By continuing, you agree to Cleartrip's privacy policy & terms of use</Highlight >
                </Box>
              </Box>
              <Box borderTop="1px solid #e6e6e6" p={5} color="#ababab">
                  <Text>Don't have an account? Sing up</Text>
                </Box>
            </Box> 

          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}