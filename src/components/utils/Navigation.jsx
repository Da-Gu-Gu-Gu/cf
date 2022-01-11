import React from 'react'
import {Box, Text,Button,Stack, Container} from '@chakra-ui/react'
import {FaFacebook} from 'react-icons/fa'

const Navigation = () => {
    return (

       <Box  h='50'   lineHeight='50px'  w="100%"  >
         <Container  maxW="container.xl" justifyContent='space-between'  display='flex'>
                    <Text color={'black'}>
                    Crush Finder
                 </Text>
                 {/* size={{base:'xs',md:'md',lg:'lg',xl:'lg'} */}
                <Stack direction='row' spacing={3} paddingTop={'5px'}>
                    <Button colorScheme='facebook' outline='none' size={{base:'xs',md:'md',lg:'lg',xl:'lg'}} leftIcon={<FaFacebook />}>
            Facebook
        </Button>
        <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
              Facebook
        </Button>
        
        </Stack>
        </Container>
         </Box>
          
      
    )
}

export default Navigation
