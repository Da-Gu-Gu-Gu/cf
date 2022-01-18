import React from 'react'
import { Text,Button,Stack, Container,useColorMode,useColorModeValue} from '@chakra-ui/react'
import {FaFacebook} from 'react-icons/fa'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {BsSun} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const Navigation = () => {

  const {colorMode,toggleColorMode}=useColorMode()
    return (

       <div className="nav"     >
         <Container  maxW="container.xl" justifyContent='space-between'  display='flex'>
                    <Text fontWeight={'bold'}>
                   <Link to="/">Crush Finder</Link>
                 </Text>
            
                <Stack direction='row' spacing={3} paddingTop={'5px'}>
                <Button outline='none' onClick={toggleColorMode}    _hover={{ bg:useColorModeValue('gray.50', 'gray.600') }} bg={useColorModeValue('white', 'gray.700')} color={useColorModeValue('gray.700', 'white')}>
         {colorMode === 'light' ? <BsSun/> : <BsFillMoonStarsFill/>}
      </Button>
                   
        <Button colorScheme={useColorModeValue('facebook','facebook')}  size={'md'} leftIcon={<FaFacebook />}>
              Facebook
        </Button>
        
        </Stack>
        </Container>
         </div>
          
      
    )
}

export default Navigation
