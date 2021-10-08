import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: null,
        isAuthenticated: false
    },
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true
            state.name = action.payload.name
            
        } ,
        logout: state => {
            state.isAuthenticated = false
        }
    }
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer