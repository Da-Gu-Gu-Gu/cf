import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }

// const styles= {
// global:(props)=>({
//     body:{
//         color: props.colorMode === 'dark' ? 'red' : 'gray.600',
//         bg:mode('white', 'gray.800')(props)
//     },
//     '.about':{
//         bg:mode('white', 'gray.800')(props)
//     }
// })
// }

const components={
    global:(props)=>({
    Button:{
        bg:mode('white', 'gray.800')(props)
    }
})
}

  const theme = extendTheme({ 
    config ,
    // styles,
    components
})

  export default theme