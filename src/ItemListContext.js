import React,{createContext, useState} from 'react';

export const ProductContext = createContext();
export  const iPhone='expensive'
export const Samsung='cheap'


export  function ProductProvider(props) {
    
    const [products]=useState([
        {
            category: iPhone,
            name: 'iPhone',
            cost : 10,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6BMWrPXA9KyTtxa6o600mjeUNJ7zSXgaNt--FDCR6YjQ4XWS5G1J3dSF5ChurfQEGxorkxYs&usqp=CAc',
          },
          {
            category: Samsung,
            name: 'Samsung',
            cost : 20,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUGMCcF3_XBIKH5Dja-9iCkRP4CSA-CYaylQ&usqp=CAU'
          }
    ])


    return (
        <div>
            <ProductContext.Provider value={[products]} >
                {props.children}
            </ProductContext.Provider>
            
        </div>
    )
}