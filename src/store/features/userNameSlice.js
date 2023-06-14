import { createSlice } from '@reduxjs/toolkit'

const initialState = localStorage.getItem('username')

export const userNameSlice = createSlice({
    name: 'setUsername',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state = action.payload
            return state
        },
    },
})

export const { setUsername } = userNameSlice.actions

export default userNameSlice.reducer
