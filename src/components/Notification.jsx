import React from 'react'
import { useSelector } from 'react-redux'
import { Container, IconButton, useColorModeValue } from '@chakra-ui/react'
import { Badge, HStack, VStack, StackDivider, Box, Avatar } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from 'react-icons/io'

const Notification = () => {

    const noti = useSelector(state => state.user.noti)
    console.log(noti)

    const theme = useColorModeValue('gray', 'gray.700')
    return (
        <div className='userpage'>
            <Link to="/user">
                <IconButton aria-label='Search database' _hover={{ bg: useColorModeValue('gray.50', 'gray.600') }} bg={useColorModeValue('white', 'gray.700')} ml={5} mb={5} icon={<IoMdArrowBack />} />
            </Link>
            <Container maxW={'container.sm'}>
                <VStack
                    divider={<StackDivider borderColor='gray.200' />}
                    spacing={4}
                    mt={3}
                    align='stretch'
                >
                    {noti.map(a =>
                   
                            <HStack spacing={4} h='60px' key={a._id} p={3} borderRadius={10}>

                                <Avatar name={a.crushId.name} src={a.crushId.img} bg={a.read ? theme : '#ff0a54'} />
                                <Box>Congratulation, <i>{a.crushId.name}</i> also crush on you 😙
                                </Box>
                                {a.read ? null : (
                                    <Badge style={{ fontSize: '10px' }} colorScheme='green'>
                                        New
                                    </Badge>
                                )
                                }
                            </HStack>

                    
                    )}
                </VStack>
            </Container>
        </div>
    )
}

export default Notification