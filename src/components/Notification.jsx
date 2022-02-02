import React,{useEffect} from 'react'
import axios from 'axios'
import { BACKEND_URL } from './utils/keys/keys'
import {useSelector} from 'react-redux'


const Notification=()=>{

    const user=useSelector(state=>state.user.user)
    const token=useSelector(state=>state.user.token)

    useEffect(()=>{
      const matchCrush=async()=>{
       await axios.post(`${BACKEND_URL}/match/me`,{
            'id':user[0].uid,
        },
         {
            headers: {
             authorization: "Bearer " + token
          }    
         })
         .then(res=>{
             console.log(res.data)
         })
        }
    matchCrush()
    
    })
   return (
        <div>aa</div>
    )
}

export default Notification