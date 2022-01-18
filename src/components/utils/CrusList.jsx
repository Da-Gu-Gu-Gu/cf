import React,{useState} from 'react'

import {HStack,VStack,Avatar,IconButton,useColorModeValue,Text } from '@chakra-ui/react'
import {BiTrash} from 'react-icons/bi'

const CrushList = () => {

  const crushList=[]

 
    return (
      <VStack spacing={4}  p={4} className='crushList'  bg={useColorModeValue('gray.200', 'gray.700')} >
          <HStack spacing={4} bg={useColorModeValue('gray.100', 'gray.700')} p={2} borderRadius={10}>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
          <Text fontWeight={'bold'} width={'200px'}> Hein Htet Aung </Text>
            <IconButton  icon={<BiTrash/>} isRound={'true'} bg={useColorModeValue('gray.200', 'gray.700')} />
          </HStack>
          <HStack spacing={4} bg={useColorModeValue('gray.100', 'gray.700')} p={2} borderRadius={10}>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
          <Text fontWeight={'bold'} width={'200px'}> Naw Phaw El Htar </Text>
            <IconButton  icon={<BiTrash/>} isRound={'true'} bg={useColorModeValue('gray.200', 'gray.700')} />
          </HStack>
          <HStack spacing={4} bg={useColorModeValue('gray.100', 'gray.700')} p={2} borderRadius={10}>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
          <Text fontWeight={'bold'} width={'200px'} > Your Crush Name </Text>
            <IconButton  icon={<BiTrash/>} isRound={'true'} bg={useColorModeValue('gray.200', 'gray.700')} />
          </HStack>
       
 </VStack>
    )
}

export default CrushList
