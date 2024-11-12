import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    const [deliveryPrice, setDeliveryPrice] = useState(0); 
    const [deliveryCity, setDeliveryCity] = useState(''); 
    const [isOpenProductModal, setisOpenProductModal] = useState(false);
    
    const addToCart = (product) => {
        setCarrinho(prev => {
            const itemIndex = prev.findIndex(item => item.id === product.id);
            if (itemIndex !== -1) {
                const newCarrinho = [...prev];
                newCarrinho[itemIndex].quantidade += 1;
                return newCarrinho;
            } else {
                return [...prev, { ...product, quantidade: 1 }];
            }
        });
    };    

    return (
        <MyContext.Provider value={{ 
            carrinho, 
            setCarrinho,
            addToCart, 
            deliveryPrice, 
            setDeliveryPrice, 
            deliveryCity, 
            setDeliveryCity,
            isOpenProductModal,   
            setisOpenProductModal
            }}>
            {children}
        </MyContext.Provider>
    );
};
