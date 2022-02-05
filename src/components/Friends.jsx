import React from 'react'
import {Link} from 'react-router-dom'
import Canvas from './utils/Canvas'
import FriendLists from './utils/FriendLists'
import {IoMdArrowBack} from 'react-icons/io'
import { Container,IconButton,useColorModeValue } from '@chakra-ui/react'


const Friends = () => {
    return (
       
        <div className='friendpage'>
        
            <Link to="/user">
                    <IconButton aria-label='Search database'   _hover={{ bg: useColorModeValue('gray.50', 'gray.600') }}  bg={useColorModeValue('white', 'gray.700')} ml={5} mb={5} icon={<IoMdArrowBack />} />
            </Link>
        <Container maxW={'container.sm'}>
       
          <FriendLists/>
       
        </Container>
        <Canvas/>
        
        </div>
        
    )
}

export default Friends
