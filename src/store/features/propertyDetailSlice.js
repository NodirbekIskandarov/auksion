import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    item: {},
    id: 0,
}

export const propertyDetailSlice = createSlice({
    name: 'propertyDetail',
    initialState,
    reducers: {
        addProperty: (state, action) => {
            state = action.payload
            return state
        },
    },
})

export const { addProperty } = propertyDetailSlice.actions

export default propertyDetailSlice.reducer
