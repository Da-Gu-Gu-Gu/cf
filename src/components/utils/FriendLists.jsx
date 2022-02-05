import React,{createRef,useState} from 'react'

import {HStack,InputLeftElement,VStack,Avatar,IconButton,useColorModeValue,Text,Input,InputGroup} from '@chakra-ui/react'

import {AiFillHeart} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'

import { useSelector,useDispatch } from 'react-redux'
import {
  useToast,
  Spinner,
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
import { setNoti } from './redux/userReducer'
import {BACKEND_URL} from './keys/keys'
import axios from 'axios'
import emailjs from 'emailjs-com'


const FriendLists = () => {
 
  const dispatch=useDispatch()
  const toast=useToast()
  const user=useSelector(state=>state.user.user)
  const [loading,setLoading]=useState(false)
  const token=useSelector(state=>state.user.token)
  const friendList=useSelector(state=>state.user.friends.data)
  console.log(friendList)
  const [search,setSearch]=useState('')
  const [crush,setCrush]=useState([{'name':'example'}])
  const fl=[...friendList]

  const theme=useColorModeValue('gray.200','gray.700')
 
  const {isOpen,onOpen,onClose } = useDisclosure()
  const addCrush=(crushId)=>{
    setCrush(friendList.filter((x)=>x.id===crushId))
    onOpen()
  }

  console.log(user)
emailjs.init('user_6Kk6YQiTCJEwRgqO4MBYR')

const sendEmail=async()=>{
  await emailjs.send(
    'service_yha6qc4',
   'template_y8poo7j',
  {
    "name":user[0].displayName,
    "crushName":crush[0].name.split(' ')[0],
    "toEmail":user[0].email
  }
  )
  .then(res=>{
    console.log(res.data)
  })
  .catch(err=>{
    console.log(err)
  })
}
  


const addNoti=async()=>{
  await axios.post(`${BACKEND_URL}/noti`,{
            'id':user[0].uid,
            'crushId':crush[0].id
          },{
            headers:{
              authorization:"Bearer "+token
            }
          })
          .then(res=>{
            console.log(res.data)
          })
          .catch(err=>{
            console.log(err)
          })
        }


const getNoti=async()=>{
 await axios.post(`${BACKEND_URL}/noti/me`,{
    'id':user[0].uid,
},
{
    headers:{
      authorization:"Bearer " + token
    }
})
.then(res=>{
    console.log(res.data)
    dispatch(setNoti({noti:res.data}))
})
.catch(err=>{
    console.log(err)
})
}

const confirmCrush=async()=>{
  setLoading(true)
  await axios.put(`${BACKEND_URL}/addcrush`,{
    'id':user[0].uid, //min yae id
    'crushId':crush[0].id,
  },{
    headers:{
      authorization:"Bearer " + token
    }
  })
  .then(res=>{
    if(res.status===200){
      console.log(res.data)
      toast({
        position:'bottom',
        title: `${res.data.msg}`,
        status: res.data.error?'error':'success',
        isClosable: true,
      })
      if(res.data.match){ 
        sendEmail()
        addNoti()
        getNoti()
      }
      onClose()
      setLoading(false)
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
          <Avatar name={friend.name} src={friend.picture.data.url} />
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
            <Button variant={'solid'} _hover={{ bg: useColorModeValue('#ff0a54', '#ff0a54') }} isLoading={loading} bg={'#ff0a54'} spinner={<Spinner size={'md'} color='white' />} onClick={confirmCrush} color={useColorModeValue('white','white')}>Confirm</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
 </>
    )
}

export default FriendLists
