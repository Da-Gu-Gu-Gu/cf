import React from 'react'
import { Container } from '@chakra-ui/react'
import About from './utils/About'
import Canvas from './utils/Canvas'
const Home = () => {
    return (
        <div>
        <Container maxW={'container.xl'} >
           <div className='landingPage'>
                <h1 > Don't Live <span style={{color:'red'}}> Alone </span></h1>
           </div>
       
           <About/>
        </Container>
        <Canvas/>
        </div>
    )
}

export default Home
