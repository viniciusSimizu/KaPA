import React, {useState} from 'react';
import {RxMagnifyingGlass} from 'react-icons/rx'
import {getKabumData} from "../../Helpers/getKabumData";

import './Header.scss'
import {Product} from "../../Types";
import {useDispatch, useSelector} from "react-redux";
import {update} from "../../Slices/productSlice";

export function Header() {
    const [searchField, setSearchField] = useState('')
    const dispatch = useDispatch()

    async function handleSavePriceOrProduct(e) {
        e.preventDefault()
        const data: Product = await getKabumData(searchField)
        dispatch(update(data))
    }

    return (
        <header>
            <h1 id={'logo'}>KaPA</h1>
            <form onSubmit={handleSavePriceOrProduct}>
                <input placeholder={'Código ou URL'} onChange={(e) => setSearchField(e.target.value)}/>
                <button type={'submit'}>
                    <RxMagnifyingGlass/>
                </button>
            </form>
        </header>
    )
}
