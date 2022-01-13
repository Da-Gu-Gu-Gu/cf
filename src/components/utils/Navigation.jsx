import React from 'react'
import { Text,Button,Stack, Container} from '@chakra-ui/react'
import {FaFacebook} from 'react-icons/fa'

const Navigation = () => {
    return (

       <div className="nav"     >
         <Container  maxW="container.xl" justifyContent='space-between'  display='flex'>
                    <Text fontWeight={'bold'}>
                    Crush Finder
                 </Text>
            
                <Stack direction='row' spacing={3} paddingTop={'5px'}>
                   
        <Button colorScheme='facebook' size={'md'} leftIcon={<FaFacebook />}>
              Facebook
        </Button>
        
        </Stack>
        </Container>
         </div>
          
      
    )
}

export default Navigation
