import React from 'react'
import { Container,Button } from '@chakra-ui/react'
import {RiShareForwardLine} from 'react-icons/ri'
const Feedback = () => {
    return (
        <div className='feedback common'>
           <Container maxW={'container.xl'}>
               <div className="center">
               <p>GOOD LUCK HAVE FUN</p>
               <h6 className='support'>Support By</h6>
               <Button rightIcon={<RiShareForwardLine />} mt={'3'} colorScheme='facebook' variant='solid'>
    Share
  </Button>
  </div>
           </Container>
        </div>
    )
}

export default Feedback
