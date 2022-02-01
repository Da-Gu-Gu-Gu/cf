import React from 'react';
import { VStack,Text,Button,useColorModeValue } from '@chakra-ui/react';
import {RiShareForwardLine} from 'react-icons/ri'
import {FacebookShareButton} from 'react-share'
import { DOMAIN } from './keys/keys';


const Cf = (props) => {
    const theme=useColorModeValue('gray.200','gray.700')
  return  (
    <VStack spacing={4} p={4} bg={theme} className='cf'>
    {props.data==='crush'?
    (
        <Text fontWeight={'bold'} m={5} color={'gray.400'}>Don't have any crush?</Text>
    ):
    (
        <>
        <Text fontWeight={'bold'} m={3} color={'gray.400'}>Your friends are not still using this.</Text>
        <FacebookShareButton url={DOMAIN} title='Ha Ha' quote="Do you crush on me ? So,don't love secretly" hashtag='#crush_finder'>
        <Button rightIcon={<RiShareForwardLine style={{height:'25px'}}  />}  mt={'3'}   colorScheme='facebook' variant='solid'>
            Share
        </Button>
        </FacebookShareButton>
          
        </>
    )
}
    </VStack>
  )
};

export default Cf;
