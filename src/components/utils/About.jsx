import React from 'react'
import { Container, Circle, Badge } from '@chakra-ui/react'

const About = () => {
    return (
        <div className="about common">
            <Container maxW={'container.xl'} >
                <p>Usage </p>


                <div className="wrap">
                    <div className="one">
                        <Circle className='icon' size='20px' bg='black' color='white' mr="3">
                            1
                        </Circle>
                        <span>Login with Facebook</span>
                    </div>
                    <div className="two">
                        Two
                    </div>
                </div>

                <div className="wrap">
                    <div className="three">
                        <Circle className='icon' size='20px' bg='black' color='white' mr="3">
                            2
                        </Circle>
                    
                            <span >Search your's <i>crush</i> and add to crush list </span>
                          
                
                    </div>
                    <div className="four">
                        Four
                    </div>
                </div>

                <div className="wrap">
                    <div className="five">
                        <Circle className='icon' size='20px' bg='black' color='white' mr="3">
                            3
                        </Circle>
                        <span>If you match with your's <i>crush</i> , we will notify you </span>
                    </div>
                    <div className="six">
                        six
                    </div>
                </div>


                <div className="tip" style={{marginTop:'25px'}}>
                                <Badge mr='3'  size={'sm'} fontSize='0.8em' bg='black' color={'white'}>
                                    Tip :
                                </Badge>
                                More your friend use this, get more chance !
                            </div>

            </Container>
        </div>
    )
}

export default About
