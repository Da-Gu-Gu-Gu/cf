import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name:'user',
    initialState:{
        user:null,
        token:'',
        friends:[],
        cl:[],
        noti:[]
    },
    reducers:{
        getUser:(state,action)=>{
            state.user=action.payload.user
        },
        getFriends:(state,action)=>{
            state.friends=action.payload.friends
        },
        setCl:(state,action)=>{
            state.cl=action.payload.cl
        },
        setNoti:(state,action)=>{
            state.noti=action.payload.noti
        },
        logoutUser:(state,action)=>{
            state.user=null
            state.token=''
            state.friends=[]
            state.cl=[]

        },
        setToken:(state,action)=>{
            state.token=action.payload.token
        }
    }
})


export const {getUser,logoutUser,setToken,getFriends,setCl,setNoti}=userSlice.actions
export default userSlice.reducer