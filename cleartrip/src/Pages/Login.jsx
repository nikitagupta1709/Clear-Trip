import { Box, Button, Flex, Image, Input, InputGroup, InputLeftAddon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMinus } from "react-icons/ai"

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
            <Box p={10}>
              <Box p={4} display="flex" gap="20px">
                <Select placeholder='+91' width="25%">
                  <option value='option1'>India (+91)</option>
                </Select>
                <form>
                  <InputGroup>
                    <Input type='tel' placeholder='phone number' required/>
                  </InputGroup>
                </form>
              </Box >
              <Button w="100%" bg="#3366cc" color="white">Get OTP</Button>
              <Box display="flex" m="auto" w="60%" alignItems="center">
                <HiOutlineMinus />
                  <Text>or</Text>
                <AiOutlineMinus />
              </Box>
            </Box>           
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}