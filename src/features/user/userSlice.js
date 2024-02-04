import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    lastName: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setFirstName: (state,action) => {
            console.log('Setting firstName:', action.payload);
            state.firstName = action.payload
        },
        setLastName: (state,action) => {
            console.log("Setting lastName:", action.payload)
            state.lastName = action.payload
        }
    }
})

export const {setFirstName, setLastName} = userSlice.actions
export default userSlice.reducer