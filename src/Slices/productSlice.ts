import {createSlice} from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        isToAnalysis: false,
        product: {}
    },
    reducers: {
        update: (state, action) => {
            state.product = {
                ...state.product,
                ...action.payload
            }
            state.isToAnalysis = true
        },
        suspendAnalysis: (state) => {
            state.isToAnalysis = false
        }
    }
})

export const {update, suspendAnalysis} = productSlice.actions
export const productReducer = productSlice.reducer
