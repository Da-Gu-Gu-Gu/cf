import React, { useState } from 'react'
import { Text, Button, Stack, Container, useColorMode, useColorModeValue, Avatar, AvatarBadge } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react'
import { Flex, Center } from '@chakra-ui/react'
import { FaFacebook } from 'react-icons/fa'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { BsSun } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { getUser, getFriends, logoutUser, setToken } from './redux/userReducer'
import { getAuth, signInWithPopup, FacebookAuthProvider, } from 'firebase/auth'
import FirebaseApp from './firebase/firebase'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { BACKEND_URL } from './keys/keys'
import { IoIosNotificationsOutline } from 'react-icons/io'
import {FaUserFriends} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'

FirebaseApp()
const Navigation = () => {


  const dispatch = useDispatch()
  const User = useSelector(state => state.user.user)
  const { colorMode, toggleColorMode } = useColorMode()
  const [user, setUser] = useState()

  const navigate = useNavigate()

  const auth = getAuth()
  const provider = new FacebookAuthProvider()
  provider.addScope('user_friends')
  const LoginFacebook = () => {
    signInWithPopup(auth, provider)
      .then(res => {
        setUser(res.user.providerData)
        dispatch(getUser({ user: res.user.providerData }))
        const credential = FacebookAuthProvider.credentialFromResult(res);
        const accessToken = credential.accessToken

        console.log(accessToken)
        axios.post(`${BACKEND_URL}/user`, {
          'fbId': res.user.providerData[0].uid,
          'name': res.user.providerData[0].displayName,
          'email': res.user.providerData[0].email,
          'img': res.user.providerData[0].photoURL,
        })
          .then((res) => {
            if (res.data.message != 'error') {
              dispatch(setToken({ token: res.data.message }))
            }
            axios.get(`https://graph.facebook.com/v12.0/me?fields=friends&access_token=${accessToken}`)
              .then(res => {
                console.log(res)
                dispatch(getFriends({ friends: res.data }))
                navigate('/user')
              })
          })
      })
  }

  const Logout = () => {
    dispatch(logoutUser())
    navigate('/user')
  }

  return (

    <div className="nav"     >
      <Container maxW="container.xl" justifyContent='space-between' display='flex'>
        <Text fontWeight={'bold'}>
          <Link to="/">Crush Finder</Link>
        </Text>

        <Stack direction='row' spacing={3} paddingTop={'5px'}>
          <Button outline='none' onClick={toggleColorMode} _hover={{ bg: useColorModeValue('gray.50', 'gray.600') }} bg={useColorModeValue('white', 'gray.700')} color={useColorModeValue('gray.700', 'white')}>
            {colorMode === 'light' ? <BsSun /> : <BsFillMoonStarsFill />}
          </Button>

          {!User ?
            (<Button onClick={LoginFacebook} colorScheme={'facebook'} size={'md'} leftIcon={<FaFacebook />}>
              Facebook
            </Button>
            ) :
            (
              <Menu isLazy >
                <MenuButton
                  transition='all 0.2s'
                  pb={4}

                >
                  <Flex>
                    <Center pt={1} >
                      <Avatar height={'30px'} width={'30px'} src={User[0].photoURL} mr={1} />  <IoIosArrowDown />
                    </Center>
                  </Flex>
                </MenuButton>
                <MenuList maxHeight={'160px'} mt={1} bg={'gray.800'}>
                  <MenuItem maxHeight={'40px'}  _hover={{ bg: 'gray.700' }}>
                    <Text color={'white'}>
                      <Avatar bg='gray.800'  _hover={{ bg: 'gray.700' }} height={'35px'} mt={2} mr={2} width={'35px'} icon={<IoIosNotificationsOutline fontSize='1.5rem' color='white'/>}>
                        <AvatarBadge borderColor='gray.800' mb={6} mr={1} bg='tomato' boxSize='0.7em' />
                      </Avatar>Notifications</Text></MenuItem>
                      <Link to='/friends'><MenuItem maxHeight={'40px'}   _hover={{ bg: 'gray.700' }}>
                 
                      <Avatar bg='gray.800' _hover={{ bg: 'gray.700' }} height={'35px'} mt={1} mr={2} width={'35px'} icon={<FaUserFriends fontSize='1.5rem' color='white'/>}/>
                    Friends
                
                    </MenuItem>
                    </Link>
                  <MenuDivider />
                  <MenuItem maxHeight={'40px'} onClick={Logout} color={'tomato'}  _hover={{ bg: 'gray.700' }}>
                  <Avatar bg='gray.800' _hover={{ bg: 'gray.700' }} height={'35px'} mt={1} mr={2} width={'35px'} icon={<FiLogOut fontSize='1.5rem' color='red'/>}/>
                    Logout</MenuItem>
                </MenuList>
              </Menu>
            )
          }

        </Stack>
      </Container>
    </div>


  )
}

export default Navigation
