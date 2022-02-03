import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Canvas from './utils/Canvas'
import { Container } from '@chakra-ui/react'
import TabMenu from './utils/TabMenu'
import axios from 'axios'
import {BACKEND_URL} from './utils/keys/keys'
import { setNoti } from './utils/redux/userReducer' 

const User = () => {

    const dispatch=useDispatch()
    const token=useSelector(state=>state.user.token)
    const user=useSelector(state=>state.user.user)
    console.log(token)
    console.log(user)

    useEffect(()=>{
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
    
        getNoti()
    },[])
    return (
        <div className='userpage'>
        <Container maxW={'container.sm'}>
            <TabMenu/>
        </Container>
        <Canvas/>
        </div>
    )
}

export default User
