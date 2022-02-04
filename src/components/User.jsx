import React,{useEffect} from 'react'
import Canvas from './utils/Canvas'
import { Container } from '@chakra-ui/react'
import TabMenu from './utils/TabMenu'


const User = () => {


    return (
        <div className='userpage'>
        <Container maxW={'container.sm'}>
            <TabMenu/>
        </Container>
        <Canvas/>
        </div>
    )
}

export default User
