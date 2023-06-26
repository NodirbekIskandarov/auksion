import { createSlice } from '@reduxjs/toolkit'

const initialState = false

export const toggleSlice = createSlice({
    name: 'toggleValue',
    initialState,
    reducers: {
        setToggleValue: (state, action) => {
            state = action.payload
            return state
        },
    },
})

export const { setToggleValue } = toggleSlice.actions

export default toggleSlice.reducer
