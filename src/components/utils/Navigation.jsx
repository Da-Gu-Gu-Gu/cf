import React,{useState} from 'react'
import { Text,Button,Stack, Container,useColorMode,useColorModeValue,Avatar} from '@chakra-ui/react'
import {FaFacebook} from 'react-icons/fa'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {BsSun} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { getUser } from './redux/userReducer'
import {getAuth,signInWithPopup,FacebookAuthProvider,} from 'firebase/auth'
import FirebaseApp from './firebase/firebase'
import axios from 'axios'
import {useDispatch} from 'react-redux'

FirebaseApp()
const Navigation = () => {

  const dispatch=useDispatch()
  const {colorMode,toggleColorMode}=useColorMode()
  const [user,setUser]=useState()

  const auth=getAuth()
  const provider=new FacebookAuthProvider()
  provider.addScope('user_friends')
  const LoginFacebook=()=>{
      signInWithPopup(auth,provider)
      .then(res=>{
        setUser(res.user.providerData)
        dispatch(getUser(res.user.providerData))
        const credential = FacebookAuthProvider.credentialFromResult(res);
        const accessToken = credential.accessToken
        console.log(accessToken)
        axios.get(`https://graph.facebook.com/v12.0/me?fields=friends&access_token=${accessToken}`)
       .then(res=>{
          console.log(res)
       })
      })
  }

    return (

       <div className="nav"     >
         <Container  maxW="container.xl" justifyContent='space-between'  display='flex'>
                    <Text fontWeight={'bold'}>
                   <Link to="/">Crush Finder</Link>
                 </Text>
            
                <Stack direction='row' spacing={3} paddingTop={'5px'}>
                <Button outline='none' onClick={toggleColorMode}    _hover={{ bg:useColorModeValue('gray.50', 'gray.600') }} bg={useColorModeValue('white', 'gray.700')} color={useColorModeValue('gray.700', 'white')}>
         {colorMode === 'light' ? <BsSun/> : <BsFillMoonStarsFill/>}
      </Button>
                   
       { !user?
       ( <Button onClick={LoginFacebook}   size={'md'} leftIcon={<FaFacebook />}>
              Facebook
        </Button>
       ):
       (
        <Avatar name='Dan Abrahmov' src={user.photoURL} />
       )
}
        
        </Stack>
        </Container>
         </div>
          
      
    )
}

export default Navigation
