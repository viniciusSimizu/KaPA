import React from 'react';
import './App.scss';
import {MainPage} from './Pages/MainPage';
import {Header} from "./Pages/Header";
import {Footer} from "./Pages/Footer";
import {Provider} from "react-redux";
import {productStore} from "./Stores/productStore";

function App() {
    return (
        <Provider store={productStore}>
            <Header/>
            <MainPage/>
            <Footer/>
        </Provider>
    );
}

export default App;
