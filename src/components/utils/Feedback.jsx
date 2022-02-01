import React from 'react'
import { Container,Button } from '@chakra-ui/react'
import {RiShareForwardLine} from 'react-icons/ri'
import {FacebookShareButton} from 'react-share'
import { DOMAIN } from './keys/keys';
const Feedback = () => {
    return (
        <div className='feedback common'>
           <Container maxW={'container.xl'}>
               <div className="center">
               <p>GOOD LUCK HAVE FUN</p>
               <h6 className='support'>Support By</h6>
               <FacebookShareButton url={DOMAIN} title='Ha Ha' quote="Do you crush on me ? So,don't love secretly" hashtag='#crush_finder'>
               <Button rightIcon={<RiShareForwardLine />} mt={'3'} colorScheme='facebook' variant='solid'>
    Share
  </Button>
        </FacebookShareButton>
  
  </div>
           </Container>
        </div>
    )
}

export default Feedback
