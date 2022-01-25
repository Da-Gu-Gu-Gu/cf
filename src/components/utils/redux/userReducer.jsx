import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name:'user',
    initialState:{
        user:null,
        token:'',
        friends:null,
    },
    reducers:{
        getUser:(state,action)=>{
            state.user=action.payload.user
        },
        getFriends:(state,action)=>{
            state.friends=action.payload.friends
        },
        logoutUser:(state,action)=>{
            state.user=null
            state.token=''
            state.friends=null

        },
        setToken:(state,action)=>{
            state.token=action.payload
        }
    }
})


export const {getUser,logoutUser,setToken,getFriends}=userSlice.actions
export default userSlice.reducer