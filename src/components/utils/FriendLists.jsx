import React from 'react'

import {HStack,InputLeftElement,VStack,Avatar,IconButton,useColorModeValue,Text,Input,InputGroup} from '@chakra-ui/react'
import {AiFillHeart} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'

import { useSelector } from 'react-redux'
import Cf from './Cf'

const FriendLists = () => {

  const friendList=useSelector(state=>state.user.friends.friends.data)


  const theme=useColorModeValue('gray.200','gray.700')
 
    return (


      <VStack spacing={4}  className='friendList ' p={4} bg={theme} >
          <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<BiSearch color='gray.500' />}
    />
    <Input type='input' placeholder='Search...' />
  </InputGroup>

        {
          friendList.length<1?
          (
            <Cf data="friend"/>
          ):
          friendList.map(friend=>(
          <HStack spacing={4} key={friend.id} bg={theme} p={2}  borderRadius={10}>
          <Avatar name='Dan Abrahmov' src={friend.id} />
          <Text fontWeight={'bold'} width={{base:'151px',md:'200px',lg:'200px'}}> {friend.name} </Text>
            <IconButton  icon={<AiFillHeart/>} isRound={'true'} bg={theme} />
          </HStack>
          )
      )}
 </VStack>

    )
}

export default FriendLists
