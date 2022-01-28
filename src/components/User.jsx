import React from 'react'
import CrushList from './utils/CrusList'
import Canvas from './utils/Canvas'
import CrushAdd from './utils/CrushAdd'
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
