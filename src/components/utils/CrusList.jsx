import React,{useState,useEffect} from 'react'

import {HStack,VStack,Avatar,IconButton,useColorModeValue,Text } from '@chakra-ui/react'
import {BiTrash} from 'react-icons/bi'
import { setCl } from './redux/userReducer'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import {BACKEND_URL} from './keys/keys'
import Cf from './Cf'

const CrushList = () => {

  const dispatch=useDispatch()
  const friendList=useSelector(state=>state.user.friends.friends.data)
  const user=useSelector(state=>state.user.user)
  const token=useSelector(state=>state.user.token)
  const [cl,setCL]=useState([])
  


  useEffect(()=>{
     const getCl=()=>{
     axios.post( `${BACKEND_URL}/mycrushlist`,{
      'id':user[0].uid,
     },
      {
         headers: {
          authorization: "Bearer " + token
       }
       
      })
      .then(res=>{
        if(res.status=='200') {
          setCL(res.data)
          dispatch(setCl({cl:res.data}))
        }
      })
    }
    getCl()
  },[cl])
  

 


  const theme=useColorModeValue('gray.200','gray.700')
 
    return (
      <VStack spacing={4}  p={4} className='crushList'  bg={theme} >
        {
        cl.length<1?
        (
            <Cf data="crush" />
        )
        :
        cl.map(friend=>(
          <HStack spacing={4} key={friend.id} bg={theme} p={2} borderRadius={10}>
          <Avatar name='Dan Abrahmov' src={friend.id} />
          <Text fontWeight={'bold'} width={{base:'151px',md:'200px',lg:'200px'}}> {friend.name} </Text>
            <IconButton  icon={<BiTrash/>} isRound={'true'} bg={theme} />
          </HStack>
          )
      
        )}
       
 </VStack>
    )
}

export default CrushList
