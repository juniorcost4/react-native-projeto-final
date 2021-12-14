import React, { createContext, useState, useContext, useEffect } from "react"
import Api from "../service/Api"

const CartContext = createContext()

export default function CartProvider({children}) {

    const [cart, setCart] = useState([])
    const [totalValue, setTotalValue] = useState(0)

    useEffect(() => {
        let value = 0
        cart.map((item) => {
            value = value + (item.valorUnitario * item.qtd)
        })
        setTotalValue(value)
    }, [cart])

    function add(item) {
        const newCart = [...cart];
        const idProduto = item.id;

        const productExists = newCart.find(product => product.id === idProduto);

        if (productExists) {
            productExists.qtd += item.qtd;           
        }else {  
            newCart.push(item);
        }

        setCart(newCart);
    }

    function remove(item) {
        const newCart = [...cart];
        const idProduto = item.id;

        const productExists = newCart.find(product => product.id === idProduto);

        if (productExists && productExists.qtd > 1) {
            productExists.qtd -= 1;           
        }else {  
            newCart.splice(newCart.indexOf(item, 1));
        }

        setCart(newCart);
    }

    const store = {
        add,
        cart,
        totalValue,
        remove
    }

    return (
        <CartContext.Provider value={store}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)

    const {
        cart,
        add,
        totalValue,
        remove
    } = context

    return { cart,
             add,
             totalValue,
             remove }
}