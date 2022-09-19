import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isMenuActive: false,
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        menuSwitch: (state, action) => {
            state.isMenuActive = action.payload;
        },
    },
});

export const { menuSwitch } = menuSlice.actions

export default menuSlice.reducer;
