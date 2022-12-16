import React from "react";
import {configureStore} from "@reduxjs/toolkit";
import {productReducer} from "../Slices/productSlice";


export const productStore = configureStore({
    reducer: {
        product: productReducer
    }
})
