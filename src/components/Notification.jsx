import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { Button, Container, IconButton, Spacer, useColorModeValue,Text,useDisclosure} from '@chakra-ui/react'
import { Badge, Flex,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from 'react-icons/io'
import { BACKEND_URL } from './utils/keys/keys'
import { useDispatch } from 'react-redux'
import { setNoti } from './utils/redux/userReducer'
import axios from 'axios'
import moment from 'moment'


import { List, Avatar } from 'antd';

const Notification = () => {

    const dispatch=useDispatch()
    const noti = useSelector(state => state.user.noti)
    const token = useSelector(state => state.user.token)
    const user=useSelector(state=>state.user.user)
    console.log(token)

    console.log(user)
    const [crush,setCrush]=useState({'crushId':{
        'img':'',
        'name':''
    }})
    const color=useColorModeValue('black','white')
    const {isOpen,onOpen,onClose } = useDisclosure()

    const notiRead = async (id,crush) => {
        await axios.put(`${BACKEND_URL}/noti`, {
            id: id
        }, {
            headers: {
                authorization: 'Bearer ' + token    
            }
        })
            .then(res => {
                setCrush(crush)
                const removeNoti=noti.filter(x=>x._id!=id)
                onOpen()
                dispatch(setNoti({noti:removeNoti}))
            })
            .catch(err => { console.log(err) })
    }

    const deleteAll=async () => {
        await axios.delete(`${BACKEND_URL}/noti/all`,{
        headers: {
            authorization: 'Bearer ' + token    
          },
          data:{
            id: user[0].uid
          }
        })
            .then(res => {
                console.log(res)
                if(res.status===200) dispatch(setNoti({noti:[]}))
                
            })
            .catch(err => { console.log(err) })
    }

    return (
        <div className='userpage'>
            <Flex>
                <Link to="/user">
                    <IconButton aria-label='Search database' _hover={{ bg: useColorModeValue('gray.50', 'gray.600') }} bg={useColorModeValue('white', 'gray.700')} ml={5} mb={5} icon={<IoMdArrowBack />} />
                </Link>
                <Spacer />
                    <Button aria-label='Search database' onClick={deleteAll} _hover={{ bg: useColorModeValue('gray.50', 'gray.600') }} bg={useColorModeValue('white', 'gray.700')} mr={5} mb={5} >
                        Mark all as read
                    </Button>
            </Flex>
            <Container maxW={'container.sm'}>
                <List
                    className='notiWrap'
                    dataSource={noti.filter((b)=>b.read===false).reverse()}
                    renderItem={(a) => (
                     
                        <List.Item key={a._id} style={{cursor:'pointer'}} className='noti' onClick={()=>notiRead(a._id,a)}>
                            <List.Item.Meta
                                avatar={<Avatar src={a.crushId.img} name={a.crushId.name} />}
                                description={<Text color={color} fontWeight={'bold'} >Congratulation,<i>{a.crushId.name.split(' ')[0]}</i> also crush on you</Text>}
                                title={<Badge style={{ fontSize: '10px' }} colorScheme='green'>
                                New
                            </Badge>}
                            />
                            <Text color={color}>{moment(a.date).startOf('min').fromNow(Date.now())} ago</Text>
                    
                        </List.Item>
                    )}
                />

 <Modal
        m={5}
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>We can be more than friend 💑</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <div className='notiModal'>
              <div className='notibody'>
                <Avatar src={user[0].photoURL} name={user[0].displayName} />
                <p style={{marginTop:'5px'}}>{user[0].displayName.split(' ')[0]}</p>
              </div>
                <h2>➕</h2>
              <div className='notibody'>
                <Avatar src={crush.crushId.img} name={crush.crushId.name} />
                <p style={{marginTop:'5px'}}>{crush.crushId.name.split(' ')[0]}</p>
              </div>
          </div>
          </ModalBody>
          <ModalFooter>
            <Button variant={'solid'} onClick={onClose} mt={5} _hover={{ bg: useColorModeValue('#ff0a54', '#ff0a54') }} bg={'#ff0a54'}  color={useColorModeValue('white','white')}>
                Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
            </Container>
        </div>
    )
}

export default Notification
