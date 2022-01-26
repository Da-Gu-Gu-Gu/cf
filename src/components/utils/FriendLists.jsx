import React from 'react'

import {HStack,VStack,Avatar,IconButton,useColorModeValue,Text,} from '@chakra-ui/react'
import {BiTrash} from 'react-icons/bi'

import { useSelector } from 'react-redux'

const FriendLists = () => {

  const friendList=useSelector(state=>state.user.friends.friends.data)
  console.log(friendList)

  const theme=useColorModeValue('gray.200','gray.700')
 
    return (


      <VStack spacing={4}  className='crushList ' p={4} bg={theme} >
        {friendList.map(friend=>(
          <HStack spacing={4} key={friend.id} bg={theme} p={2} borderRadius={10}>
          <Avatar name='Dan Abrahmov' src={friend.id} />
          <Text fontWeight={'bold'} width={'200px'}> {friend.name} </Text>
            <IconButton  icon={<BiTrash/>} isRound={'true'} bg={theme} />
          </HStack>
          )
      )}
 </VStack>

    )
}

export default FriendLists
