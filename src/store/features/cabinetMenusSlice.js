import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    main: true,
    fillAccount: false,
    refund: false,
    messages: false,
    payments: false,
    ownData: false,
    applications: false,
    wins: false,
    choseLots: false,
    contracts: false,
}

export const cabinetMenuSlice = createSlice({
    name: 'cabinetMenu',
    initialState,
    reducers: {
        activeMenu: (state, action) => {
            state = action.payload
            return state
        },
    },
})

export const { activeMenu } = cabinetMenuSlice.actions

export default cabinetMenuSlice.reducer
