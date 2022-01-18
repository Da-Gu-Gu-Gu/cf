import React from 'react'
import CrushList from './utils/CrusList'
import Canvas from './utils/Canvas'
import CrushAdd from './utils/CrushAdd'
import { Container } from '@chakra-ui/react'

const User = () => {
    return (
        <div className='userpage'>
        <Container maxW={'container.sm'}>
            <CrushList/>
            <CrushAdd/>
        </Container>
        <Canvas/>
        </div>
    )
}

export default User
