import React from 'react';

import './MainPage.scss'
import {useSelector} from "react-redux";
import {ProductOverview} from "./components/ProductOverview";

export function MainPage() {
    const productState = useSelector(state => state['product'])

    return (
        <>
            <main>
                {productState.isToAnalysis ?
                    <ProductOverview/>
                    :
                    <section>verdade mintu</section>
                }
            </main>
        </>
    );
}
