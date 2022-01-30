import React,{createRef,useState} from 'react'

import {HStack,InputLeftElement,VStack,Avatar,IconButton,useColorModeValue,Text,Input,InputGroup} from '@chakra-ui/react'

import {AiFillHeart} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'

import { useSelector } from 'react-redux'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import Cf from './Cf'
import {BACKEND_URL} from './keys/keys'
import axios from 'axios'

const FriendLists = () => {
 
  const user=useSelector(state=>state.user.user)
  console.log(user)
  const token=useSelector(state=>state.user.token)
  const friendList=useSelector(state=>state.user.friends.friends.data)
  const [search,setSearch]=useState('')
  const [crush,setCrush]=useState([{'name':'example'}])
  const fl=[...friendList]

  const theme=useColorModeValue('gray.200','gray.700')
 
  const {isOpen,onOpen,onClose } = useDisclosure()
  const addCrush=(crushId)=>{
    setCrush(friendList.filter((x)=>x.id===crushId))
    onOpen()
    console.log(crush)
  }

const confirmCrush=async()=>{
  await axios.put(`${BACKEND_URL}/addcrush`,{
    'id':user[0].uid, //min yae id
    'crushId':crush[0].id,
  },{
    headers:{
      authorization:token
    }
  })
  .then(res=>{
    if(res.status===200){
      onClose()
    }
  })
}


    return (

      <>
      <VStack spacing={4}  className='friendList ' p={4} bg={theme} >
          <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<BiSearch color='gray.500' />}
    />
    <Input type='input'  placeholder='Search...'  onChange={(event)=>setSearch(event.target.value)} />
  </InputGroup>

        {
          fl.length<1?
          (
            <Cf data="friend"/>
          ):
          fl.sort((a,b)=>a.name.localeCompare(b.name))
          .filter((x)=>{
            if(search===''){
              return x
            }
            else if(x.name.toLowerCase().includes(search.toLowerCase())){
                return x
            }
          })
          .map(friend=>
          (
          <HStack spacing={4} key={friend.id} bg={theme} p={2}  borderRadius={10}>
          <Avatar name='Dan Abrahmov' src={friend.id} />
          <Text fontWeight={'bold'} width={{base:'151px',md:'200px',lg:'200px'}}> {friend.name} </Text>
            <IconButton  icon={<AiFillHeart/>} isRound={'true'} bg={theme}  onClick={()=>addCrush(friend.id)} />
          </HStack>
          )
      )}
 </VStack>

 <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Crush Confirmation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <p style={{display:'inline',color:'#ff0a54',fontWeight:'bolder'}}>{crush[0].name.split(' ')[0]}</p> is your crush ? 
          </ModalBody>
          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              No
            </Button>
            <Button variant='ghost' bg={'#ff0a54'} onClick={confirmCrush} color={useColorModeValue('white','white')}>Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
 </>
    )
}

export default FriendLists
