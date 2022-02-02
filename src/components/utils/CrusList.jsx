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
  const friendList=useSelector(state=>state.user.friends.data)
  // console.log(friendList)
  const user=useSelector(state=>state.user.user)
  const token=useSelector(state=>state.user.token)
  const [crushList,setCrushList]=useState([])
  let cl=[]
  const removeCrush=async(crushId)=>{
    await axios.put(`${BACKEND_URL}/removecrush`,{
      'id':user[0].uid, //min yae id
      'crushId':crushId,
    },{
      headers:{
        authorization:"Bearer " + token
      }
    })
    .then(res=>{
      if(res.status===200){
        console.log(res.data)
      }
    })
  
  }
  


  useEffect(()=>{
     const getCl=async()=>{
     await axios.post( `${BACKEND_URL}/mycrushlist`,{
      'id':user[0].uid,
     },
      {
         headers: {
          authorization: "Bearer " + token
       }
       
      })
      .then(res=>{
        if(res.status=='200') {
          setCrushList(res.data)
          dispatch(setCl({cl:res.data}))
        }
      })
    }
    getCl()
  })
  



// console.log(crushList)

 


  const theme=useColorModeValue('gray.200','gray.700')
 
    return (
      <VStack spacing={4}  p={4} className='crushList'  bg={theme} >
        {
        crushList.length<1?
        (
            <Cf data="crush" /> 
        )
        :
        crushList.map(a=>friendList.filter(b=>b.id===a))
        .map((friend,index)=>
        (
          <HStack spacing={4} key={index} bg={theme} p={2} borderRadius={10}>
          <Avatar name={friend[0].id} src={friend[0].picture.data.url} />
          <Text fontWeight={'bold'} width={{base:'151px',md:'200px',lg:'200px'}}> {friend[0].name} </Text>
            <IconButton  icon={<BiTrash/>} isRound={'true'} bg={theme} onClick={()=>removeCrush(friend[0].id)} />
          </HStack>
          )
        )}
       
 </VStack>
    )
}

export default CrushList
