import React from 'react'
import About from './utils/About'
import Canvas from './utils/Canvas'
import Feedback from './utils/Feedback'
const Home = () => {
    return (
        <div className='wrapper'>
      
           <div className='landingPage common' >
                <h1 > Don't Live <span style={{color:'#ff0a54'}}> Alone </span></h1>
           </div>
       
           <About/>
           <Feedback/>
  
        <Canvas/>
        </div>
    )
}

export default Home
