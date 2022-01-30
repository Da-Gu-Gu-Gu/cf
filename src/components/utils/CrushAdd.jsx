import React from 'react'
import { Input,HStack ,Button,useColorModeValue,VStack} from '@chakra-ui/react'


const CrushAdd = () => {
    return (
        <VStack mt={'50px'} >
        <HStack spacing={4} className='crushadd' >
       
            <Input variant='filled' placeholder='Enter Crush Name' _hover={{ bg:useColorModeValue('gray.200', 'gray.700') }} _focus={{ bg:useColorModeValue('gray.200', 'gray.700') }} bg={useColorModeValue('gray.200', 'gray.700')} />
            <Button bg={"#ff0a54"} color={'white'}  _hover={{ bg:useColorModeValue('#ff0a54', '#ff0a54') }} >
                Add
            </Button>
        </HStack>
        </VStack>
    )
}

export default CrushAdd
