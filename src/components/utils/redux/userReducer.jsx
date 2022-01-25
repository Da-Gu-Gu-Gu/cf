import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name:'user',
    initialState:{
        user:null,
        token:''
    },
    reducers:{
        getUser:(state,action)=>{
            state.user=action.payload.user
        },
        logoutUser:(state,action)=>{
            state.user=null
            state.token=''

        },
        setToken:(state,action)=>{
            state.token=action.payload
        }
    }
})


export const {getUser,logoutUser,setToken}=userSlice.actions
export default userSlice.reducer