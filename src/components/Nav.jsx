import React,{useContext, useState} from 'react';

import {ProductContext} from '../ItemListContext';

export default function Nav({getCartTotal}) {

    const [products] = useContext(ProductContext) 
    return (
        <div>
            <p>Cart({getCartTotal()})</p>
            
        </div>
    )
}
