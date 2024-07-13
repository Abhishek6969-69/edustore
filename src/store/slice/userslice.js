import {createSlice} from "@reduxjs/toolkit"

const userslice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUsers(state, action) {
            const existingUser = state.findIndex(user => user.id === action.payload.id);
            
            if (existingUser===-1) {
                state.push({ ...action.payload, qty: 1 });
            }
            else{
                state[existingUser].qty =state[existingUser].qty+ 1;
             
            }
           
        },
        decreasequantity(state,action){
            const existingUserIndex = state.findIndex(user => user.id === action.payload.id);
            if (existingUserIndex !== -1) {
                if (state[existingUserIndex].qty > 1) {
                    state[existingUserIndex].qty -= 1;
                } else {
                  
                    state.splice(existingUserIndex, 1);
                }
            }
        },
        removeuser(state,action){
            state.splice(action.payload,1)
           
        },
        clearalluser(state,action){
            state.length=0;
        },
      
    },
})
export default userslice.reducer;
export const{addUsers,removeuser,clearalluser}=userslice.actions