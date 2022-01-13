import React from 'react'
import About from './utils/About'
import Canvas from './utils/Canvas'
const Home = () => {
    return (
        <div className='wrapper'>
      
           <div className='landingPage common' >
                <h1 > Don't Live <span style={{color:'#ff0a54'}}> Alone </span></h1>
           </div>
       
           <About/>
  
        <Canvas/>
        </div>
    )
}

export default Home
