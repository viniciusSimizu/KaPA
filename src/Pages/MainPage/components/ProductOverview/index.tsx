import React from 'react'
import './ProductOverview.scss'
import {useSelector} from "react-redux";

export function ProductOverview() {
    const {product} = useSelector(state => state['product'])

    return (
        <section>
            <div>
                <img alt={'Produto'} src={product.fotos[0]}/>
            </div>
            <div>teste</div>
            <div>teste</div>
        </section>
    )
}