import React from 'react'
import {Box, Text,Button,Stack, Container} from '@chakra-ui/react'
import {FaFacebook} from 'react-icons/fa'

const Navigation = () => {
    return (

       <Box  h='50' className="nav"   lineHeight='50px'  w="100%"  >
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
         </Box>
          
      
    )
}

export default Navigation
