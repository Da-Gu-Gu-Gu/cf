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
  const noti=useSelector(state=>state.user.noti)
  const { colorMode, toggleColorMode } = useColorMode()
  const [user, setUser] = useState()


  const aa=noti.some((x)=>x.read===false)
 


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
            axios.get(`https://graph.facebook.com/v12.0/me/friends?access_token=${accessToken}&fields=name,id,picture`)
              .then(res => {
                console.log(res.data)
                console.log(res.data.data[0].picture.data.url)
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
const facebookColor=useColorModeValue('#4267B2','#4267B2')
const theme=useColorModeValue('gray.200','gray.700')
const hover= useColorModeValue('gray.300', 'gray.600')
const color=useColorModeValue('black','white')
  return (

    <div className="nav"     >
      <Container maxW="container.xl" justifyContent='space-between' display='flex'>
        <Text fontWeight={'bold'}>
          <Link to="/">Crush H👓K</Link>
        </Text>

        <Stack direction='row' spacing={3} paddingTop={'5px'}>
          <Button outline='none' onClick={toggleColorMode} _hover={{ bg: useColorModeValue('gray.50', 'gray.600') }} bg={useColorModeValue('white', 'gray.700')} color={useColorModeValue('gray.700', 'white')}>
            {colorMode === 'light' ? <BsSun /> : <BsFillMoonStarsFill />}
          </Button>

          {!User ?
            (<Button onClick={LoginFacebook} _hover={facebookColor} bg={facebookColor} size={'md'} leftIcon={<FaFacebook />}>
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
                <MenuList maxHeight={'160px'} mt={1} bg={theme}>
                  <Link to="/noti">
                  <MenuItem maxHeight={'40px'}  _hover={{ bg:hover}} color={color}>
                
                      <Avatar bg={theme}  _hover={{ bg:hover}} height={'35px'} mt={2} mr={2} width={'35px'} icon={<IoIosNotificationsOutline fontSize='1.5rem' color={color}/>}>
                       { aa && (<AvatarBadge borderColor={theme} mb={6} mr={1} bg='tomato' boxSize='0.7em' />)}
                      </Avatar>Notifications
                      </MenuItem>
                    </Link>
                      <Link to='/friends'>
                        <MenuItem maxHeight={'40px'} color={color}  _hover={{ bg:hover}}>
                 
                    <Avatar bg={theme} _hover={{ bg:hover}} height={'35px'} mt={1} mr={2} width={'35px'} icon={<FaUserFriends fontSize='1.5rem' color={color}/>}/>
                    Friends
                
                    </MenuItem>
                    </Link>
                  <MenuDivider />
                  <MenuItem maxHeight={'40px'}  onClick={Logout} color={'#ff0a54'}  _hover={{ bg:hover}}>
                  <Avatar bg={theme} _hover={{ bg:hover}} height={'35px'} mt={1} mr={2} width={'35px'} icon={<FiLogOut fontSize='1.5rem' color={'#ff0a54'}/>}/>
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
