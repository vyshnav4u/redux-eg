import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "John",
    score: 100
}

const userSlicer = createSlice({
    name: "users",
    initialState,
    reducers: {
        addScore(state){
            state.score += 1; 
        },
        updateName(state, action){
            state.name = action.payload; 
        }
    }
})

export const userActions = userSlicer.actions;
export const userReducer = userSlicer.reducer;